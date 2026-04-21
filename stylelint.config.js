import stylelintConfig from '@xt/dev-config/stylelint'
export default {
  ...stylelintConfig,
  // 忽略检查的文件或文件夹
  ignoreFiles: [
    'node_modules/**/*',
    'apps/*/dist*/**/*',
    'apps/*/src/assets/fonts/**/*',
    'apps/*/public/**/*',
  ],
}
