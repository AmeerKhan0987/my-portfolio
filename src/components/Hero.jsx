import { motion } from 'framer-motion'
import { slideUpStagger } from '../lib/variants'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const name = 'Mohammad Ameer'.split('')
  const role = 'Aspiring Web Developer'

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
            {name.map((ch, i) => (
              <motion.span
                key={i}
                variants={slideUpStagger}
                initial="hidden"
                animate="show"
                custom={i}
                className="inline-block"
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-cyan-300 text-xl mb-4"
          >
            {role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-neutral-300 mb-8"
          >
            Passionate about translating ideas into elegant, high-performance web interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4"
          >
            <MagneticButton>
              <a href="#contact">Get in touch</a>
            </MagneticButton>
            <MagneticButton className="bg-white/10 text-white">
              <a href="#projects">See my work</a>
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative group"
        >
          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-white/10 shadow-cyan-400/20 shadow-2xl">
            <img
              src="/hero-placeholder.jpeg"
              alt="Mohammad Ameer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}