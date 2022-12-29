import { CmsField } from 'netlify-cms-core'

export const whatWeOfferSection: CmsField = {
  label: 'Seção "O que oferecemos"',
  name: 'whatWeOffer',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Título da seção',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Serviços',
      label_singular: 'serviço',
      name: 'services',
      widget: 'list',
      summary: '({{fields.type}}): {{fields.title}}',
      min: 2,
      collapsed: true,
      fields: [
        {
          label: 'Serviço',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Tipo do serviço',
          name: 'type',
          widget: 'select',
          options: [
            { label: 'Serviço essencial', value: 'essencial' },
            { label: 'Serviço opcional', value: 'opcional' },
          ],
          required: true,
        },
        {
          label: 'Descrição do serviço',
          name: 'description',
          widget: 'text',
          required: true,
        },
      ],
    },
  ],
}
