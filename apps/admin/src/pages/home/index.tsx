import { Button, Card } from '@xt/ui'

export default function Home() {
  return (
    <>
      <Button className='f'>
        <a href='/login'>Login</a>
      </Button>

      <div className='flex-center'>
        <div className='w-100'>
          <Card />
        </div>
      </div>
    </>
  )
}
