import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Header() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map(l =>
        document.getElementById(l.toLowerCase())
      )
      const scroll = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scroll) {
          setActive(links[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-cyan-400 font-bold text-xl">MA</div>
        <ul className="hidden md:flex gap-6 relative">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm tracking-wide relative">
                {l}
                {active === l && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}