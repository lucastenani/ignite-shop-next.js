import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product } from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1 },

    breakpoints: {
      '(min-width: 900px)': {
        slides: { perView: 2.5, spacing: 32 },
      },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <a href={`product/${product.id}`}>
              <Image
                src={product.imageUrl}
                alt={`${product.name} image.`}
                width={520}
                height={480}
              />

              <footer>
                <strong>{product.name}</strong>
                <span>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </footer>
            </a>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return { props: { products }, revalidate: 60 * 60 * 2 }
}
