import type { CmsCollectionFile } from 'netlify-cms-core'

import { aboutSection } from './home/sections/about'
import { heroSection } from './home/sections/hero'
import { howItWorksSection } from './home/sections/how-it-works'
import { subscriptionSection } from './home/sections/subscription'
import { whatWeOfferSection } from './home/sections/what-we-offer'

export const homePage: CmsCollectionFile = {
  label: 'Home Page',
  name: 'home',
  file: 'infra/data/site-content/home.json',
  media_folder: '/public/assets/img/site-content/home',
  public_folder: '/assets/img/site-content/home',
  fields: [heroSection, aboutSection, howItWorksSection, whatWeOfferSection, subscriptionSection],
}
