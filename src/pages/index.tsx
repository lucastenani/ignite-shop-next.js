import Image from 'next/image'

import tShirt from '../assets/3.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <Product key={i}>
            <a href="#">
              <Image
                src={tShirt}
                alt={`t-shirt ${i}`}
                width={520}
                height={480}
              />

              <footer>
                <strong>X T-shirt</strong>
                <span>R$ 79.90</span>
              </footer>
            </a>
          </Product>
        )
      })}
    </HomeContainer>
  )
}
