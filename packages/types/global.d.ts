import type React from 'react'

declare global {
  type AnyObj<K = string, V = any> = Record<K, V>

  type AnyFunction<R = any> = (...args: any[]) => R

  type ElAttrs<T = any> = {
    className?: string
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<T>
  }

  type NotArgReturnFunc<R = any> = () => R

  type OneArgVoidFunction<T = string> = (arg: T) => void
}
