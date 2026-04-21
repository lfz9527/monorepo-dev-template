import type { Config } from 'stylelint'

declare module '@xt/dev-config/stylelint' {
  const config: Config
  export default config
}
