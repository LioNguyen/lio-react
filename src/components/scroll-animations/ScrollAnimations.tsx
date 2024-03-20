import './ScrollAnimations.styles.scss'

import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'

interface ScrollAnimationsProps extends HTMLAttributes<HTMLDivElement> {}

export const ScrollAnimations: FC<ScrollAnimationsProps> = ({
  className,
  ...props
}) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(177, 177, 177, 1)', 'rgba(255, 0, 132, 1)'],
  )
  return (
    <div className={clsx('scroll-animations', className)} {...props}>
      <h1>ScrollAnimations</h1>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          // background: "blue",
          background,
          transformOrigin: 'left',
          position: 'fixed',
          top: 10,
          width: '100%',
          height: '5px',
        }}
      ></motion.div>
      <div
        style={{
          maxWidth: '700px',
          margin: 'auto',
          padding: '1.2rem',
        }}
      >
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  )
}
