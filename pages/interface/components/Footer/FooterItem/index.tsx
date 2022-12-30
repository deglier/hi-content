import clsx from 'clsx'
import { ReactNode } from 'react'

type MainProps = {
  id: string
  title: string
  children: ReactNode
}

function Main({ title, id, children }: MainProps) {
  return (
    <div id={`footer_${id}`}>
      <h3 className="pb-3 text-xs font-semibold italic leading-none text-primary-medium">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

type ItemTypes = 'link' | 'text' | 'email' | 'tel'
type ListProps = {
  items: {
    type: string
    displayText: string
    id: string
    link?: string
  }[]
}

function List({ items }: ListProps) {
  const classes = 'text-sm leading-none text-neutral-high-dark'
  return (
    <>
      {items.map((item) => {
        switch (item.type as ItemTypes) {
          case 'text':
            return (
              <p className={classes} key={item.id}>
                {item.displayText}
              </p>
            )
          case 'tel':
            return (
              <a className={classes} key={item.id} href={`tel:+55${item.displayText.replace(/[^\d+]/g, '')}`}>
                {item.displayText}
              </a>
            )
          case 'email':
            return (
              <a className={classes} key={item.id} href={`mailto:${item.displayText.trim()}`}>
                {item.displayText}
              </a>
            )
          case 'link':
            return (
              <a className={clsx(classes, 'group flex items-center gap-2')} key={item.id} href={item.link?.trim()}>
                {item.displayText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={15}
                  viewBox="0 0 26 15"
                  fill="none"
                  className="h-full w-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1 "
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M24.165 6.013c-1.817-.674-7.393-1.732-9.769-4.433-1.563-1.783-2.336-1.188-.947.722 1.019 1.397 2.805 2.773 4.667 3.593-2.154.063-2.063.096-15.09.835C.408 6.883.113 7.1.463 7.81c.454.886 1.14 1.33 2.035 1.312.022-.002 16.988-.776 16.997-.49.004.046-.356.313-.804.633-3.063 2.126-4.163 3.915-2.93 4.792.582.417 1.607-.024 3.332-1.422.717-.58 2.422-1.781 3.804-2.684 3.498-2.307 3.734-3.024 1.268-3.938Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )
          default:
            return (
              <p className={classes} key={item.id}>
                {item.displayText}
              </p>
            )
        }
      })}
    </>
  )
}

Main.displayName = 'FooterItem'
List.displayName = 'FooterItem.List'

export default Object.assign(Main, {
  List,
})
