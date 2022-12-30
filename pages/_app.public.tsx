import { Raleway } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@/pages/interface/styles/globals.css'
import Head from '@/pages/interface/components/Head'
import { ModalProvider } from '@/pages/interface/hooks/useModal'
// import { DefaultHead } from '@/pages/interface/components/Head'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ModalProvider>
        <main className={`${raleway.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ModalProvider>
    </>
  )
}
