import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

type Video = {
  type: 'video'
  thumbnail: string
  source: string
}

export type ImageObject = {
  src: string
  ratioX: number
  ratioY: number
}

type Gallery = {
  type: 'gallery'
  thumbnail: string
  images: ImageObject[]
}

export type WorkContent = Gallery | Video

export type Work = {
  slug: string
  date: string
  frontmatter: {
    date: string
    title: string
    category: string
    content: WorkContent
  }
}

const workDirectory = join(process.cwd(), 'infra/data/portfolio')

function getBySlug(slug: string): Work | null {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(workDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMM 'de' yyyy", { locale: ptBR })

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, content: data.content[0], date },
  } as Work
}

export function getAll(): Work[] | null {
  const slug = fs.readdirSync(workDirectory)
  const works = slug
    .map((slug) => getBySlug(slug))
    .sort((item1, item2) => (new Date(item1?.date ?? '') > new Date(item2?.date ?? '') ? -1 : 1))
  return works as Work[]
}

export default Object.freeze({
  getAll,
  getBySlug,
})
