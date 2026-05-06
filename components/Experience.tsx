'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    role: 'Software Engineering Student',
    roleFr: 'Étudiant Ingénierie Informatique',
    org: 'ENSA Marrakech',
    period: '2024 — Present',
    items: [
      'Full-stack development: Spring Boot, FastAPI, Next.js, Angular',
      'DevOps: Docker, Kubernetes, CI/CD, cloud notions',
      'Databases: MySQL, PostgreSQL — MVC architecture',
      'Backend systems, REST APIs, data access layers (DAO, Hibernate)',
    ],
  },
  {
    role: 'Intern — Faculty of Medicine',
    roleFr: 'Stagiaire — Faculté de Médecine',
    org: 'Marrakech',
    period: 'Jul — Aug 2025',
    items: [
      'Integrated into a production Next.js web application',
      'Developed the exam results viewing feature for students',
      'Handled full data fetching and display between backend and UI',
    ],
  },
  {
    role: 'Founder & Project Lead',
    roleFr: 'Fondateur & Chef de Projet',
    org: 'Enactus Club / CS Department Club — ENSA',
    period: '2023 — Present',
    items: [
      'Founded Enactus club, led project "We Are With You" — semi-finalist at National Cup',
      'Generated 5,000 MAD in revenue across 3 projects',
      'Organized inter-student Coding Game as CS club project lead',
      '1st Place — Hack4Aero Hackathon · 3 hackathons · 4 CTF competitions (2025/2026)',
    ],
  },
]

const education = [
  { degree: 'Ingénierie Informatique', school: 'ENSA Marrakech', year: '2024 — Present' },
  { degree: 'Capture The Flag (CTF)', school: '4 competitions', year: '2025 — 2026' },
  { degree: 'Hackathons', school: '3 competitions incl. Hack4Aero 1st place', year: '2025 — 2026' },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="px-6 md:px-12 py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-4 block">
            03 — Experience & Education
          </span>
          <h2 className="text-display text-[clamp(2.5rem,5vw,4rem)] text-[#f0f0f0]">
            Background.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Experience */}
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                className="border-l-2 border-[#1f1f1f] pl-6"
              >
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium">{e.role}</h3>
                    <span className="text-mono text-xs text-[#333333]">{e.roleFr}</span>
                  </div>
                  <span className="text-mono text-xs text-[#333333] shrink-0 ml-4">{e.period}</span>
                </div>
                <div className="text-sm text-[#555555] mb-3">{e.org}</div>
                <ul className="space-y-1.5">
                  {e.items.map((item, j) => (
                    <li key={j} className="text-sm text-[#333333] flex gap-2">
                      <span className="text-[#1f1f1f] mt-1.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex justify-between items-start border-b border-[#1f1f1f] pb-6"
                >
                  <div>
                    <div className="text-[#888888] font-medium mb-1">{ed.degree}</div>
                    <div className="text-mono text-xs text-[#333333]">{ed.school}</div>
                  </div>
                  <span className="text-mono text-xs text-[#333333]">{ed.year}</span>
                </motion.div>
              ))}
            </div>

            {/* Skills grid */}
            <div className="mt-12">
              <h3 className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-6">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'Spring Boot', 'FastAPI', 'Next.js', 'Angular', 'MySQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'Git'].map((s) => (
                  <span key={s} className="text-mono text-xs border border-[#1f1f1f] text-[#555555] px-3 py-1 rounded-full hover:border-[#333333] hover:text-[#f0f0f0] transition-all duration-200 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}