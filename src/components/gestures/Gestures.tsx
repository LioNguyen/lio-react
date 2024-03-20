import './Gestures.styles.scss'

import clsx from 'clsx'
import { MotionConfig, motion } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'

interface GesturesProps extends HTMLAttributes<HTMLDivElement> {}

export const Gestures: FC<GesturesProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('gestures', className)} {...props}>
      <h1>Gestures</h1>
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: '2.5deg' }}
        >
          Click Me!
        </motion.button>
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: '-2.5deg' }}
          style={{ backgroundColor: 'red' }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  )
}
