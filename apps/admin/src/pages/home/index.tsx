import {
  Button,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@xt/ui'

export default function Home() {
  return (
    <>
      <Button className='f'>
        <a href='/login'>Login</a>
      </Button>

      <div className='flex-center'>
        <div className='w-100'>
          <Card
            title='Card Title'
            description='Card Description'
            action={'Card Action'}
            footer={<p>Card Footer</p>}
          >
            <InputGroup className='h-auto'>
              <InputGroupAddon align='block-start'>
                <InputGroupText>Full Name</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id='block-start-input'
                placeholder='Enter your name'
              />
            </InputGroup>
          </Card>
        </div>
      </div>
    </>
  )
}
