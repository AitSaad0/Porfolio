'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <span className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-6 block">
            04 — Contact
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-display text-[clamp(3rem,8vw,8rem)] text-[#f0f0f0] mb-4 leading-none">
            Let&apos;s talk.
          </h2>
          <h2 className="text-display text-[clamp(3rem,8vw,8rem)] text-[#1f1f1f] mb-16 leading-none">
            Parlons.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <a
            href="mailto:edd.aitsaad@gmail.com"
            className="group flex items-center gap-3 text-[#f0f0f0] hover:gap-5 transition-all duration-300"
          >
            <span className="text-2xl md:text-3xl font-light">edd.aitsaad@gmail.com</span>
            <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
          </a>

          <div className="flex items-center gap-6 text-mono text-sm text-[#333333]">
            <a href="https://github.com/AitSaad0" target="_blank" rel="noreferrer" className="hover:text-[#f0f0f0] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ait-abd-saad-eddine/" target="_blank" rel="noreferrer" className="hover:text-[#f0f0f0] transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}