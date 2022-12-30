interface Video {
  type: 'video'
  thumbnail: string
  source: string
}

export interface ImageGallery {
  src: string
  ratioX: number
  ratioY: number
}

interface Gallery {
  type: 'gallery'
  thumbnail: string
  images: ImageGallery[]
}

export type WorkContent = Gallery | Video

export default interface Work {
  slug: string
  date: string
  frontmatter: {
    date: string
    title: string
    category: string
    content: WorkContent
  }
}
