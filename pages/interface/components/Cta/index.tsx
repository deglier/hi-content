import clsx from 'clsx'
import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'

import DollarSignIcon from '@/pages/interface/components/graphics/DollarSignIcon'
import SmileIcon from '@/pages/interface/components/graphics/SmileIcon'
import { useModal } from '@/pages/interface/hooks/useModal'

type MainProps = {
  dark?: boolean
  ctaIcon: ReactElement
  children: ReactNode
  className?: string
  onClick?: () => void
}

function Main({ ctaIcon, children, dark = false, className = '', onClick, ...props }: MainProps) {
  const { openModal, isModalOpen } = useModal()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [showRipple, setShowRipple] = useState(false)
  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const pos = buttonRef.current?.getBoundingClientRect()
    const x = event.clientX - (pos?.left ?? 0)
    const y = event.clientY - (pos?.top ?? 0)
    setCoords((oldCoord) => ({
      x: isNaN(x) ? oldCoord.x : x,
      y: isNaN(y) ? oldCoord.y : y,
    }))
  }

  useEffect(() => {
    if (!isModalOpen && !onClick) setTimeout(() => setShowRipple(false), 300)
  }, [isModalOpen, onClick])
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => {
        if (!onClick) {
          setShowRipple(true)
          openModal()
        } else {
          onClick()
        }
      }}
      onMouseMove={handleMouseMove}
      className={clsx('group relative flex gap-2 text-xl font-bold leading-[22px]', className, {
        'text-primary-base': !dark,
        'text-secondary-base': dark,
      })}
      {...props}
    >
      {ctaIcon}
      <span className="relative flex flex-col items-center px-1">
        <span className="flex items-center gap-1 whitespace-nowrap pb-2.5">
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={15}
            fill="none"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M24.165 6.013c-1.817-.674-7.393-1.732-9.769-4.433-1.563-1.783-2.336-1.188-.947.722 1.019 1.397 2.805 2.773 4.667 3.593-2.154.063-2.063.096-15.09.835C.408 6.883.113 7.1.463 7.81c.454.886 1.14 1.33 2.035 1.312.022-.002 16.988-.776 16.997-.49.004.046-.356.313-.804.633-3.063 2.126-4.163 3.915-2.93 4.792.582.417 1.607-.024 3.332-1.422.717-.58 2.422-1.781 3.804-2.684 3.498-2.307 3.734-3.024 1.268-3.938Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <svg
          height={5}
          viewBox="0 0 93 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
        >
          <path
            d="M91.146.822c-1.762-.075-3.616 0-5.377 0-2.967 0-5.934.075-8.993.075-4.45 0-8.992-.075-13.535-.075-2.225 0-4.358-.15-6.583-.15C51.93.596 47.295.596 42.567.522c-4.543-.076-8.993.074-13.535.074-2.41 0-4.914.15-7.417.226-.927.075-1.854.075-2.781.075-3.245.076-6.49.151-9.642.377-1.761.075-3.43.075-5.099.15-.649 0-1.205.151-1.854.226h.093c-.464.076-.927.15-1.298.226-.742.226-1.113.678-1.02 1.28 0 .602.464 1.129 1.205 1.204.65.076 1.39.226 2.04.076 2.688-.377 5.377-.226 8.158-.452 2.503-.15 5.099-.075 7.602-.15 2.503-.076 4.914-.226 7.417-.377 2.04 0 4.079 0 6.118-.075 3.987 0 7.973-.076 12.052 0 2.874 0 5.748.075 8.622.075 3.987.075 7.88.075 11.774.15 5.934.151 11.774.076 17.615-.075h8.992c.835 0 1.391-.451 1.391-1.129 0-1.054-.556-1.58-1.854-1.58Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        className={clsx(
          'absolute z-ripple h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light opacity-100 transition-[height,width,opacity] duration-500',
          {
            'h-[calc((100vh+100vw)*2)] w-[calc((100vh+100vw)*2)] opacity-100 ease-out': showRipple,
            'ease-in': !showRipple,
          },
        )}
        style={{ top: coords.y, left: coords.x }}
      ></span>
    </button>
  )
}

type IconProps = {
  icon?: 'smile' | 'dollarSign'
}

function Icon({ icon = 'dollarSign' }: IconProps) {
  switch (icon) {
    case 'smile':
      return <SmileIcon />
    case 'dollarSign':
      return <DollarSignIcon />
    default:
      return <DollarSignIcon />
  }
}

Main.displayName = 'Cta'
Icon.displayName = 'Cta.Icon'

const Cta = Object.assign(Main, {
  Icon,
})

export default Cta
