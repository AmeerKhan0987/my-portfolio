import GlassCard from './GlassCard'
import { about } from '../lib/constants'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-cyan-300"
        >
          About Me
        </motion.h2>
        <GlassCard className="p-6 md:p-8 space-y-6">
          <p className="text-neutral-200 leading-relaxed">{about.objective}</p>
          <div>
            <h3 className="text-cyan-200 font-semibold mb-2">Strengths</h3>
            <ul className="list-disc list-inside text-neutral-300">
              {about.strengths.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-200 font-semibold mb-2">Hobbies & Interests</h3>
            <ul className="list-disc list-inside text-neutral-300">
              {about.hobbies.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}