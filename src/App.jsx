import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GooeyCursor from './components/GooeyCursor'
import useTrail from './hooks/useTrail'
import useRipple from './hooks/useRipple'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export default function App() {
  const dots = useTrail()
  const addRipple = useRipple()

  return (
    <div
      onClick={addRipple}
      className="relative"
      style={{ cursor: 'none' }}
    >
      {/* Cursor trail */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          ref={el => (dots.current[i] = el)}
          className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-400 blur-sm -z-10"
          style={{ opacity: 0 }}
        />
      ))}

      {/* Gooey ripple canvas */}
      <Canvas
        className="pointer-events-none fixed inset-0 -z-20"
        camera={{ position: [0, 0, 1], fov: 75 }}
      >
        <GooeyCursor />
      </Canvas>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}