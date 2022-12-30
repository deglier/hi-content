import Home from '@/domain/home'
import Cta from '@/pages/interface/components/Cta'
import Topics from '@/pages/interface/components/graphics/Topics'
import XDivider from '@/pages/interface/components/graphics/XDivider'

type HowItWorksSectionProps = {
  data: Pick<Home, 'howItWorks'>
}

export default function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const source = data.howItWorks
  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center bg-primary-base px-6 pt-14 pb-16 lg:pb-24 lg:pt-20 xl:px-0"
    >
      <header className="flex flex-col items-center space-y-8 text-secondary-base">
        <XDivider data-aos="fade" />
        <h2 className="text-2xl font-extrabold italic leading-snug">{source.title}</h2>
      </header>
      <div className="mx-auto max-w-container pt-10 pb-10 lg:pb-16 lg:pt-12 xl:px-25">
        <ul className="flex flex-col flex-wrap gap-8 sm:flex-row sm:justify-center xl:flex-nowrap xl:gap-10 ">
          {source.steps.map((item, idx) => (
            <li
              key={String(idx)}
              className="flex flex-col items-center space-y-6 lg:w-1/4"
              // data-aos="fade-up"
              // data-aos-delay={(idx + 1) * 100}
              // data-aos-anchor-placement="bottom-bottom"
            >
              <Topics number={idx + 1} className="text-secondary-base" />
              <p className="text-center text-base font-medium leading-snug">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Cta
        ctaIcon={<Cta.Icon icon="dollarSign" />}
        // data-aos="zoom-in-up"
        // data-aos-anchor-placement="bottom-bottom"
        // data-aos-delay={source.steps.length * 100 + 100}
        dark
      >
        Simule um orçamento
      </Cta>
    </section>
  )
}
