import { useEffect } from 'react'

import { config } from '@/config/cms-config'

export default function Admin() {
  useEffect(() => {
    async function startCMS() {
      const CMS = (await import('netlify-cms-app')).default
      const FileRelationWidget = (await import('@ncwidgets/file-relation')).Widget
      const IdWidget = (await import('@ncwidgets/id')).Widget

      CMS.registerWidget(IdWidget.name, IdWidget.controlComponent)
      CMS.registerWidget(
        FileRelationWidget.name,
        FileRelationWidget.controlComponent,
        FileRelationWidget.previewComponent,
      )
      CMS.init({ config })

      console.log('CMS started! ', config)
    }
    startCMS()
  }, [])
}
