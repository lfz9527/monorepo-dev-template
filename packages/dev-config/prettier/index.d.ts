import type { Config } from 'prettier'

declare module '@xt/dev-config/prettier' {
  const config: Config
  export default config
}

declare module '@xt/dev-config/prettier/tailwind' {
  const config: Config
  export default config
}
