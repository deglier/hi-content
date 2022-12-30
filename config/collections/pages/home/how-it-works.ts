import { CmsField } from 'netlify-cms-core'

const howItWorksSection: CmsField = {
  label: 'Seção "Como funciona"',
  name: 'howItWorks',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Título da seção',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'etapas',
      label_singular: 'etapa',
      name: 'steps',
      widget: 'list',
      summary: '{{fields.description}}',
      min: 2,
      max: 4,
      collapsed: true,
      fields: [
        {
          label: 'Descrição da etapa',
          name: 'description',
          widget: 'markdown',
          minimal: true,
          buttons: ['bold', 'italic'],
          editor_components: [],
          required: true,
        },
      ],
    },
  ],
}

export default howItWorksSection
