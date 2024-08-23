import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description?: string
  defaultPriceId: string
}

export default function Product({
  imageUrl,
  name,
  price,
  description,
  defaultPriceId,
}: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Failed to redirect to checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={imageUrl}
            alt={`${imageUrl} Image.`}
            width={400}
            height={400}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{name}</h1>
          <span>{price}</span>

          <p>{description}</p>

          <button
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            Buy now
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Qfr8kXe3UI4lWS' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params.id

  if (!productId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    })
    const price = product.default_price as Stripe.Price

    if (
      !product ||
      !product.name ||
      !product.id ||
      product.images.length === 0 ||
      !price
    ) {
      throw new Error('Invalid product data')
    }

    return {
      props: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: (price.unit_amount / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        description: product.description,
        defaultPriceId: price.id,
      },

      revalidate: 60 * 60 * 1,
    }
  } catch (error) {
    console.error('Error retrieving Stripe session:', error.message)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
