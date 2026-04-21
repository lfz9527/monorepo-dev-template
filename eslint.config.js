import { defineConfig, globalIgnores } from 'eslint/config'
import eslintBase from '@xt/dev-config/eslint/base'

export default defineConfig([
  globalIgnores(['dist/**/*', 'node_modules/**/*']),
  ...eslintBase,
])
