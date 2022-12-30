import type { CmsCollectionFile } from 'netlify-cms-core'

import aboutSection from './about'
import heroSection from './hero'
import howItWorksSection from './how-it-works'
import subscriptionSection from './subscription'
import whatWeOfferSection from './what-we-offer'

const homePage: CmsCollectionFile = {
  label: 'Home',
  name: 'home',
  file: 'contents/pages/home.json',
  media_folder: '/public/uploads/pages/home',
  public_folder: '/uploads/pages/home',
  fields: [heroSection, aboutSection, howItWorksSection, whatWeOfferSection, subscriptionSection],
}

export default homePage
