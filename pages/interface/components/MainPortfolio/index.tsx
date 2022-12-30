import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Image as ImageType, ThumbnailImageProps } from 'react-grid-gallery'

import Work, { ImageGallery } from '@/domain/work'

const DynamicGallery = dynamic(() => import('react-grid-gallery').then((comp) => comp.Gallery))

export default function MainPortfolio({ source }: { source: Work }) {
  return (
    <main className="mx-auto max-w-container space-y-8 px-6 xl:px-0">
      <header className="space-y-3 text-center italic text-neutral-high-base">
        <h1 className="text-2xl font-extrabold leading-tight">{source.frontmatter.title}</h1>
        <h3 className="font-semibold leading-none">Captação • Pós produção • Comercial</h3>
      </header>
      <article>
        {source.frontmatter.content.type === 'gallery' && <Gallery images={source.frontmatter.content.images} />}
        {source.frontmatter.content.type === 'video' && <h1>video</h1>}
      </article>
    </main>
  )
}

export interface CustomImage extends ImageType {
  original: string
}

function Gallery({ images }: { images: ImageGallery[] }) {
  const imagesMapped: CustomImage[] = images.map((image) => ({
    src: image.src,
    original: image.src,
    width: image.ratioX ?? 3,
    height: image.ratioY ?? 4,
  }))
  return (
    <DynamicGallery
      images={imagesMapped}
      enableImageSelection={false}
      margin={4}
      rowHeight={200}
      thumbnailImageComponent={GalleryImage}
    />
  )
}

function GalleryImage(props: ThumbnailImageProps) {
  const { src, title } = props.imageProps
  return <Image src={src} alt={title ?? ''} fill className="object-cover" />
}
