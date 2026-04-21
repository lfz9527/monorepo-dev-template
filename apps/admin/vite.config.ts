import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import stylelint from 'vite-plugin-stylelint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true, // 开启自动修复
      include: ['**/*.{css,scss,less}'], // 仅检查样式文件
      cache: false, // 开发时关闭缓存
    }),
  ],
})
