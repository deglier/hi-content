import type { CmsCollection } from 'netlify-cms-core'

import { footer } from './footer'
import { homePage } from './home'

export const siteContent: CmsCollection = {
  label: 'Conteúdo do site',
  name: 'site_content',
  files: [homePage, footer],
}
