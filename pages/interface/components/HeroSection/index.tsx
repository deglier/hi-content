import { useEffect, useState } from 'react'

import Home from '@/domain/home'
import Cta from '@/pages/interface/components/Cta'
import HighlightCircle from '@/pages/interface/components/graphics/HighlightCircle'
import XIcon from '@/pages/interface/components/graphics/XIcon'
import MakeHTML from '@/pages/interface/components/MakeHTML'
import useScreenWidth from '@/pages/interface/hooks/useScreenWidth'

type HeroSectionProps = {
  data: Pick<Home, 'hero'>
}

export default function Section({ data }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false)
  const { innerWidth } = useScreenWidth()
  const source = data.hero
  const [heroBg] = source.background
  const poster = heroBg.type === 'video' && !!heroBg.poster ? heroBg.poster : heroBg.url
  useEffect(() => {
    setShowVideo(innerWidth > 1024)
  }, [innerWidth])
  return (
    <section
      id="hero"
      className="z-0 h-screen max-h-[1080px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('${poster}')`,
      }}
    >
      {showVideo && heroBg.type === 'video' && heroBg.source === 'link' ? (
        <video
          className="banner-video absolute left-0 h-full max-h-[1080px] w-full object-cover"
          autoPlay
          muted
          loop
          src={heroBg.url}
          poster={poster}
        >
          <source src={heroBg.url} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute flex h-full max-h-[1080px] w-full items-end bg-secondary-base bg-opacity-[48%] bg-hero bg-repeat pb-10 lg:pb-40">
        {/* CONTENT HERE */}
        <div className="mx-auto flex w-full max-w-container flex-col items-start justify-between gap-3 px-6 text-neutral-high-base lg:flex-row lg:items-center lg:gap-0 xl:px-0">
          <div className="max-w-[585px] space-y-5" data-aos="fade-down">
            <Title />
            <Cta
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="800"
              ctaIcon={<Cta.Icon icon="smile" />}
              className="hidden lg:flex"
            >
              Descubra como funciona
            </Cta>
          </div>
          <Heading source={source.support} />
          <Cta
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
            ctaIcon={<Cta.Icon icon="smile" />}
            className="lg:hidden"
          >
            Como funciona
          </Cta>
        </div>
      </div>
    </section>
  )
}

function Title() {
  return (
    <h1 className="text-3xl font-medium sm:text-7xl">
      os{' '}
      <em className="relative mx-4 inline-block">
        <strong>conteúdos</strong>
        <HighlightCircle className="hero-draw h-12 sm:h-27" />
      </em>{' '}
      <br className="lg:hidden" />
      que você sempre
      <br className="lg:hidden" />{' '}
      <em>
        <strong>sonhou</strong>
      </em>
    </h1>
  )
}

function Heading({ source }: { source: string }) {
  return (
    <div
      className="flex max-w-[337px] flex-col items-end space-y-2 pb-8 lg:pb-0"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <MakeHTML as="p" inline source={source} className="text-base font-semibold leading-snug sm:text-xl" />
      <XIcon className="hidden lg:inline-block" />
    </div>
  )
}
