export interface HeroSource {
  heading: string
  support: string
  background: {
    type: 'video' | 'image'
    url: string
    source?: 'link'
    poster?: string
  }[]
}

export interface Brand {
  logo: string
  name: string
}

export interface AboutSource {
  brands: Brand[]
  heading: string
  description: string
  featuredImage: string
}

export interface Step {
  description: string
}

export interface HowItWorksSource {
  title: string
  steps: Step[]
}

export interface Service {
  description: string
  type: string
  title: string
}

export interface WhatWeOfferSource {
  services: Service[]
  title: string
}

export interface SubscriptionSource {
  title: string
  description: string
  callTitle: string
  callSupportText: string
  featuredImage: string
}

export default interface Home {
  hero: HeroSource
  about: AboutSource
  howItWorks: HowItWorksSource
  whatWeOffer: WhatWeOfferSource
  subscription: SubscriptionSource
}
