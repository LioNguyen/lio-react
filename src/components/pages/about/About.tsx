import './About.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'
import { Navigate } from 'react-router-dom'

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export const About: FC<AboutProps> = ({ className, ...props }) => {
  const [user, setUser] = useState('Lio')

  if (!user) {
    return <Navigate to={'/'} replace={true} />
  }
  return (
    <div className={clsx('about', className)} {...props}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        exercitationem voluptates deleniti quos modi quae assumenda iure hic
        neque est. Error debitis suscipit architecto assumenda eligendi vel
        similique id commodi, sit voluptas esse placeat quo aliquam iure
        temporibus qui? Tempore accusantium, dicta consequatur veritatis optio
        qui nobis ipsum fuga tenetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        exercitationem voluptates deleniti quos modi quae assumenda iure hic
        neque est. Error debitis suscipit architecto assumenda eligendi vel
        similique id commodi, sit voluptas esse placeat quo aliquam iure
        temporibus qui? Tempore accusantium, dicta consequatur veritatis optio
        qui nobis ipsum fuga tenetur?
      </p>
      <button onClick={() => setUser('')}>Logout</button>
    </div>
  )
}
