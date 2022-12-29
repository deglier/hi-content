import { CmsField } from 'netlify-cms-core'

export const subscriptionSection: CmsField = {
  label: 'Seção "Assinatura"',
  name: 'subscription',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Título da seção',
      name: 'title',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Descrição',
      name: 'description',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Título da chamada',
      name: 'callTitle',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Testo de suporte da chamada',
      name: 'callSupportText',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Imagem de destaque',
      name: 'featuredImage',
      widget: 'image',
    },
  ],
}
