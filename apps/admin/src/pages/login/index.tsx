import LoginForm from './login-form'

export default function Login() {
  return (
    <div className='flex-center bg-muted min-h-svh flex-col p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <LoginForm />
      </div>
    </div>
  )
}
