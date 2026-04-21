export default {
  // 从标准配置中继承规则
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-idiomatic-order',
  ],
  // 规则配置
  rules: {
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
}
