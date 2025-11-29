import { useState } from 'react'
import GlassCard from './GlassCard'
import { contact } from '../lib/constants'
import MagneticButton from './MagneticButton'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300"
        >
          Contact
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6 md:p-8">
            <form onSubmit={handle} className="space-y-6">
              <div>
                <label className="text-neutral-300 text-sm">Name</label>
                <input
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-neutral-300 text-sm">Email</label>
                <input
                  required
                  type="email"
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-neutral-300 text-sm">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <MagneticButton type="submit">{sent ? 'Sent ✓' : 'Send Message'}</MagneticButton>
            </form>
          </GlassCard>
          <div className="flex flex-col justify-center gap-4 text-neutral-300">
            <div>
              <h3 className="text-cyan-200 font-semibold mb-1">Email</h3>
              <a href={`mailto:${contact.email}`} className="hover:text-cyan-300">
                {contact.email}
              </a>
            </div>
            <div>
              <h3 className="text-cyan-200 font-semibold mb-1">Phone</h3>
              <a href={`tel:${contact.phone}`} className="hover:text-cyan-300">
                {contact.phone}
              </a>
            </div>
            <div>
              <h3 className="text-cyan-200 font-semibold mb-1">Location</h3>
              <p>{contact.location}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href={contact.linkedin || '#'}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}