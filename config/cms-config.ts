import type { CmsConfig } from 'netlify-cms-core'

import pages from './collections/pages'
import settings from './collections/settings'
import works from './collections/works'

const isLocalhost = typeof window !== 'undefined' && window.location.host === 'localhost:3000'

export const config: CmsConfig = {
  backend: isLocalhost
    ? {
        name: 'test-repo',
      }
    : {
        name: 'github',
        branch: 'main',
        repo: 'deglier/hi-content',
        base_url: 'https://hi-content.vercel.app/',
        auth_endpoint: 'api/auth/',
      },
  load_config_file: false,
  media_folder: 'public/assets/img',
  public_folder: 'assets/img',

  publish_mode: 'simple',

  locale: 'pt-BR',
  editor: {
    preview: false,
  },
  slug: {
    encoding: 'ascii',
    clean_accents: true,
  },

  collections: [
    pages,
    works,
    // catalog,
    settings,
    // {
    //   label: "Conteúdo do site",
    //   name: "site_content",
    //   // editor: {
    //   //   preview: false,
    //   // },
    //   files: [
    //     {
    //       label: "Home Page",
    //       name: "home",
    //       file: "infra/data/home.json",
    //       media_folder: "public/assets/img/home",
    //       public_folder: "assets/img/home",
    //       fields: [
    //         {
    //           label: "Primeira dobra (Hero)",
    //           name: "hero",
    //           widget: "object",
    //           collapsed: true,
    //           fields: [
    //             {
    //               label: "Texto principal",
    //               name: "heading",
    //               widget: "markdown",
    //               minimal: true,
    //               buttons: ["bold", "italic"],
    //               editor_components: [],
    //               required: true,
    //             },
    //             {
    //               label: "Texto de suporte",
    //               name: "support",
    //               widget: "markdown",
    //               minimal: true,
    //               buttons: ["bold", "italic"],
    //               editor_components: [],
    //               required: true,
    //             },
    //             {
    //               label: "Mídia do background",
    //               name: "background",
    //               widget: "markdown",
    //               minimal: true,
    //               buttons: ["bold", "italic"],
    //               editor_components: [],
    //               required: true,
    //             },
    //           ],
    //         },
    //         {
    //           label: "Seção Sobre",
    //           name: "about",
    //           widget: "object",
    //           fields: [
    //             {
    //               label: "Heading",
    //               name: "heading",
    //               widget: "markdown",
    //               minimal: true,
    //               buttons: ["bold", "italic"],
    //               editor_components: [],
    //               required: true,
    //             },
    //             {
    //               label: "Descrição",
    //               name: "description",
    //               widget: "markdown",
    //               minimal: true,
    //               buttons: ["bold", "italic"],
    //               editor_components: [],
    //               required: true,
    //             },
    //             {
    //               label: "Marcas parceiras",
    //               label_singular: "Marca parceira",
    //               name: "brands",
    //               widget: "list",
    //               summary: "{{brandName}}",
    //               fields: [
    //                 {
    //                   label: "CTA category",
    //                   name: "ctaCategory",
    //                   widget: "relation",
    //                   collection: "call-to-action",
    //                   search_fields: ["ctaCategory"],
    //                   value_field: "cta.*",
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: "Marcas",
    //   label_singular: "Marca",
    //   name: "brands",
    //   extension: "json",
    //   create: true,
    //   folder: "infra/data/brands",
    //   media_folder: "public/assets/img/brands",
    //   public_folder: "assets/img/brands",
    //   fields: [
    //     {
    //       label: "Logo",
    //       name: "image",
    //       widget: "image",
    //       required: true,
    //     },
    //     {
    //       label: "Marca",
    //       name: "brandName",
    //       widget: "string",
    //       required: true,
    //     },
    //     {
    //       label: "CTA category",
    //       name: "ctaCategory",
    //       widget: "relation",
    //       collection: "call-to-action",
    //       search_fields: ["ctaCategory"],
    //       value_field: "cta.*",
    //       display_fields: ["ctaCategory"],
    //     },
    //   ],
    // },
    // {
    //   label: "CTAs",
    //   label_singular: "CTA",
    //   name: "call-to-action",
    //   extension: "json",
    //   create: true,
    //   folder: "infra/data/call-to-action",
    //   media_folder: "public/assets/img/brands",
    //   public_folder: "assets/img/brands",
    //   path: "{{slug}}",
    //   fields: [
    //     {
    //       label: "CTA Category",
    //       name: "ctaCategory",
    //       widget: "string",
    //     },
    //     {
    //       label: "CTA Content",
    //       name: "cta",
    //       widget: "list",
    //       fields: [
    //         { label: "Title", name: "title", widget: "string" },
    //         { label: "Content", name: "content", widget: "string" },
    //         {
    //           label: "Cover",
    //           name: "cover",
    //           widget: "image",
    //           media_folder: "/assets/images/covers/",
    //         },
    //         {
    //           label: "Button",
    //           name: "button",
    //           widget: "object",
    //           fields: [
    //             { label: "URL", name: "url", widget: "string" },
    //             { label: "Title", name: "title", widget: "string" },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
}
