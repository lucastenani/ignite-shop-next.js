import Link from 'next/link'

import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Purchase made!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Woohoo <strong>Diego Fernandes</strong>, your{' '}
        <strong>Beyond the Limits</strong> T-shirt is already on its way from
        your home.
      </p>

      <Link href={'/'}>Back to catalog</Link>
    </SuccessContainer>
  )
}
