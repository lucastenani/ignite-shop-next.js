import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
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
}

export default function Product({
  imageUrl,
  name,
  price,
  description,
}: ProductProps) {
  return (
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

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Qfr8kXe3UI4lWS' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

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
    },

    revalidate: 60 * 60 * 1,
  }
}
