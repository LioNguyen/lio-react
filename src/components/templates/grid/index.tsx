import { FC, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Navbar } from '@/components/organisms/navbar'
import { Outlet } from 'react-router-dom'

interface GridProps extends HTMLAttributes<HTMLDivElement> {}

export const Grid: FC<GridProps> = ({ className, ...props }) => {
  return (
    <div className={cn('grid grid-cols-6', className)} {...props}>
      <aside className="col-span-1  bg-light h-screen p-[30px]">
        <Navbar />
      </aside>
      <main className="col-span-5 p-[30px]">
        <Outlet />
      </main>
    </div>
  )
}
