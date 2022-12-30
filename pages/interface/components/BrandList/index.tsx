import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { Brand } from '@/domain/home'

/* eslint-disable @next/next/no-img-element */
type BrandListProps = {
  data: Brand[]
}
function RenderList({ data: source, hidden = false }: BrandListProps & { hidden?: boolean }) {
  return (
    <>
      {source.map((brand) => (
        <div
          key={brand.logo}
          className={clsx(
            'item relative flex w-48 min-w-max items-center justify-center opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-80 xl:w-auto',
            {
              'xl:hidden': hidden,
            },
          )}
        >
          <Image src={brand.logo} width={112} height={112} className="max-h-28 w-28 object-contain" alt={brand.name} />
        </div>
      ))}
    </>
    // </div>
  )
}

export default function BrandList({ data }: BrandListProps) {
  const container = useRef<HTMLDivElement>(null)
  const getWidth = () => container.current?.clientWidth
  const getHalfOfNodes = () => Math.round(Number(container.current?.childNodes.length) / 2) ?? 1

  useEffect(() => {
    container.current?.style.setProperty('--brandsWidth', `${getWidth()}px`)
    container.current?.style.setProperty('--brandsCount', `${getHalfOfNodes()}`)
  }, [])

  return (
    <section id="brands" className="bg-primary-base">
      <div className="overflow-hidden xl:mx-auto xl:max-w-container">
        <div
          ref={container}
          className="flex w-[var(--brandsWidth)] min-w-min animate-movingBrands flex-row xl:w-full xl:animate-none xl:items-center xl:justify-between"
        >
          <RenderList data={data} />
          <RenderList data={data} hidden />
        </div>
      </div>
    </section>
  )
}
