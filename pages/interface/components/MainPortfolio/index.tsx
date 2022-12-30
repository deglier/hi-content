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
    <>
      <DynamicGallery
        images={imagesMapped}
        enableImageSelection={false}
        margin={4}
        rowHeight={200}
        thumbnailImageComponent={GalleryImage}
      />
      <noscript>
        <ul className="flex w-full gap-4 overflow-x-auto whitespace-nowrap py-16 text-neutral-high-base before:inline-block before:p-1 after:inline-block after:p-1 lg:justify-center lg:pb-10 lg:pt-0">
          {images.map((item, idx) => (
            <li
              key={idx.toString()}
              className="group relative flex aspect-square flex-shrink-0 basis-56 cursor-pointer items-center justify-center overflow-hidden rounded-sm border-2 border-primary-base bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/_next/image?url=${encodeURI(item.src)}&w=20&q=50')` }}
            >
              <div className="absolute inset-0 bg-secondary-base bg-opacity-50" />
              <Image src={item.src} alt={item.src} fill className="object-contain" />
            </li>
          ))}
        </ul>
      </noscript>
    </>
  )
}

function GalleryImage(props: ThumbnailImageProps) {
  const { src, title } = props.imageProps
  return <Image src={src} alt={title ?? ''} fill className="object-cover" />
}
