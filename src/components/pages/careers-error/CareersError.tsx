import './CareersError.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { Link, useRouteError } from 'react-router-dom'

interface CareersErrorProps extends HTMLAttributes<HTMLDivElement> {}

export const CareersError: FC<CareersErrorProps> = () => {
  const error: any = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}
