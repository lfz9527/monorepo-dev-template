import { useMatches, Outlet } from 'react-router'
import { useDocumentTitle } from '@xt/hooks'

import type { RouteMeta } from '../types'
import { APP_NAMES } from '@/constants'

export default function BasicGuard() {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1]
  const handle: RouteMeta = currentMatch?.handle ?? {}
  const title = handle?.title || APP_NAMES
  /**
   * 同步路由和浏览器标题
   */
  useDocumentTitle(title)

  return <Outlet />
}
