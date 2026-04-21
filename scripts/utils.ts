import path from 'path'
import url from 'url'
import fs from 'fs'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
export const ROOT = path.resolve(__dirname, '..')

const C: Record<string, string> = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
}
export const c = (col: string, txt: string) => `${C[col]}${txt}${C.reset}`

export const log: Record<string, (m: string) => void> = {
  title: (m) => console.log(`\n${c('bold', c('magenta', m))}`),
  step: (m) => console.log(`${c('blue', ' →')} ${m}`),
  success: (m) => console.log(`${c('green', ' ✔')} ${m}`),
  info: (m) => console.log(`${c('cyan', ' ℹ')} ${m}`),
  warn: (m) => console.log(`${c('yellow', ' ⚠')} ${m}`),
  error: (m) => console.error(`${c('red', ' ✖')} ${m}`),
  dim: (m) => console.log(c('gray', `   ${m}`)),
  blank: () => console.log(),
}

export function readJson(fp: string) {
  return JSON.parse(fs.readFileSync(fp, 'utf-8'))
}
