import { cn } from '@xt/utils'
import LoadingSvg from '~icons/local-icons/loading'
import styles from './index.module.css'

type Props = ElAttrs<HTMLDivElement> & {
  size?: number | string
}

export default function Loading({ className, size = 24, ...props }: Props) {
  return (
    <div
      className={cn(styles['loading'], className)}
      {...props}
    >
      <LoadingSvg
        width={size}
        height={size}
      />
    </div>
  )
}
