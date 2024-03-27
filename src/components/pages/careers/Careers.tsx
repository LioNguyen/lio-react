import './Careers.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

interface CareersProps extends HTMLAttributes<HTMLDivElement> {}

export const Careers: FC<CareersProps> = () => {
  const careers: any = useLoaderData()

  return (
    <div className="careers">
      {(careers ?? []).map((career: any) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}
