import { type UserConfig } from 'vite'

const server: UserConfig['server'] = {
  open: true,
  host: true,
  port: 9529,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
}

export default server
