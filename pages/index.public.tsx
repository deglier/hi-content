import { GetStaticProps } from 'next'

import HomeData from '@/domain/home'
import Settings from '@/domain/settings'
import Work from '@/domain/work'
import content from '@/models/content'
import AboutSection from '@/pages/interface/components/AboutSection'
import BrandList from '@/pages/interface/components/BrandList'
import DefaultLayout from '@/pages/interface/components/DefaultLayout'
import HeroSection from '@/pages/interface/components/HeroSection'
import HowItWorksSection from '@/pages/interface/components/HowItWorksSection'
import PortfolioSection from '@/pages/interface/components/PortfolioSection'
import Ribbon from '@/pages/interface/components/Ribbon'
import SubscriptionSection from '@/pages/interface/components/SubscriptionSection'
import WhatWeOfferSection from '@/pages/interface/components/WhatWeOfferSection'

type HomeProps = {
  settings: Settings
  content: HomeData
  portfolio: Work[]
}

export default function Home({ settings, content, portfolio }: HomeProps) {
  const { about, hero, howItWorks, whatWeOffer, subscription } = content
  return (
    <DefaultLayout settings={settings}>
      <HeroSection data={{ hero }} />
      <AboutSection data={{ about }} />
      <BrandList data={about.brands} />
      <HowItWorksSection data={{ howItWorks }} />

      <Ribbon />

      <WhatWeOfferSection data={{ whatWeOffer }} />
      <SubscriptionSection data={subscription} />
      <PortfolioSection data={portfolio} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const settings = await content.getSettings()
  const home = content.getPageByName('home')
  const portfolio = content.getAllWorks().slice(0, 4)
  return {
    props: {
      content: {
        ...home,
      },
      portfolio,
      settings,
    },
  }
}
