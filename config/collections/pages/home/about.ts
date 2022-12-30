import type { CmsField } from 'netlify-cms-core'

const aboutSection: CmsField = {
  label: 'Seção "Sobre"',
  name: 'about',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Heading',
      name: 'heading',
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
      label: 'Imagem de destaque',
      name: 'featuredImage',
      widget: 'image',
      required: true,
      media_folder: '/public/uploads/pages/home/about',
      public_folder: '/uploads/pages/home/about',
    },
    {
      label: 'marcas',
      name: 'brands',
      label_singular: 'marca',
      widget: 'list',
      summary: '{{fields.name}}',
      required: true,
      fields: [
        {
          label: 'nome da empresa',
          name: 'name',
          widget: 'string',
          required: true,
        },
        {
          label: 'Logo',
          name: 'logo',
          widget: 'image',
          media_folder: '/public/uploads/pages/home/about/brands',
          public_folder: '/uploads/pages/home/about/brands',
          required: true,
        },
      ],
    },
  ],
}

export default aboutSection
