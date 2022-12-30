import clsx from 'clsx'
import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'

import Cta from '@/pages/interface/components/Cta'
import { LogoHi } from '@/pages/interface/components/graphics'
import MenuIcon from '@/pages/interface/components/graphics/MenuIcon'
import XClose from '@/pages/interface/components/graphics/XClose'
import useScrollPosition from '@/pages/interface/hooks/useScrollPosition'

import HeaderMenu from './HeaderMenu'
import HeaderWrapper from './HeaderWrapper'

export default function Header() {
  const scrollPosition = useScrollPosition()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = () => setIsOpenMenu(false)
  return (
    <HeaderWrapper changeMenuHeight={scrollPosition > 150}>
      <HeaderWrapper.Content>
        <Link href="/">
          <LogoHi
            className={clsx('h-14', {
              'lg:h-20': scrollPosition < 150,
              'lg:h-15': scrollPosition > 150,
            })}
          />
        </Link>
        <OpenButton onClick={() => setIsOpenMenu(true)} />
        <nav
          className={clsx(
            'fixed inset-0 flex flex-col gap-10 bg-secondary-base transition-transform duration-300 ease-in-out lg:relative lg:bg-transparent lg:transition-none',
            {
              '-translate-y-full lg:translate-y-0': !isOpenMenu,
              'translate-y-0': isOpenMenu,
            },
          )}
        >
          <div className="flex w-full justify-end border-b border-b-secondary-dark p-6 lg:hidden">
            <CloseButton onClick={closeMenu} />
          </div>
          <HeaderMenu>
            <HeaderMenu.Item title="início" href="/" onClick={closeMenu} />
            <HeaderMenu.Item title="sobre" href="/#about" onClick={closeMenu} scroll={false} />
            <HeaderMenu.Item title="o que oferecemos" href="/#what-we-offer" onClick={closeMenu} scroll={false} />
            <HeaderMenu.Item title="portfólio" href="/portfolio" onClick={closeMenu} scroll={false} />
            <HeaderMenu.Item title="assinatura" href="/#subscription" onClick={closeMenu} scroll={false} />
            <HeaderMenu.Cta>
              <Cta ctaIcon={<Cta.Icon icon="dollarSign" />}>Simule um orçamento</Cta>
            </HeaderMenu.Cta>
          </HeaderMenu>
        </nav>
      </HeaderWrapper.Content>
    </HeaderWrapper>
  )
}

function OpenButton(props: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="flex items-center gap-3 font-semibold text-primary-base lg:hidden" {...props}>
      <span>Menu</span>
      <MenuIcon height={20} />
    </button>
  )
}
function CloseButton(props: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="flex items-center gap-3 font-semibold text-primary-base" {...props}>
      <span>Fechar</span>
      <XClose height={24} width={24} />
    </button>
  )
}
