import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  product: { name: string; imageUrl: string }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Purchase made | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Purchase made!</h1>

        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={`${product.name} image.`}
            width={200}
            height={200}
          />
        </ImageContainer>

        <p>
          Woohoo <strong>{customerName}</strong>, your{' '}
          <strong>{product.name}</strong> T-shirt is already on its way from
          your home.
        </p>

        <Link href={'/'}>Back to catalog</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id

  if (!sessionId || Array.isArray(sessionId)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    })

    const customerName = session.customer_details?.name || 'Customer'
    const product = session.line_items?.data[0]?.price
      ?.product as Stripe.Product

    if (
      !product ||
      !product.name ||
      !product.images ||
      product.images.length === 0
    ) {
      throw new Error('Invalid product data')
    }

    return {
      props: {
        customerName,
        product: { name: product.name, imageUrl: product.images[0] },
      },
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
