import type { CmsField } from 'netlify-cms-core'

export const heroSection: CmsField = {
  label: 'Primeira dobra (Hero)',
  name: 'hero',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Texto principal',
      name: 'heading',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Texto de suporte',
      name: 'support',
      widget: 'markdown',
      minimal: true,
      buttons: ['bold', 'italic'],
      editor_components: [],
      required: true,
    },
    {
      label: 'Background',
      name: 'background',
      widget: 'list',
      required: true,
      max: 1,
      min: 1,
      types: [
        {
          label: 'Imagem / GIF',
          name: 'image',
          widget: 'object',
          summary: '{{fields.url}}',
          fields: [
            {
              label: 'Imagem',
              name: 'url',
              widget: 'image',
            },
          ],
          required: true,
        },
        {
          label: 'Vídeo',
          name: 'video',
          widget: 'object',
          fields: [
            {
              label: 'Origem',
              name: 'source',
              widget: 'select',
              options: [{ label: 'Link direto', value: 'link' }],
              required: true,
            },
            {
              label: 'Link',
              name: 'url',
              widget: 'string',
              required: true,
            },
            {
              label: 'Poster (imagem será exibida quando o site for aberto em celulares)',
              name: 'poster',
              widget: 'image',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
