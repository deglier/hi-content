import { CmsCollection } from 'netlify-cms-core'

export const portfolio: CmsCollection = {
  label: 'Portfólio',
  name: 'portfolio',
  folder: 'infra/data/portfolio',
  create: true,
  slug: '{{slug}}',
  media_folder: '/public/assets/site-content/portfolio',
  public_folder: '/assets/site-content/portfolio',
  fields: [
    {
      label: 'Data',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DD hh:mm:ss',
    },
    {
      label: 'Título',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Categoria',
      name: 'category',
      widget: 'select',
      options: ['Shootings', 'Look book', 'Filme'],
    },
    {
      label: 'Conteúdo',
      name: 'content',
      widget: 'list',
      min: 1,
      max: 1,
      required: true,
      types: [
        {
          label: 'Galeria de imagens',
          name: 'gallery',
          widget: 'object',
          fields: [
            {
              label: 'Imagem de destaque',
              name: 'thumbnail',
              widget: 'image',
              required: true,
            },
            {
              label: 'Imagens',
              label_singular: 'imagem',
              name: 'images',
              widget: 'list',
              required: true,
              fields: [
                {
                  label: 'Imagem',
                  name: 'src',
                  widget: 'image',
                  required: true,
                },
                {
                  label: 'Altura',
                  name: 'ratioY',
                  widget: 'number',
                  min: 1,
                  required: true,
                },
                {
                  label: 'Largura',
                  name: 'ratioX',
                  widget: 'number',
                  min: 1,
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Vídeo',
          name: 'video',
          widget: 'object',
          fields: [
            {
              label: 'Imagem de destaque',
              name: 'thumbnail',
              widget: 'image',
              required: true,
            },
            {
              label: 'Vídeo (link)',
              name: 'source',
              widget: 'string',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
