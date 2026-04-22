export default {
  // 从标准配置中继承规则
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-tailwindcss'],
  // 规则配置
  rules: {
    'order/properties-alphabetical-order': true,
    // 允许 Tailwind class
    'selector-class-pattern': null,
    /* 禁止重复属性 */
    'declaration-block-no-duplicate-properties': true,
    /* 允许未知属性（兼容变量 / 新特性） */
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
  },
  // 忽略检查的文件或文件夹
  ignoreFiles: [
    'node_modules/**/*',
    'apps/*/dist*/**/*',
    'apps/*/src/assets/fonts/**/*',
    'apps/*/public/**/*',
  ],
}
