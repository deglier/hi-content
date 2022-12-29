import { createContext, ReactNode, useContext, useState } from 'react'

type ModalData = {
  isModalOpen: boolean
  closeModal: () => void
  openModal: () => void
}

const ModalContext = createContext<ModalData>({} as ModalData)

type ModalProviderProps = {
  children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)
