import './BasicsOfMotion.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface BasicsOfMotionProps extends HTMLAttributes<HTMLDivElement> {}

export const BasicsOfMotion: FC<BasicsOfMotionProps> = ({
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className={clsx('basics-of-motion', className)} {...props}>
      <h1>BasicsOfMotion</h1>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout // Automatically animate to its new position when its layout changes
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: '180deg',
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }} // Unmount animation (combine with AnimatePresence)
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: 'black',
              borderRadius: '5px',
              position: 'relative',
            }}
          >
            <p
              style={{
                color: 'white',
                position: 'absolute',
                top: 5,
                left: 5,
              }}
            >
              Root
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
