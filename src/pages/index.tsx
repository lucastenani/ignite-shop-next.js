import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import tShirt from '../assets/3.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
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
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <Product key={i} className="keen-slider__slide">
            <a href="#">
              <Image src={tShirt} alt={`t-shirt ${i}`} />

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
