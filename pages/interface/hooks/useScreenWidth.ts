import { useEffect, useState } from 'react'

export default function useScreenWidth() {
  const [innerWidth, setInnerWidth] = useState(0)
  useEffect(() => {
    const resizeHandler = () => {
      setInnerWidth(window.innerWidth)
    }

    resizeHandler()

    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])
  return {
    innerWidth,
  }
}
