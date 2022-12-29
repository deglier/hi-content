import type { CmsCollection, CmsField } from 'netlify-cms-core'

type uniqueIdField = CmsField & {
  prefix: string
}

export const settings: CmsCollection = {
  label: 'Configurações',
  name: 'settings',
  files: [
    {
      label: 'Lista de marcas parceiras',
      description: 'lista de marcas que são exibidas na home do site',
      name: 'partner-brands',
      file: 'infra/data/settings/brands.json',
      fields: [
        {
          label: 'marcas',
          name: 'brands',
          label_singular: 'marca',
          widget: 'list',
          hint: 'lista de marcas que são exibidas na home do site',
          summary: '{{fields.name}}',
          fields: [
            {
              label: 'ID',
              name: 'id',
              widget: 'ncw-id',
              prefix: 'brands',
            } as uniqueIdField,
            {
              label: 'nome da empresa',
              name: 'name',
              widget: 'string',
            },
            {
              label: 'Logo',
              name: 'logo',
              widget: 'image',
              media_folder: '/public/assets/img/brands',
              public_folder: '/assets/img/brands',
            },
          ],
        },
      ],
    },
  ],
}
