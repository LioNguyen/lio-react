import './CareersLayout.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

interface CareersLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const CareersLayout: FC<CareersLayoutProps> = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <Outlet />
    </div>
  )
}
