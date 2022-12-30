import type { CmsCollection } from 'netlify-cms-core'

import homePage from './home'

const pages: CmsCollection = {
  label: 'Páginas',
  name: 'pages',
  files: [homePage],
}

export default pages
