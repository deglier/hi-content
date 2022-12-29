import type { CmsCollection } from 'netlify-cms-core'

export const catalog: CmsCollection = {
  label: 'Catálogo',
  name: 'catalog',
  files: [],
}

const test1 = {
  id: 'videoStories',
  nome: 'Vídeo Stories',
  vitrine: true,
  tipoCobranca: 'sessaoQtd',
  valorUnitario: 30,
  configuracaoItem: {
    inverseSpotlight: false,
    limitedBy: 'sessaoQtd',
    label: ['Vídeo de 15" do look para Story', 'Quantidade por sessão'],
    component: 'select',
    icon: 'Instagram',
    step: 1,
  },
}

const test2 = {
  id: 'estudio',
  nome: 'Estúdio profissional',
  tipoItem: 'plano',
  tipoCobranca: 'sessao',
  descricao: '',
  imagem: '',
  valores: {
    diaria: {
      meia: 360,
      inteira: 720,
    },
    looks: {
      qtd: {
        '5': 10,
        '10': 20,
        '15': 15,
        '20': 20,
      },
      extra: {
        multiplo: 5,
        valor: 71,
      },
    },
  },
}
