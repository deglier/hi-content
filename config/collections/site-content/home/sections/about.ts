import type { CmsField, CmsFieldBase } from 'netlify-cms-core'

type CmsFieldFileRelation = CmsFieldBase & {
  target_field: string
  id_field: string
  display_fields: string
  multiple: boolean
}

export const aboutSection: CmsField = {
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
    // add relation field here
    {
      label: 'Marcas parceiras',
      name: 'brands',
      widget: 'ncw-file-relation',
      collection: 'settings',
      file: 'partner-brands',
      target_field: 'brands',
      id_field: 'id',
      display_fields: 'name',
      multiple: true,
    } as CmsFieldFileRelation,
    {
      label: 'Imagem de destaque',
      name: 'featuredImage',
      widget: 'image',
    },
  ],
}
