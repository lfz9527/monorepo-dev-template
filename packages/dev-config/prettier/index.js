export default {
  // 每个属性是否强制换行（HTML / JSX 标签属性）
  // true: 每个属性单独一行
  singleAttributePerLine: true,

  // 是否使用 tab 缩进（false = 使用空格）
  useTabs: false,

  // 箭头函数参数是否总是加括号
  // "always" | "avoid"
  arrowParens: 'always',

  // 是否在语句末尾加分号
  semi: false,

  // 缩进空格数
  tabWidth: 2,

  // 每行最大字符数（超出会自动换行）
  printWidth: 80,

  // JS 使用单引号
  singleQuote: true,

  // JSX 中也使用单引号（React 项目常用）
  jsxSingleQuote: true,

  // 多行时尾随逗号
  // "none" | "es5" | "all"
  trailingComma: 'es5',

  // 对象字面量中是否保留空格
  // { foo: bar } vs {foo: bar}
  bracketSpacing: true,

  // 换行符类型
  // "lf"（Linux/Mac）| "crlf"（Windows）| "auto"
  endOfLine: 'lf',

  plugins: [],
}
