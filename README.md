**Table of Contents | Framer Motion**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to setup?](#2-how-to-setup)
  - [2.1 Install library](#21-install-library)
- [3. How to use Framer Motion?](#3-how-to-use-framer-motion)
  - [3.1 How to add animation to elements?](#31-how-to-add-animation-to-elements)
    - [3.1.1 Enter animation](#311-enter-animation)
    - [3.1.2 Exit animation](#312-exit-animation)
  - [3.2 How to add gesture animation to elements?](#32-how-to-add-gesture-animation-to-elements)
  - [3.3 How to control animation by action like Click Button?](#33-how-to-control-animation-by-action-like-click-button)
    - [3.3.1 Create animation variants](#331-create-animation-variants)
    - [3.3.2 Create animation control](#332-create-animation-control)
  - [3.4 How to create animation when scrolling?](#34-how-to-create-animation-when-scrolling)
    - [3.4.1 Animation to show element](#341-animation-to-show-element)
    - [3.4.2 Progress bar animation when scrolling](#342-progress-bar-animation-when-scrolling)

# 1. Overview

## 1.1 Resources

- [React Framer Motion Tutorial | Youtube](https://youtu.be/znbCa4Rr054?si=yK5DBsKtJ39ou44T)
- [React Framer Motion Tutorial | Repo](https://github.com/TomIsLoading/framer-motion-crash-course)
- [Framer Motion | Official Document](https://www.framer.com/motion/)

## 1.2 What can you learn?

- Framer Motion

# 2. How to setup?

## 2.1 Install library

```bash
yarn add framer-motion
```

# 3. How to use Framer Motion?

**Basic Usage**

- Use `motion` component from `framer-motion`
- Common prop to create animation: `initial, animate`
- Use `exit` prop wrapped by `AnimatePresence` component to create `exit animation`
- Use `transition` props to config transition style
- Use `whileHover, whileTap` prop for gesture animation

**Advance Usage**

- Use [layout](#31-how-to-add-animation-to-elements) prop to automatically change element position when layout changes
- Use [MotionConfig](#32-how-to-add-gesture-animation-to-elements) to wrap all motion components to setup the **same animation config**
- Use [variants](#33-how-to-control-animation-by-action-like-click-button) prop to setup animation style for element
- Use [useAnimationControls()](#33-how-to-control-animation-by-action-like-click-button) hook to create control for animation
- Use [whileInView prop and useInView hook](#341-animation-to-show-element) to animate in-view element
- Use [useScroll, useSpring, useTransform hook](#342-progress-bar-animation-when-scrolling) to get scrolling position and create animation

## 3.1 How to add animation to elements?

### 3.1.1 Enter animation

```js
// src/components/BasicsOfMotion.tsx

import { motion, AnimatePresence } from 'framer-motion'

export const BasicsOfMotion = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
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
        transition={{
          duration: 1,
          ease: 'backInOut',
          times: [0, 0.25, 0.5, 0.85, 1],
        }}
      ></motion.div>
    </div>
  )
}
```

### 3.1.2 Exit animation

```js
// src/components/BasicsOfMotion.tsx

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

export const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
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
            // Unmount animation (combine with AnimatePresence)
            exit={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

## 3.2 How to add gesture animation to elements?

```js
// src/components/Gestures.tsx

import React from 'react'
import { motion, MotionConfig } from 'framer-motion'

export const Gestures = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
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
```

## 3.3 How to control animation by action like Click Button?

### 3.3.1 Create animation variants

```js
// src/components/AnimationControls.tsx

<motion.div
  variants={{
    initial: {
      rotate: '0',
    },
    flip: {
      rotate: '180deg',
    },
  }}
  initial={'initial'}
  animate={'rotate'}
></motion.div>
```

### 3.3.2 Create animation control

```js
// src/components/AnimationControls.tsx

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export const AnimationControls = () => {
  const controls = useAnimationControls()

  const handleFlipClick = () => {
    controls.start('flip')
  }

  const handleBackClick = () => {
    controls.start('initial')
  }

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      <button className="example-button" onClick={handleFlipClick}>
        Flip it!
      </button>
      <button className="example-button" onClick={handleBackClick}>
        Back!
      </button>
      <motion.div
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
      ></motion.div>
    </div>
  )
}
```

## 3.4 How to create animation when scrolling?

### 3.4.1 Animation to show element

```js
// src/components/ViewBaseAnimations.tsx

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const ViewBaseAnimations = () => {
  const ref = useRef(null)

  // Hook to check element in view or not
  const isInView = useInView(ref)

  return (
    <div>
      <div style={{ height: '150vh' }} />
      <motion.div
        style={{ height: '100vh', background: 'black' }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Animate element when in view
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: '100vh',
          background: isInView ? 'red' : 'blue',
          transition: '1s background',
        }}
      />
    </div>
  )
}
```

### 3.4.2 Progress bar animation when scrolling

```js
// src/components/ScrollAnimations.tsx

import { useScroll, motion, useSpring, useTransform } from 'framer-motion'
import React from 'react'

export const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(177, 177, 177, 1)', 'rgba(255, 0, 132, 1)'],
  )

  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          // background: "blue",
          background,
          transformOrigin: 'left',
          position: 'sticky',
          top: 0,
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
        // Your code
      </div>
    </div>
  )
}
```
