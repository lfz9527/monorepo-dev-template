import {
  useContext,
  createContext,
  useMemo,
  useEffect,
  useCallback,
  useState,
} from 'react'

export const THEME_VALUES: Theme[] = ['dark', 'light', 'system']

type Theme = 'dark' | 'light' | 'system'
type ThemeValues = 'dark' | 'light'

type Props = {
  children: React.ReactNode
  // 默认主题
  defaultTheme?: Theme
  // 是否在主题切换时禁用动画过渡效果
  disableTransitionOnChange?: boolean
}

type State = {
  theme: Theme
}

type Action = {
  setTheme: (theme: Theme) => void
}

// 深色模式 媒体查询字符串
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

const ThemeProviderContext = createContext<State | Action | undefined>(
  undefined
)

// 获取系统主题
function getSystemTheme(): ThemeValues {
  if (window.matchMedia(COLOR_SCHEME_QUERY).matches) {
    return 'dark'
  }
  return 'light'
}

// 全局关闭所有 CSS 过渡动画，然后再安全地恢复
function disableTransitionsTemporarily() {
  const style = document.createElement('style')
  style.appendChild(
    document.createTextNode(
      '*,*::before,*::after{-webkit-transition:none!important;transition:none!important}'
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  disableTransitionOnChange = true,
  ...props
}: Props) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return defaultTheme
  })

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme)
  }, [])

  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const root = document.documentElement
      const resTheme = nextTheme === 'system' ? getSystemTheme() : nextTheme
      const resTransitions = disableTransitionOnChange
        ? disableTransitionsTemporarily()
        : null
      root.classList.remove('light', 'dark')
      root.classList.add(resTheme)

      if (resTransitions) {
        resTransitions()
      }
    },
    [disableTransitionOnChange]
  )

  useEffect(() => {
    applyTheme(theme)
    if (theme !== 'system') {
      return undefined
    }
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)
    const handleChange = () => {
      applyTheme('system')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme, applyTheme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  )

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
