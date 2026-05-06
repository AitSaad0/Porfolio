'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/context/Langcontext'

const links = [
  { en: 'About',      fr: 'À propos',   href: '#about' },
  { en: 'Projects',   fr: 'Projets',    href: '#projects' },
  { en: 'Experience', fr: 'Expérience', href: '#experience' },
  { en: 'Contact',    fr: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggle, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]' : ''
      }`}
    >
      <a href="#" className="font-mono text-sm text-[#f0f0f0] tracking-wider font-medium">
        {'<Ait Abd Saad Eddine />'}
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors duration-200 tracking-wide"
          >
            {t(l.en, l.fr)}
          </a>
        ))}
      </nav>

      <button
        onClick={toggle}
        className="text-xs font-mono border border-[#1f1f1f] px-3 py-1.5 rounded-full text-[#555555] hover:text-[#f0f0f0] hover:border-[#555555] transition-all duration-200"
      >
        {lang === 'en' ? 'FR' : 'EN'}
      </button>
    </motion.header>
  )
}