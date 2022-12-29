import type { CmsCollectionFile, CmsField, CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type ListType = CmsFieldBase & CmsFieldObject

type UniqueIdField = CmsField & {
  prefix: string
}

const id = {
  label: 'ID',
  name: 'id',
  widget: 'ncw-id',
  prefix: 'Zm9vdGVy',
} as UniqueIdField

const types: ListType[] = [
  {
    label: 'texto',
    name: 'text',
    widget: 'object',
    fields: [id, { label: 'Conteúdo', name: 'displayText' }],
  },
  {
    label: 'telefone',
    name: 'tel',
    widget: 'object',
    fields: [id, { label: 'Conteúdo', name: 'displayText' }],
  },
  {
    label: 'e-mail',
    name: 'email',
    widget: 'object',
    fields: [id, { label: 'Conteúdo', name: 'displayText' }],
  },
  {
    label: 'link',
    name: 'link',
    widget: 'object',
    fields: [
      id,
      { label: 'link', name: 'link', widget: 'string' },
      { label: 'Conteúdo', name: 'displayText', widget: 'string' },
    ],
  },
]

const title: CmsField = {
  label: 'Título',
  name: 'displayText',
  widget: 'string',
}

export const footer: CmsCollectionFile = {
  label: 'Rodapé',
  name: 'footer',
  file: 'infra/data/site-content/footer.json',
  media_folder: '/public/assets/img/site-content/home',
  public_folder: '/assets/img/site-content/home',
  fields: [
    {
      label: 'Informações de pagamento',
      name: 'paymentInfo',
      widget: 'object',
      fields: [
        title,
        {
          label: 'Linhas',
          label_singular: 'linha',
          name: 'items',
          widget: 'list',
          types,
        },
      ],
    },
    {
      label: 'Informações de contato',
      name: 'contactInfo',
      widget: 'object',
      fields: [
        title,
        {
          label: 'Linhas',
          label_singular: 'linha',
          name: 'items',
          widget: 'list',
          types,
        },
      ],
    },
    {
      label: 'Informações de Redes Sociais',
      name: 'socialInfo',
      widget: 'object',
      fields: [
        title,
        {
          label: 'Linhas',
          label_singular: 'linha',
          name: 'items',
          widget: 'list',
          types,
        },
      ],
    },
    {
      label: 'Texto de rodapé',
      name: 'footerText',
      widget: 'string',
    },
  ],
}
