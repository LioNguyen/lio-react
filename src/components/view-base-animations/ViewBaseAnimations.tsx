import './ViewBaseAnimations.styles.scss'

import clsx from 'clsx'
import { motion, useInView } from 'framer-motion'
import { FC, HTMLAttributes, useRef } from 'react'

interface ViewBaseAnimationsProps extends HTMLAttributes<HTMLDivElement> {}

export const ViewBaseAnimations: FC<ViewBaseAnimationsProps> = ({
  className,
  ...props
}) => {
  const ref = useRef(null)

  // Hook to check element in view or not
  const isInView = useInView(ref)

  return (
    <div className={clsx('view-base-animations', className)} {...props}>
      <h1>ViewBaseAnimations</h1>
      {/* <div style={{ height: '150vh' }} /> */}
      <motion.div
        style={{
          height: '50vh',
          width: 150,
          background: 'black',
          borderRadius: '4px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Animate element when in view
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: '50vh',
          width: 150,
          background: isInView ? 'red' : 'blue',
          borderRadius: '4px',
          transition: '1s background',
        }}
      />
    </div>
  )
}
