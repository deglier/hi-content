import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import Work from '@/domain/work'

export default function PortfolioList({ source }: { source: Work[] }) {
  return (
    <div className="mx-auto max-w-container px-6 xl:px-0">
      <span>tabs</span>
      {/* {JSON.stringify(source, null, 2)} */}
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {source.map((item) => (
          <PortfolioListItem key={item.slug} item={item} />
        ))}
      </ul>
    </div>
  )
}

function PortfolioListItem({ item }: { item: Work }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseOver = () => {
    if (videoRef !== null) {
      videoRef.current?.play()
    }
  }
  const handleMouseOut = () => {
    if (videoRef !== null) {
      videoRef.current?.pause()
    }
  }

  return (
    <li
      className="group relative aspect-[39/25] overflow-hidden rounded bg-secondary-base sm:aspect-[191/144] "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* {JSON.stringify(item.frontmatter.content[0].thumbnail, null, 2)} */}
      <Image
        src={item.frontmatter.content.thumbnail}
        alt={`${item.frontmatter.title}`}
        fill
        className={clsx('scale-105 object-cover transition-transform ease-in-out', {
          'duration-500': item.frontmatter.content.type === 'video',
          'duration-1000 group-hover:scale-125': item.frontmatter.content.type !== 'video',
        })}
      />
      {item.frontmatter.content.type === 'video' && (
        <video
          ref={videoRef}
          loop
          preload="none"
          muted
          className="absolute top-0 min-h-full min-w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        >
          <source src={item.frontmatter.content.source} type="video/mp4" />
        </video>
      )}
      <Link
        href={`/portfolio/${item.slug}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary-base bg-opacity-40 text-neutral-high-base"
      >
        <h3 className="text-2xl font-extrabold italic leading-tight">{item.frontmatter.title}</h3>
        <p className="text-sm font-semibold italic leading-none">Captação • Pós produção • Comercial</p>
      </Link>
    </li>
  )
}
