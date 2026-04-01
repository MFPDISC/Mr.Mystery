'use client'

import { useState, useEffect } from 'react'
import SignalLanding from '@/components/SignalLanding'
import RadioDialNav from '@/components/RadioDialNav'
import NewRelease from '@/components/NewRelease'
import TheVault from '@/components/TheVault'
import Transmit from '@/components/Transmit'
import ProductDisplay from '@/components/ProductDisplay'
import StreamingLinks from '@/components/StreamingLinks'
import { motion } from 'framer-motion'

export default function Home() {
  const [showLanding, setShowLanding] = useState(true)
  const [currentSection, setCurrentSection] = useState('new-release')

  const handleTuneIn = () => {
    setShowLanding(false)
  }

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === 'undefined' || showLanding) return

    const handleScroll = () => {
      const sections = ['new-release', 'vault', 'product', 'streaming', 'transmit']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showLanding])

  if (showLanding) {
    return <SignalLanding onTuneIn={handleTuneIn} />
  }

  return (
    <main className={`min-h-screen bg-background text-white`}>
      {/* Grain overlay for entire site */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-0" />

      {/* Radio Dial Navigation */}
      <RadioDialNav currentSection={currentSection} />

      {/* BROADCAST Header with Glitch Effect */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur border-b border-white/10"
      >
        <div className="container-custom py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.div
              className="text-xs font-bold border border-white/20 px-2 py-1 tracking-tighter font-mono"
              whileHover={{ borderColor: 'rgba(255,255,255,1)', color: '#00ff00' }}
            >
              ON-SET
            </motion.div>
            <motion.h1
              className="text-2xl md:text-4xl font-bold tracking-[0.3em]"
            >
              BROADCAST
            </motion.h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-white/40 text-xs tracking-widest uppercase font-mono">
              MR.MYSTERY // 2026
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content - with padding for fixed header */}
      <div className={`pt-24 relative z-10 transition-all duration-700`}>
        <NewRelease />
        <TheVault />
        <ProductDisplay />
        <StreamingLinks />
        <Transmit />
      </div>



      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-dark-grey relative z-10">
        <div className="container-custom text-center">
          <div className="flex justify-center gap-8 items-center mb-6 opacity-30">
            <span className="text-xs font-mono tracking-tighter">ON-SET</span>
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-xs font-mono tracking-tighter">MR.MYSTERY</span>
          </div>
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-4">
            NEW TRANSMISSIONS INCOMING
          </p>
          <p className="text-white/20 text-[8px] tracking-wider font-mono">
            ALL TRANSMISSIONS ENCRYPTED // ON-SET MEDIA CORP © 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
