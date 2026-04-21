import { useRef, useEffect } from 'react'

import { cn } from '@xt/utils'

import styles from './index.module.css'
export type AutoTooltipProps = ElAttrs<HTMLDivElement> & {
  text: string | number
  lines?: number
}
export default function AutoTooltip({
  text,
  className,
  style,
  lines = 1,
  ...props
}: AutoTooltipProps) {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = divRef.current
    if (!el) return

    const checkOverflow = () => {
      // ✅ 直接用 const + 三元表达式
      const isOverflow =
        lines < 2
          ? el.scrollWidth > el.clientWidth // 单行：检测水平溢出
          : el.scrollHeight > el.clientHeight // 多行：检测垂直溢出

      el.setAttribute('title', isOverflow ? text.toString() : '')
    }
    const ro = new ResizeObserver(() => checkOverflow())
    ro.observe(el)

    return () => ro.disconnect()
  }, [text, lines])

  return (
    <div
      ref={divRef}
      className={cn(
        styles['auto-tooltip'],
        lines < 2 ? styles['ellipsis-single'] : styles['ellipsis-multiline'],
        className
      )}
      style={{
        ['--lines' as string]: lines,
        ...style,
      }}
      {...props}
    >
      {text}
    </div>
  )
}
