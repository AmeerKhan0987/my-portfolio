import React from 'react'
import { motion } from 'framer-motion'
export default function MagneticButton({ children, className = '', ...rest }) {
  const ref = React.useRef(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const mouseMove = e => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }
  const mouseLeave = () => setPosition({ x: 0, y: 0 })
  return (
    <motion.button
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={
        'px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:shadow-cyan-400/40 ' +
        className
      }
      {...rest}>
      {children}
    </motion.button>
  )
}