'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const terminal = [
  { cmd: '$ whoami', out: 'ait-abd-saad-eddine — 2nd year CS @ ENSA Marrakech' },
  { cmd: '$ cat interests.txt', out: 'Binary exploitation · Web security · MLOps · DevOps · Hackathons' },
  { cmd: '$ ls skills/', out: 'Java  Python  TypeScript  Spring MVC  FastAPI  Next.js  Docker  GitHub Actions' },
  { cmd: '$ cat achievements.txt', out: '1st place Hack4Aero · 3 Hackathons · 4 CTFs · Enactus National Semi-finalist' },
  { cmd: '$ echo $STATUS', out: 'Actively learning. Always building. ▌' },
]

const stats = [
  { value: '6+', label: 'Projects built', labelFr: 'Projets réalisés' },
  { value: '4', label: 'CTFs competed', labelFr: 'CTFs complétés' },
  { value: '3', label: 'Hackathons', labelFr: 'Hackathons' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-6 block">
            01 — About / À propos
          </span>
          <h2 className="text-display text-[clamp(2.5rem,5vw,4rem)] text-[#f0f0f0] mb-8">
            I build &<br />
            <span className="text-[#333333]">I break things.</span>
          </h2>
          <p className="text-[#555555] leading-relaxed mb-4">
            Second-year Software Engineering student at ENSA Marrakech, building full-stack applications
            and MLOps tooling. I work across the stack — FastAPI, Spring Boot, Next.js — and care about
            clean architecture, DevOps practices, and shipping things that actually run in production.
            Occasional CTF competitor and hackathon builder on the side.
            </p>
        <p className="text-[#333333] leading-relaxed text-sm">
            Étudiant en ingénierie informatique à l'ENSA Marrakech, je développe des applications
            full-stack et des outils MLOps. Je travaille sur toute la stack — FastAPI, Spring Boot,
            Next.js — avec un intérêt pour l'architecture propre, le DevOps et les projets concrets.
            Compétiteur CTF et participant hackathon à mes heures perdues.
            </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              >
                <div className="text-display text-3xl text-[#f0f0f0] mb-1">{s.value}</div>
                <div className="text-mono text-xs text-[#333333]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f1f]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-mono text-xs text-[#333333]">sh</span>
          </div>
          {/* Terminal body */}
          <div className="p-6 space-y-5">
            {terminal.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              >
                <div className="text-mono text-sm text-emerald-400">{line.cmd}</div>
                <div className="text-mono text-xs text-[#555555] mt-1 pl-2">{line.out}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}