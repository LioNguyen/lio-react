import './AnimationControls.styles.scss'

import clsx from 'clsx'
import { motion, useAnimationControls } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'

interface AnimationControlsProps extends HTMLAttributes<HTMLDivElement> {}

export const AnimationControls: FC<AnimationControlsProps> = ({
  className,
  ...props
}) => {
  const controls = useAnimationControls()

  const handleFlipClick = () => {
    controls.start('flip')
  }

  const handleBackClick = () => {
    controls.start('initial')
  }

  return (
    <div className={clsx('animation-controls', className)} {...props}>
      <h1>AnimationControls</h1>
      <button className="example-button" onClick={handleFlipClick}>
        Flip it!
      </button>
      <button className="example-button" onClick={handleBackClick}>
        Back!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: 'black',
          borderRadius: '5px',
          position: 'relative',
        }}
        variants={{
          initial: {
            rotate: '0',
          },
          flip: {
            rotate: '180deg',
          },
        }}
        initial={'initial'}
        animate={controls}
      >
        <p style={{ color: 'white', position: 'absolute', top: 5, left: 5 }}>
          Root
        </p>
      </motion.div>
    </div>
  )
}
