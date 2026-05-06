'use client'

import { useLang } from '@/context/Langcontext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono text-xs text-[#333333]">
          © 2026 Ait Abd Saad Eddine — {t('Built with Next.js', 'Construit avec Next.js')}
        </span>
        <span className="font-mono text-xs text-[#1f1f1f]">v1.0.0</span>
      </div>
    </footer>
  )
}