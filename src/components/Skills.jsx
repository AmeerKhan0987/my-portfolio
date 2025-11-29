import GlassCard from './GlassCard'
import { skills } from '../lib/constants'
import { motion } from 'framer-motion'

const SkillBadge = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.08, rotate: -2 }}
    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-200"
  >
    {children}
  </motion.div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-cyan-200 font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-cyan-200 font-semibold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-cyan-200 font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              {skills.learning.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-cyan-200 font-semibold mb-4">Operating Systems</h3>
            <div className="flex flex-wrap gap-3">
              {skills.os.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}