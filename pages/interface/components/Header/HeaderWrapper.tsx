import clsx from 'clsx'
import { cloneElement, ReactElement, ReactNode } from 'react'

type MainProps = {
  changeMenuHeight: boolean
  children: ReactElement
}

function Main({ changeMenuHeight, children }: MainProps) {
  return (
    <div
      className={clsx('fixed z-20 w-full transition-all duration-200 ease-in-out', {
        'bg-neutral-high-base bg-opacity-0': !changeMenuHeight,
        'bg-secondary-base bg-opacity-100': changeMenuHeight,
      })}
    >
      {cloneElement(children, { changeMenuHeight })}
    </div>
  )
}

type ContentProps = {
  changeMenuHeight?: boolean
  children: ReactNode
}

function Content({ changeMenuHeight, children }: ContentProps) {
  return (
    <header
      className={clsx(
        'relative mx-auto flex max-w-container items-center justify-between px-6 py-6 transition-all duration-200 ease-in-out xl:px-0',
        {
          'lg:py-6': !changeMenuHeight,
          'lg:py-3.5': changeMenuHeight,
        },
      )}
    >
      {children}
    </header>
  )
}

Main.displayName = 'HeaderWrapper'
Content.displayName = 'HeaderWrapper.Content'

const HeaderWrapper = Object.assign(Main, {
  Content,
})

export default HeaderWrapper
