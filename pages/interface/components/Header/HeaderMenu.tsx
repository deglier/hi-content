import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import { UrlObject } from 'url'

function Svg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="8" fill="none" viewBox="0 0 54 8" preserveAspectRatio="none">
      <defs>
        <clipPath id="form">
          <path d="M53.515 2.362c-.321-.067-.605-.235-.927-.302-1.32-.167-2.605-.436-3.926-.603-.643-.134-1.141-.347-1.75-.256-2.147.205-4.104-.749-6.288-.442-2.247-.47-4.679-.433-7.073-.497C27.868.056 22.039.254 16.244.678c-3.007.353-6.12.683-9.236 1.34-1.361.26-2.796.723-4.23 1.186-.933.35-1.688.846-2.34 1.69-.073.203-.253.383-.22.608-.006.652 1.165 1.55 1.918 1.38L3.75 6.24c.43-.237.755-.496 1.256-.61 1.756-.395 3.548-.893 5.374-1.165 3.722-.421 7.514-.718 11.27-.914 3.147-.106 6.4-.189 9.618-.17 3.18.12 6.398.138 9.576.584 2.428.289 4.966.274 7.392.89 1.391.29 2.93.176 4.324.14.823-.046 1.29-.384 1.547-1.093.294-.81.19-1.158-.593-1.54Z" />
        </clipPath>
      </defs>
      <path id="path" clipPath="url(#form)" d="M0 4h54" stroke="currentColor" strokeWidth={8} />
    </svg>
  )
}

type MainProps = {
  children: ReactNode
}
function Main({ children }: MainProps) {
  return <ul className="header-menu">{children}</ul>
}

type ItemProps = {
  title: string
  href: string | UrlObject
  onClick?: () => void
  scroll?: boolean | undefined
}

function Item({ title, href, ...props }: ItemProps) {
  return (
    <li className="header-menu__item group">
      <Link href={href} className="h-5.5 overflow-hidden px-1 text-center text-base leading-[22px]" {...props}>
        <span className="flex flex-col items-center transition-transform group-hover:-translate-y-[22px] group-hover:transform">
          <span>{title}</span>
          <span className="font-extrabold italic">{title}</span>
        </span>
      </Link>
      <Svg />
    </li>
  )
}

function Cta({ children }: { children: ReactElement }) {
  return <li className="absolute bottom-16 lg:relative lg:bottom-auto">{children}</li>
}

Main.displayName = 'HeaderMenu'
Item.displayName = 'HeaderMenu.Item'

const HeaderMenu = Object.assign(Main, {
  Item,
  Cta,
})

export default HeaderMenu
