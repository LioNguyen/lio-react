import { useGlobalStore } from '@/store/globalStore'
import './Loader.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className, ...props }) => {
  const isLoading = useGlobalStore((state) => state.isLoading)
  if (!isLoading) {
    return <></>
  }
  return (
    <div className={clsx('loader-wrapper', className)} {...props}>
      <span className="loader"></span>
    </div>
  )
}
