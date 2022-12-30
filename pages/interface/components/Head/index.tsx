import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import webserver from '@/infra/webserver'
import useMediaQuery from '@/pages/interface/hooks/useMediaQuery'

export type Metadata = {
  type?: string
  title?: string
  description?: string
  image?: string
  url?: string
  noIndex?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

type HeadProps = {
  metadata?: Metadata
  children?: ReactNode
}

const webserverHost = webserver.getHost()

export function DefaultHead() {
  const router = useRouter()

  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)')
  const favicon = systemTheme ? '/favicon-dark.png' : '/favicon-light.png'

  const defaultMetadata: Metadata = {
    title: `Hi! I'm content!`,
    image: `${webserverHost}/default-image-share.png`,
    description:
      'Fotos e vídeos que trazem resultados para sua marca, produzidos de uma forma que você nunca viu antes!',
    url: `${webserverHost}${router.asPath}`,
    type: 'website',
    noIndex: false,
  }

  const { type, title, description, image, url } = defaultMetadata

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />
      <meta name="robots" content="index follow" key="robots" />

      <meta property="og:site_name" content="Hi! I'm content" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={image} key="og:image" />

      <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:description" />
      <meta property="twitter:image" content={image} key="twitter:image" />

      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <link rel="icon" href={favicon} type="image/png" />
      <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </NextHead>
  )
}

export default function Head({ children, metadata }: HeadProps) {
  const { type, title, description, image, url, noIndex, author, publishedTime, modifiedTime } =
    metadata || ({} as Metadata)
  return (
    <NextHead>
      {title && (
        <>
          <title>{`${title} · Hi! I'm content!`}</title>
          <meta name="title" content={`${title} · Hi! I'm content!`} key="title" />
          <meta property="og:title" content={`${title} · Hi! I'm content!`} key="og:title" />
          <meta property="twitter:title" content={`${title} · Hi! I'm content!`} key="twitter:title" />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} key="description" />
          <meta property="og:description" content={description} key="og:description" />
          <meta property="twitter:description" content={description} key="twitter:description" />
        </>
      )}
      {url && (
        <>
          <meta property="og:url" content={url} key="og:url" />
          <meta property="twitter:url" content={url} key="twitter:url" />
        </>
      )}

      {image && (
        <>
          <meta property="og:image" content={image} key="og:image" />
          <meta property="twitter:image" content={image} key="twitter:image" />
        </>
      )}

      {author && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="fotos e vídeos" />
        </>
      )}
      {noIndex && <meta name="robots" content="noindex, nofollow" key="robots" />}

      {type && <meta property="og:type" content={type} key="og:type" />}

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {children}
    </NextHead>
  )
}
