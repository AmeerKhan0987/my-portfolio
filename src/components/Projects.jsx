import GlassCard from './GlassCard'
import { projects } from '../lib/constants'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <GlassCard className="p-6 flex flex-col h-full">
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-lg mb-4 h-40 w-full object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-semibold mb-2 text-cyan-200">{p.title}</h3>
                <p className="text-neutral-300 mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <span>{p.duration}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}