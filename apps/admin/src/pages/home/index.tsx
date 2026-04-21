import { useNavigate } from 'react-router'
import Loading from '@/components/Loading'

export default function Home() {
  const nav = useNavigate()
  return (
    <>
      <Loading />
      <button onClick={() => nav('/login')}>去登录哦</button>
      <button onClick={() => nav('/404')}>去404哦</button>
    </>
  )
}
