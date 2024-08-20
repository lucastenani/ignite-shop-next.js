import { useRouter } from 'next/router'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Cmiseta x</h1>
        <span>r$ 79,99</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          corporis animi, veniam exercitationem voluptates commodi corrupti ab
          ratione provident. Quaerat doloremque in incidunt unde, eaque
          laboriosam. Tempore et at dolores!
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  )
}
