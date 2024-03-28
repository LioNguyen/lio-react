import './CareerDetails.styles.scss'

import { FC, HTMLAttributes } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

interface CareerDetailsProps extends HTMLAttributes<HTMLDivElement> {}

export const CareerDetails: FC<CareerDetailsProps> = () => {
  const career: any = useLoaderData()
  // const { id } = useParams()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  )
}
