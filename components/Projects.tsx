'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
const projects = [
  {
    index: '01',
    title: 'OkaneTransfer — Money Transfer Platform',
    subtitle: 'Lead Backend · Spring MVC · Docker · CI/CD · Git Flow',
    tags: ['Java', 'Spring MVC', 'Angular', 'Docker', 'GitHub Actions'],
    description:
      'Lead Backend: JWT authentication, 2FA SMS OTP, rate limiting (5 req/10 min/IP) and audit logging via AOP @AfterReturning. Multi-stage containerization (Maven → Tomcat 10.1 JRE 21), docker-compose with local/prod override. Git Flow strategy with main branch protection across a 5-member team. CI/CD pipeline: JUnit tests, Jacoco 70%, Docker push to ghcr.io, SSH rolling deployment with automatic rollback.',
    descriptionFr:
      'Lead Backend : authentification JWT, 2FA SMS OTP, rate limiting et journal d\'audit via AOP @AfterReturning. Conteneurisation multi-stage (Maven → Tomcat 10.1 JRE 21), docker-compose override local/prod. Git Flow, protection main, équipe de 5. CI/CD GitHub Actions : tests JUnit, Jacoco 70%, Docker push ghcr.io, déploiement SSH rolling update avec rollback.',
    year: '2026',
    link: '#',
  },
  {
    index: '02',
    title: 'OrcaML — MLOps Platform',
    subtitle: 'FastAPI · Next.js · Docker SDK · OAuth2 · CI/CD',
    tags: ['FastAPI', 'Python', 'Next.js', 'TypeScript', 'Docker', 'CI/CD'],
    description:
      'Built a CRUD REST API with FastAPI and PostgreSQL. Developed the frontend with Next.js / TypeScript / Tailwind CSS (profile, navigation, API keys management). Implemented Google OAuth2 authentication (Authorization Code Flow, HTTP-only cookie sessions). Deployed ML models as isolated Docker containers via the Docker SDK. Maintained full deployment pipeline with Docker Compose and GitHub Actions CI/CD.',
    descriptionFr:
      'API REST CRUD avec FastAPI et PostgreSQL. Frontend Next.js / TypeScript / Tailwind CSS : profil, navigation, gestion des clés API. Authentification OAuth2 Google (Authorization Code Flow, sessions HTTP-only cookie). Déploiement de modèles ML en conteneurs Docker via le SDK Docker. Pipeline CI/CD avec Docker Compose et GitHub Actions.',
    year: '2026',
    link: 'https://github.com/AitSaad0/OrcaML',
  },
  {
    index: '03',
    title: 'Spring Boot CTF App',
    subtitle: 'REST API · MVC · Challenge-based backend',
    tags: ['Java', 'Spring Boot', 'REST', 'MVC'],
    description:
      'Designed and implemented REST endpoints following MVC architecture principles, and built the full backend logic for a CTF challenge-based system.',
    descriptionFr:
      'Conception d\'endpoints REST avec architecture MVC et logique backend complète pour un système de challenges CTF.',
    year: '2026',
    link: 'https://github.com/AitSaad0/ctf-project',
  },
  {
    index: '04',
    title: 'Internship — Faculty of Medicine',
    subtitle: 'Next.js · Full-stack · Exam results feature',
    tags: ['Next.js', 'Full-stack', 'React'],
    description:
      'Integrated into a Next.js web application at the Faculty of Medicine, Marrakech. Developed the feature allowing students to view exam results and handled data fetching between backend and UI.',
    descriptionFr:
      'Intégration dans une application Next.js à la Faculté de Médecine de Marrakech. Développement de la fonctionnalité d\'affichage des résultats d\'examens.',
    year: '2025',
    link: '#',
  },
  {
    index: '05',
    title: 'Carpooling Desktop App',
    subtitle: 'Java / JavaFX · JDBC / Hibernate · DAO',
    tags: ['Java', 'JavaFX', 'Hibernate', 'JDBC'],
    description:
      'Designed and optimized database queries using JDBC and Hibernate, and implemented a full data access layer following the DAO pattern.',
    descriptionFr:
      'Conception et optimisation des requêtes base de données avec JDBC/Hibernate, implémentation de la couche d\'accès aux données (DAO).',
    year: '2025',
    link: '#',
  },
  {
    index: '06',
    title: 'Student Management System',
    subtitle: 'PHP · CRUD · Web application',
    tags: ['PHP', 'MySQL', 'CRUD', 'Web'],
    description:
      'Built a full web application for managing students, with CRUD operations and complete database integration.',
    descriptionFr:
      'Application web complète de gestion des étudiants avec opérations CRUD et intégration base de données.',
    year: '2025',
    link: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 py-32 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-mono text-xs text-[#333333] tracking-widest uppercase mb-4 block">
              02 — Projects / Projets
            </span>
            <h2 className="text-display text-[clamp(2.5rem,5vw,4rem)] text-[#f0f0f0]">
              Some work.
            </h2>
          </div>
          <span className="text-mono text-xs text-[#333333] hidden md:block">
            {projects.length} projects
          </span>
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group border-t border-[#1f1f1f] py-8 cursor-pointer transition-all duration-300 ${
                hovered === i ? 'border-[#333333]' : ''
              }`}
            >
              <div className="grid md:grid-cols-[60px_1fr_auto] gap-6 items-start">
                <span className="text-mono text-xs text-[#333333] pt-1">{p.index}</span>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      hovered === i ? 'text-[#f0f0f0]' : 'text-[#888888]'
                    }`}>
                      {p.title}
                    </h3>
                    <span className="text-mono text-xs text-[#333333]">{p.year}</span>
                  </div>
                  <p className="text-sm text-[#333333] mb-3">{p.subtitle}</p>
                  <motion.div
                    initial={false}
                    animate={{ height: hovered === i ? 'auto' : 0, opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-[#555555] mb-2">{p.description}</p>
                    <p className="text-sm text-[#333333] italic">{p.descriptionFr}</p>
                  </motion.div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-mono text-xs text-[#333333] border border-[#1f1f1f] px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={p.link}
                  className={`text-sm mt-1 transition-all duration-200 ${
                    hovered === i ? 'text-[#f0f0f0]' : 'text-[#333333]'
                  }`}
                >
                  ↗
                </a>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1f1f1f]" />
        </div>

      </div>
    </section>
  )
}