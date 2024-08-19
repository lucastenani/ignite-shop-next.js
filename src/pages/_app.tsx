import { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/Logo.svg'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Ignite Logo" />
      </Header>

      <main>
        <Component {...pageProps} />
      </main>
    </Container>
  )
}
