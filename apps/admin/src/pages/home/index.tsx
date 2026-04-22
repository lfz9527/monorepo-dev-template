import { useNavigate } from 'react-router'
import Loading from '@/components/Loading'
import { Button } from '@xt/ui'

export default function Home() {
  const nav = useNavigate()
  return (
    <>
      <Loading />
      <Button onClick={() => nav('/login')}>去登录哦</Button>
      <button onClick={() => nav('/404')}>去404哦</button>
    </>
  )
}
