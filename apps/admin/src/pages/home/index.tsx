import { useNavigate } from 'react-router'

export default function Home() {
  const nav = useNavigate()
  return (
    <>
      <button onClick={() => nav('/login')}>去登录哦</button>
      <button onClick={() => nav('/404')}>去404哦</button>
    </>
  )
}
