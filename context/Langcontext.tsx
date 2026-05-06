'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'fr'

interface LangContextType {
  lang: Lang
  toggle: () => void
  t: (en: string, fr: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggle: () => {},
  t: (en) => en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang(l => l === 'en' ? 'fr' : 'en')
  const t = (en: string, fr: string) => lang === 'en' ? en : fr
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)