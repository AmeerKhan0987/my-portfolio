import GlassCard from './GlassCard'
import { education, certs } from '../lib/constants'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300"
        >
          Education & Certifications
        </motion.h2>
        <div className="relative border-l-2 border-cyan-400/30 ml-4">
          {education.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-8 ml-6"
            >
              <span className="absolute -left-[10px] mt-1 w-4 h-4 rounded-full bg-cyan-400" />
              <GlassCard className="p-4">
                <p className="text-cyan-300 font-semibold">{e.year}</p>
                <h3 className="text-white font-medium">{e.title}</h3>
                <p className="text-neutral-300 text-sm">{e.place}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mt-12 mb-6 text-cyan-200"
        >
          Certifications
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-neutral-200 text-sm"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}