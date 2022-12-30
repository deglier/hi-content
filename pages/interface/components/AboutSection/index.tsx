import Image from 'next/image'

import ArrowImg from '@/assets/arrow.svg'
import HiSmileImg from '@/assets/hi-smile.png'
import Home from '@/domain/home'
import Cta from '@/pages/interface/components/Cta'
import MakeHTML from '@/pages/interface/components/MakeHTML'

type AboutSectionProps = {
  data: Pick<Home, 'about'>
}

export default function AboutSection({ data }: AboutSectionProps) {
  const source = data.about
  return (
    <div id="about" className="bg-primary-base">
      <section className="mx-auto max-w-container px-6 pt-10 pb-14 lg:flex lg:pb-20 lg:pt-24 xl:px-0">
        <header className="lg:w-3/12">
          <MakeHTML
            inline
            as="h2"
            source={source.heading}
            className="w-full text-2xl font-semibold leading-snug text-secondary-base sm:text-[2rem] lg:pr-6"
          />
        </header>
        <div className="relative pt-11 lg:w-5/12 lg:pt-0 lg:pl-23">
          <div className="relative w-full pt-[77%] lg:pt-[130%]">
            <Image
              src={source.featuredImage}
              fill
              className="top-4 rounded-sm object-cover lg:max-h-[460px]"
              alt="imagem de destaque"
            />
          </div>
          <Image
            src={HiSmileImg}
            alt="palavra 'hi! com o traço em baixo formando um rosto sorrindo'"
            className="absolute top-0 right-5 h-22 w-auto lg:right-auto lg:left-0 lg:h-24"
          />
        </div>
        <div className="space-y-8 pt-8 lg:w-4/12 lg:pt-0 lg:pl-6">
          <MakeHTML
            as="div"
            source={source.description}
            className="prose prose-p:font-medium prose-p:leading-snug prose-p:text-secondary-dark prose-strong:font-bold lg:pl-8"
          />
          <Cta className="mx-auto lg:hidden" ctaIcon={<Cta.Icon icon="dollarSign" />} dark>
            Simule um orçamento
          </Cta>
          <Image
            src={ArrowImg}
            alt="seta em semi círculo apontando para a imagem"
            height={66}
            className="hidden lg:inline-block"
          />
        </div>
      </section>
    </div>
  )
}
