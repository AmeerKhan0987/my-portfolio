import { useRef, useEffect } from 'react'

export default function useTrail() {
  const dots = useRef([])
  const raf = useRef()

  useEffect(() => {
    const move = e => {
      dots.current.forEach((d, i) => {
        setTimeout(() => {
          if (!d) return
          d.style.left = e.pageX + 'px'
          d.style.top = e.pageY + 'px'
          d.style.opacity = 1 - i * 0.18
          d.style.transform = `translate(-50%,-50%) scale(${1 - i * 0.08})`
        }, i * 35)
      })
    }
    const animate = () => {
      move({ pageX: dots.current[0]?.dataset.x || 0, pageY: dots.current[0]?.dataset.y || 0 })
      raf.current = requestAnimationFrame(animate)
    }
    const onMouse = e => {
      dots.current[0].dataset.x = e.pageX
      dots.current[0].dataset.y = e.pageY
    }
    window.addEventListener('mousemove', onMouse)
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return dots
}