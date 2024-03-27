import { NavLink } from 'react-router-dom'
import './NotFound.styles.scss'

import { FC, HTMLAttributes } from 'react'

interface NotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className="not-found">
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  )
}
