import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import Work from '@/domain/work'
import Cta from '@/pages/interface/components/Cta'

export default function PortfolioSection({ data }: { data: Work[] }) {
  const latestWork = data.slice(0, 1)[0]
  const otherWorks = data.slice(1)
  return (
    <section
      id="portfolio"
      className="relative z-[1] overflow-hidden"
      // style={{ backgroundImage: `url('/assets/site-content/portfolio/boah-7156.jpg')` }}
    >
      <Image
        src={latestWork.frontmatter.content.thumbnail}
        alt={latestWork.frontmatter.title}
        sizes="1920vw"
        fill
        className="absolute inset-0 -z-[1] h-full w-full object-cover"
      />

      <div>
        <div className="z-50 bg-secondary-base bg-opacity-64">
          <div className="px-6 text-center italic text-neutral-high-base">
            <h2 className="py-16 text-2xl font-semibold leading-none lg:pt-28 lg:pb-20">Portfólio</h2>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-[4rem] font-extrabold leading-tight">{latestWork.frontmatter.title}</h3>
              <p className="font-semibold leading-none">Captação • Pós produção • Comercial</p>
              <Link
                href={`/portfolio/${latestWork.slug}`}
                className="mt-11 space-y-1 text-xl font-bold leading-[1.1] text-primary-base lg:mt-14 lg:mb-28"
              >
                <span>Saiba mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={112} height={5} fill="none">
                  <path
                    fill="#F0D07E"
                    d="M109.767.748c-2.121-.075-4.354 0-6.476 0-3.572 0-7.145.076-10.83.076-5.358 0-10.83-.076-16.3-.076-2.68 0-5.248-.15-7.927-.15C62.54.523 56.957.523 51.264.448c-5.471-.076-10.83.075-16.301.075-2.903 0-5.918.15-8.932.225-1.117.076-2.233.076-3.35.076-3.907.075-7.815.15-11.611.376-2.121.075-4.131.075-6.14.15-.782 0-1.452.151-2.234.227h.112a51.93 51.93 0 0 0-1.563.225c-.893.226-1.34.678-1.228 1.28 0 .602.558 1.13 1.451 1.205.782.075 1.675.225 2.457.075 3.237-.377 6.475-.226 9.825-.452 3.014-.15 6.14-.075 9.155-.15 3.014-.076 5.917-.226 8.932-.377 2.456 0 4.912 0 7.368-.075 4.801 0 9.602-.075 14.515 0 3.46 0 6.922.075 10.383.075 4.8.075 9.49.075 14.18.15 7.145.151 14.179.076 21.212-.074h10.83c1.005 0 1.675-.452 1.675-1.13 0-1.054-.67-1.58-2.233-1.58Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <LatestPortfolioList list={otherWorks} />
        </div>
      </div>
    </section>
  )
}

function LatestPortfolioList({ list }: { list: Work[] }) {
  return (
    <ul className="flex w-full gap-4 overflow-x-auto whitespace-nowrap py-16 text-neutral-high-base before:inline-block before:p-1 after:inline-block after:p-1 lg:justify-center lg:pb-10 lg:pt-0">
      {list.map((item) => (
        <LatestPortfolioListItem key={item.slug} item={item} />
      ))}
      <LatestPortfolioListItemCta />
    </ul>
  )
}

function LatestPortfolioListItem({ item }: { item: Work }) {
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
      className="group relative flex aspect-[56/39] flex-shrink-0 basis-56 cursor-pointer items-center justify-center overflow-hidden rounded-sm"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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
      {/* <Image src={`/assets/site-content/portfolio/boah-7156.jpg`} alt="" className="object-cover" fill /> */}
      <Link
        href={`/portfolio/${item.slug}`}
        className="absolute inset-0 border-2 border-transparent bg-secondary-base bg-opacity-40 bg-clip-border transition-colors duration-300 ease-in-out group-hover:border-primary-base"
      >
        <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-2xl font-extrabold italic leading-tight">
          {item.frontmatter.title}
        </p>
      </Link>
    </li>
  )
}

function LatestPortfolioListItemCta() {
  const router = useRouter()
  return (
    <li className="group relative flex aspect-[56/39] flex-shrink-0 basis-56 items-center justify-end overflow-hidden rounded-sm">
      <Cta ctaIcon={<Cta.Icon icon="smile" />} onClick={() => router.push('/portfolio')}>
        Ver todos
      </Cta>
    </li>
  )
}
