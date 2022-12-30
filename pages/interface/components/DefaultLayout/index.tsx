import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

import Settings from '@/domain/settings'
import Footer from '@/pages/interface/components/Footer'
import XClose from '@/pages/interface/components/graphics/XClose'
import Head, { Metadata } from '@/pages/interface/components/Head'
import Header from '@/pages/interface/components/Header'
import { useModal } from '@/pages/interface/hooks/useModal'

type DefaultLayoutProps = {
  metadata?: Metadata
  children?: ReactNode
  settings: Settings
}

export default function DefaultLayout({ metadata, children, settings }: DefaultLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {metadata && <Head metadata={metadata} />}
      <div className="flex-grow border-b border-b-secondary-dark bg-noise">
        <Header />
        {children}
      </div>
      <Footer source={settings} />
      {/* <ModalSimulator /> */}
    </div>
  )
}

function ModalSimulator() {
  const { isModalOpen, closeModal } = useModal()
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-modal" onClose={closeModal}>
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out delay-500 duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative h-screen w-screen transform overflow-y-auto bg-primary-light transition-all">
                <button
                  onClick={closeModal}
                  className="absolute top-12 right-12 flex h-10 w-10 items-center justify-center"
                >
                  <XClose className="stroke-secondary-medium" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
