import './Breadcrumbs.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {}

export const Breadcrumbs: FC<BreadcrumbsProps> = () => {
  const location = useLocation()

  let currentLink = ''

  // Create breadcrumbs from existing pathname
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return <div className="breadcrumbs">{crumbs}</div>
}
