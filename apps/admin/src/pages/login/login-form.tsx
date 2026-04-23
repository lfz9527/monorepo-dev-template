import { Card } from '@xt/ui'
import { cn } from '@xt/utils'

type Props = React.ComponentProps<'div'>

export default function LoginForm({ className, ...props }: Props) {
  return (
    <div
      className={cn('flex flex-col', className)}
      {...props}
    >
      <Card
        title='欢迎回来'
        headerProps={{ className: 'flex-center' }}
        titleProps={{ className: 'text-xl' }}
      >
        213
      </Card>
    </div>
  )
}
