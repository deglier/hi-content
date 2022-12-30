import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const PAGE_DIRECTORY = join(process.cwd(), 'contents/pages')
const WORK_DIRECTORY = join(process.cwd(), 'contents/works')

async function getSettings() {
  const settings = await import('@/contents/site/settings.json')
  return {
    ...settings,
  }
}

function getPageByName(name: string) {
  if (!name) return null

  const realPage = name.replace(/\.json$/, '')
  const fullPath = join(PAGE_DIRECTORY, `${realPage}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}

function getAllPages() {
  return {}
}

function getWorkBySlug(slug: string) {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(WORK_DIRECTORY, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMM 'de' yyyy", { locale: ptBR })

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, content: data.content[0], date },
  }
}
function getAllWorks() {
  const slug = fs.readdirSync(WORK_DIRECTORY)
  const works = slug
    .map((slug) => getWorkBySlug(slug))
    .sort((item1, item2) => (new Date(item1?.date ?? '') > new Date(item2?.date ?? '') ? -1 : 1))
  return works
}

export default Object.freeze({
  getSettings,
  getPageByName,
  getAllPages,
  getWorkBySlug,
  getAllWorks,
})
