import { useState, useRef, useLayoutEffect } from 'react'

import { useEventListener } from '../useEventListener/useEventListener'

const MOBILE_BREAKPOINT = 768
/**
 * 判断是否为移动端
 * @returns
 */
export function useIsMobile(point: number = MOBILE_BREAKPOINT) {
  const matchRef = useRef<MediaQueryList>(
    window.matchMedia(`(max-width: ${point - 1}px)`)
  )
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  function onChange() {
    setIsMobile(window.innerWidth < point)
  }

  useLayoutEffect(onChange, [])

  useEventListener('change', onChange, matchRef)

  return !!isMobile
}
