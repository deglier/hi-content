import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br" className="scroll-p-20 scroll-smooth">
      <Head />
      <body className="bg-secondary-base text-secondary-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
