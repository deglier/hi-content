import { GetStaticProps } from 'next'

import Settings from '@/domain/settings'
import Work from '@/domain/work'
import content from '@/models/content'
import DefaultLayout from '@/pages/interface/components/DefaultLayout'
import PortfolioList from '@/pages/interface/components/PortfolioList'

type PortfolioPageProps = {
  works: Work[]
  settings: Settings
}

export default function PortfolioPage({ works, settings }: PortfolioPageProps) {
  return (
    <DefaultLayout settings={settings} metadata={{ title: 'Portfólio' }}>
      <div className="bg-hero-overlay pt-32 pb-8">
        <PortfolioList source={works} />
      </div>
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const settings = await content.getSettings()
  const works = content.getAllWorks()

  return {
    props: {
      works,
      settings,
    },
  }
}
