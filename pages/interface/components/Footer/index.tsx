import Image from 'next/image'

import HikeLogo from '@/assets/hike.gif'
import settings from '@/domain/settings'
import { LogoHi } from '@/pages/interface/components/graphics'

import FooterItem from './FooterItem'

type FooterProps = {
  source: Pick<settings, 'footer'>
}

export default function Footer({ source: { footer } }: FooterProps) {
  return (
    <div className="bg-secondary-base">
      <header className="mx-auto max-w-container px-6 xl:px-0">
        <div className="flex flex-col flex-wrap items-start justify-between gap-8 py-8 sm:flex-row lg:py-22">
          <Copyright />
          <div className="flex flex-col flex-wrap items-start gap-10 sm:flex-row">
            <FooterItem id="payment" title={footer.paymentInfo.displayText}>
              <FooterItem.List items={footer.paymentInfo.items} />
            </FooterItem>
            <FooterItem id="contact" title={footer.contactInfo.displayText}>
              <FooterItem.List items={footer.contactInfo.items} />
            </FooterItem>
            <FooterItem id="social" title={footer.socialInfo.displayText}>
              <FooterItem.List items={footer.socialInfo.items} />
            </FooterItem>
            <PoweredBy />
          </div>
        </div>
        <Address content={footer.footerText} />
      </header>
    </div>
  )
}

function Copyright() {
  return (
    <div className="flex flex-col gap-y-3">
      <LogoHi className="h-[50px]" />
      <small className="text-[0.625rem] leading-[1.50] text-secondary-light">
        &copy; {new Date().getFullYear()} HIKE
        <br />
        Todos os direitos reservados.
      </small>
    </div>
  )
}

function Address({ content }: { content: string }) {
  return (
    <div className="flex items-center justify-center border-t border-t-secondary-dark py-6 text-secondary-light">
      <p>{content}</p>
    </div>
  )
}

function PoweredBy() {
  return (
    <small className="flex items-center gap-3 text-base font-light italic text-neutral-high-dark">
      <span>
        powered by{' '}
        <a href="https://www.agenciahike.com.br/" className="font-semibold">
          HIKE
        </a>
      </span>
      <span className="overflow-hidden rounded-full">
        <Image src={HikeLogo} height={32} width={32} alt="HIKE logo" className="object-cover" />
      </span>
    </small>
  )
}
