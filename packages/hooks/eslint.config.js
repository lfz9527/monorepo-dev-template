import { defineConfig, globalIgnores } from 'eslint/config'
import eslintReactConfig from '@xt/dev-config/eslint/react'

export default defineConfig([
  globalIgnores(['dist', 'node_modules/**/*']),
  ...eslintReactConfig,
])
