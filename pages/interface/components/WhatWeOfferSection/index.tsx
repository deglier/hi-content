import { Disclosure, Tab, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

import Home, { Service } from '@/domain/home'
import Cta from '@/pages/interface/components/Cta'
import ChevronDown from '@/pages/interface/components/graphics/ChevronDown'
import StarIcon from '@/pages/interface/components/graphics/StarIcon'
import MakeHTML from '@/pages/interface/components/MakeHTML'

type WhatWeOfferSectionProps = {
  data: Pick<Home, 'whatWeOffer'>
}

export default function WhatWeOfferSection({ data }: WhatWeOfferSectionProps) {
  const source = data.whatWeOffer
  return (
    <section id="what-we-offer">
      <div className="space-y-10 px-6 pt-10 pb-16 lg:pb-24 lg:pt-20 xl:px-0">
        <h3 className="text-center text-2xl font-extrabold italic leading-snug text-neutral-high-base">
          O que oferecemos
        </h3>
        <div className="mx-auto max-w-3xl">
          <Tabs services={source.services} />
        </div>
        <div className="pt-6">
          <Cta ctaIcon={<Cta.Icon icon="dollarSign" />} className="mx-auto">
            Simule um orçamento
          </Cta>
        </div>
      </div>
    </section>
  )
}

function Tabs({ services }: { services: Service[] }) {
  const [selected, setSelected] = useState(0)
  return (
    <Tab.Group onChange={setSelected}>
      <Tab.List className="flex w-full flex-col items-center">
        <div className="relative flex">
          <Tab
            className={clsx('w-1/2 px-6 py-4 text-xl font-bold leading-none outline-none', {
              'text-secondary-light': selected !== 0,
              'italic text-primary-base': selected === 0,
            })}
          >
            Essenciais
          </Tab>
          <Tab
            className={clsx('w-1/2 px-6 py-4 text-xl font-bold leading-none outline-none', {
              'text-secondary-light': selected !== 1,
              'italic text-primary-base': selected === 1,
            })}
          >
            Opcionais
          </Tab>
          <span
            className={clsx(
              'absolute -bottom-1 block h-1 w-1/2 rounded-full bg-primary-base',
              'transition-all duration-300 ease-in-out',
              {
                'left-0': selected === 0,
                'left-1/2': selected === 1,
              },
            )}
          />
        </div>
        <span className="mb-10 block h-1 w-full rounded-full bg-secondary-dark" />
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2">
          <List items={services.filter((item) => item.type === 'essencial')} />
        </Tab.Panel>
        <Tab.Panel className="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2">
          <List items={services.filter((item) => item.type === 'opcional')} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

function List({ items }: { items: Service[] }) {
  return (
    <>
      {items.map((item, idx) => (
        <Disclosure key={idx.toString()} as="div">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  'flex flex-nowrap items-center gap-3 whitespace-nowrap text-lg font-extrabold leading-none prose-em:text-primary-base',
                  {
                    'text-neutral-high-dark': !open,
                    'italic text-primary-base': open,
                  },
                )}
              >
                <StarIcon height={18} className="text-primary-base" />
                <MakeHTML inline as="span" source={item.title} />
                <ChevronDown height={14} className={clsx('', { ' rotate-180': open })} />
              </Disclosure.Button>
              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="pt-4 text-base font-medium leading-normal text-secondary-light">
                  <MakeHTML inline as="span" source={item.description} />
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </>
  )
}
