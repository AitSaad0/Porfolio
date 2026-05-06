'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/context/Langcontext'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
}

const ease = [0.16, 1, 0.3, 1] as const

const wordVariant = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.9, ease },
  },
}

export default function Hero() {
  const { t } = useLang()

  const words = [t('Hello,', 'Salut,'), t("I'm", 'Je suis'), 'Ait Abd Saad Eddine.']

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 overflow-hidden">

      {/* Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Location badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute top-28 left-6 md:left-12 flex items-center gap-3"
        >
        <span className="font-serif text-xs text-[#555555] tracking-widest uppercase">
            {t('Based in Marrakech, Morocco', 'Basé à Marrakech, Maroc')}
        </span>
        </motion.div>

      {/* Big animated text */}
      <div className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={wordVariant}
                className="block font-['Syne'] text-[clamp(4rem,12vw,11rem)] text-[#f0f0f0] leading-none tracking-[-0.12em]"
                style={{
                  fontWeight: i === 2 ? 300 : 800,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle row — standalone animation, no variants conflict */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <p className="text-[#555555] text-base md:text-lg max-w-md leading-relaxed">
            {t(
              'CS Student · CTF player · Builder of things that (sometimes) work.',
              'Étudiant en info · CTF player · Je build des trucs qui (parfois) marchent.'
            )}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="group flex items-center gap-2 text-sm text-[#f0f0f0] border border-[#1f1f1f] px-5 py-3 rounded-full hover:border-[#f0f0f0] transition-all duration-300"
            >
              {t('See my work', 'Voir mes projets')}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#contact"
              className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 right-6 md:right-12 font-mono text-xs text-[#333333] tracking-widest"
      >
        scroll ↓
      </motion.div>
    </section>
  )
}