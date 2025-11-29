import { useRef } from 'react'
export default function useRipple() {
  const ripples = useRef([])
  const add = e => {
    const r = document.createElement('span')
    const size = 60
    r.style.width = r.style.height = size + 'px'
    r.style.left = e.pageX - size / 2 + 'px'
    r.style.top = e.pageY - size / 2 + 'px'
    r.className = 'ripple'
    document.body.appendChild(r)
    setTimeout(() => r.remove(), 1000)
  }
  return add
}