import './App.css';
import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { createUseGesture, dragAction, pinchAction, useDrag } from '@use-gesture/react'


const useGesture = createUseGesture([dragAction, pinchAction])

export default function Card() {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0}))
    const bind = useDrag(({ active, movement: [mx, my], cancel }) => {
      if (mx > 200 || my > 200) cancel()
      api.start({ x: active ? mx : 0, immediate: active, y: active ? my : 0})
    })

  return (
      <animated.div {...bind()} style={{ x, y }} className="NeedHelpCard">

      </animated.div>
  )
}