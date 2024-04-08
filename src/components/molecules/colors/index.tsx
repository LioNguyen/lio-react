import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface ColorsProps extends HTMLAttributes<HTMLDivElement> {}

export const Colors: FC<ColorsProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('colors', className)} {...props}>
      <h3>Color</h3>
      <p className="text-secondary-light mb-1">Secondary light color text</p>
      <p className="text-[#F2613F] mb-2">Custom color text</p>
      <p>Normal color text</p>
    </div>
  )
}
