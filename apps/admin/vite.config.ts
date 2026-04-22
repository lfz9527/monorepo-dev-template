import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'
import { envParse, parseLoadedEnv } from 'vite-plugin-env-parse'
import { compression } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'
import stylelint from 'vite-plugin-stylelint'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import tailwindcss from '@tailwindcss/vite'

import { type ImportMetaEnv } from '@/types/env'
import proxy from './vite.proxy'

const defaultIconSize = 24

export default defineConfig((config) => {
  const { mode, command } = config
  const env = loadEnv(mode, process.cwd())

  const { VITE_BUILD_COMPRESS, VITE_BUILD_ANALYZE, VITE_BUILD_SOURCEMAP } =
    parseLoadedEnv(env) as ImportMetaEnv

  const isBuild = command === 'build'
  const isGzip = isBuild && VITE_BUILD_COMPRESS?.split(',').includes('gzip')
  const isProd = mode === 'production'

  const minify = {
    compress: {
      dropConsole: isProd,
      dropDebugger: isProd,
    },
  }

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          'local-icons': FileSystemIconLoader(
            path.resolve(__dirname, './src/assets/icon'),
            (svg) =>
              svg
                // 替换或添加 fill
                .replace(/fill=".*?"/, 'fill="currentColor"')
                .replace(/width=".*?"/, `width="${defaultIconSize}"`)
                .replace(/height=".*?"/, `height="${defaultIconSize}"`)
                // width/height/fill，则添加
                .replace(/^<svg/, (match) =>
                  match.includes('width')
                    ? match
                    : '<svg width="32" height="32" fill="currentColor"'
                )
          ),
        },
      }),

      stylelint({
        fix: true, // 开启自动修复
        include: ['src/**/*.{css,scss,less}'],
        cache: false, // 开发时关闭缓存
      }),

      // 根据.env 自动生成全局类型
      envParse({
        dtsPath: 'src/types/env.d.ts',
      }),

      // 压缩gzip格式
      isGzip &&
        compression({
          algorithms: ['gzip'],
        }),

      // 代码分析
      VITE_BUILD_ANALYZE &&
        visualizer({
          open: true, // 打包后自动打开浏览器
          gzipSize: true, // 显示 gzip 后体积
          brotliSize: true, // 显示 brotli 后体积
          filename: 'analyze.html', // 生成的报告文件名
        }),
    ],
    build: {
      // 规定触发警告的 chunk 大小。（以 kB 为单位）。它将与未压缩的 chunk 大小进行比较 默认就是500
      chunkSizeWarningLimit: 500,
      // 设置小于 次kb 的资源将内联为base64
      assetsInlineLimit: 10,

      rolldownOptions: {
        output: {
          minify,
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (info) => {
            const name = info.names?.[0] ?? info.originalFileNames?.[0] ?? ''
            const ext = name.split('.').pop() ?? ''
            if (/^(gif|jpe?g|png|svg)$/.test(ext))
              return 'assets/[name]-[hash][extname]'
            if (ext === 'css') return 'css/[name]-[hash][extname]'
            if (ext === 'ttf') return 'font/[name]-[hash][extname]'
            return 'assets/[name]-[hash][extname]'
          },
        },
      },
      sourcemap: VITE_BUILD_SOURCEMAP,
    },
    server: proxy,
  }
})
