import Image from 'next/image'

import { SubscriptionSource } from '@/domain/home'
import Cta from '@/pages/interface/components/Cta'
import ArrowDown from '@/pages/interface/components/graphics/ArrowDown'
import BigStarIcon from '@/pages/interface/components/graphics/BigStarIcon'
import MakeHTML from '@/pages/interface/components/MakeHTML'

type SubscriptionSectionProps = {
  data: SubscriptionSource
}

export default function subscriptionSection({ data }: SubscriptionSectionProps) {
  const source = data
  return (
    <section id="subscription" className="bg-primary-light">
      <div>
        <div className="lg:grid lg:grid-cols-2">
          <div className="relative aspect-square 2xl:aspect-auto 2xl:min-h-[43.625rem]">
            <Image src={source.featuredImage} fill alt="" className="object-cover" />
          </div>
          <div className="relative lg:grid lg:grid-rows-2">
            <header className="space-y-6 bg-primary-base px-6 py-10 text-secondary-base lg:flex lg:flex-col lg:justify-center lg:pl-16">
              <h3 className="text-2xl font-extrabold italic leading-none lg:text-[2rem]">Assine já!</h3>
              <MakeHTML
                as="div"
                source={source.title}
                className="text-xl leading-tight prose-p:font-semibold prose-strong:font-extrabold lg:max-w-[26.25rem] lg:text-[2rem]"
              />
            </header>
            <div className="space-y-8 p-6 lg:flex lg:flex-col lg:justify-center lg:space-y-0 lg:pl-16">
              <MakeHTML
                as="div"
                source={source.description}
                className="text-base font-medium leading-normal text-secondary-light lg:max-w-[30.5rem] lg:text-xl"
              />
              <ArrowDown className="h-16 lg:absolute lg:-bottom-12 lg:-left-44 lg:h-28" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 px-6 pt-8 pb-16 lg:flex-row lg:justify-center lg:gap-20 lg:pt-24 lg:pb-23">
          <div className="flex items-start gap-2">
            <BigStarIcon className="h-8 w-8 text-primary-base" />
            <CtaCaller />
          </div>
          <Cta ctaIcon={<Cta.Icon icon="dollarSign" />} dark>
            Simule um orçamento
          </Cta>
        </div>
        <div className="cta"></div>
      </div>
    </section>
  )
}

function CtaCaller() {
  return (
    <div className="space-y-7 lg:space-y-9">
      <h3 className="text-2xl font-bold leading-tight lg:text-[2rem]">
        Precisando apenas
        <br />
        de um{' '}
        <strong className="flex-flex-col relative font-extrabold italic">
          <span>shooting avulso?</span>
          <svg
            viewBox="0 0 195 12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full"
          >
            <path
              d="M2 9.22095C31.6898 5.05483 111.455 -1.61379 193 5.04062"
              stroke="#F0D07E"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </strong>
      </h3>
      <p className="text-xl font-medium leading-tight lg:flex lg:items-center lg:before:mr-4 lg:before:inline-block lg:before:h-px lg:before:w-27 lg:before:bg-secondary-base">
        Você também pode contar com a gente ;)
      </p>
    </div>
  )
}
