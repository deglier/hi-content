import localFont from '@next/font/local'
import clsx from 'clsx'

const font = localFont({ src: './SAYesenin.woff', variable: '--font-yesenin' })

function HiContentText() {
  return (
    <div
      data-after="•"
      className="relative whitespace-nowrap px-6 text-[2rem] leading-none text-primary-base after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-1/2 after:font-highlight after:content-[attr(data-after)] "
    >
      <span className="font-highlight">hi! i&apos;m</span>
      <span className="font-bold">&nbsp;con</span>
      <span className="font-bold italic">tent</span>
    </div>
  )
}

export default function Ribbon() {
  return (
    <div
      className={clsx(
        `${font.variable}`,
        'ribbon relative my-0 mx-auto flex h-16 flex-row items-center overflow-hidden whitespace-nowrap bg-secondary-dark',
      )}
    >
      <div className="absolute flex animate-ribbon-first whitespace-nowrap">
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
      </div>
      <div className="absolute flex animate-ribbon-last whitespace-nowrap">
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
        <HiContentText />
      </div>
    </div>
  )
}
