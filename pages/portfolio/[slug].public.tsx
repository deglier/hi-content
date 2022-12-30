import { GetStaticPaths, GetStaticProps } from 'next'

import Settings from '@/domain/settings'
import Work from '@/domain/work'
import webserver from '@/infra/webserver'
import content from '@/models/content'
import DefaultLayout from '@/pages/interface/components/DefaultLayout'
import { Metadata } from '@/pages/interface/components/Head'
import MainPortfolio from '@/pages/interface/components/MainPortfolio'

type PortfolioDetailProps = {
  work: Work
  contentMetadata: Metadata
  settings: Settings
}

export default function PortfolioDetail({ work, contentMetadata, settings }: PortfolioDetailProps) {
  return (
    <DefaultLayout settings={settings} metadata={{ ...contentMetadata }}>
      <div className="bg-hero-overlay pt-32">
        <MainPortfolio source={work} />
      </div>
    </DefaultLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const works = content.getAllWorks() as Work[]
  const paths = works?.map(({ slug }) => ({ params: { slug } }))
  return {
    paths: paths ?? [{ params: { slug: 'teste' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const settings = await content.getSettings()
  const slug = params?.slug as string
  const work = content.getWorkBySlug(slug) as Work

  const webserverHost = webserver.getHost()

  const contentMetadata: Metadata = {
    title: `Projeto ${work?.frontmatter.title ?? 'Hi!'} · Hi! I'm content!`,
    image: `${webserverHost}/api/og?title=${work.frontmatter.title}&thumbnail=${work.frontmatter.content.thumbnail}`,
    url: `${webserverHost}/portfolio/${work?.slug}`,
    publishedTime: work?.frontmatter.date,
    type: work?.frontmatter.content.type === 'video' ? 'video' : 'photo',
  }

  return {
    props: {
      work,
      contentMetadata,
      settings,
    },
  }
}
