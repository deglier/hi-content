import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageXOffset || window.scrollY)
    }
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return scrollPosition
}
