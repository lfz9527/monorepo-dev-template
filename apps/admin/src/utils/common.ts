export const getCurEnv = () => {
  return import.meta.env.MODE || 'development'
}
