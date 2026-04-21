import type { Linter } from 'eslint'

declare module '@xt/dev-config/eslint/base' {
  const config: Linter.FlatConfig[]
  export default config
}

declare module '@xt/dev-config/eslint/react' {
  const config: Linter.FlatConfig[]
  export default config
}
