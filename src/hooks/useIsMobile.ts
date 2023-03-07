import { useEffect, useState } from 'react'

import { useWindowSize } from './useWindowSize'

const useIsMobile = () => {
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(width < 480)

  useEffect(() => {
    setIsMobile(width < 480)
  }, [width])

  return isMobile
}

export { useIsMobile }
