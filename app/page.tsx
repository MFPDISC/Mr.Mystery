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
  const [currentSection, setCurrentSection] = useState('tape')
  const [continentalMode, setContinentalMode] = useState(false)
  const [timeOnSite, setTimeOnSite] = useState(0)
  const [showGlitch, setShowGlitch] = useState(false)

  // Timer for Continental Mode secret feature (3 minutes)
  useEffect(() => {
    if (!showLanding) {
      const interval = setInterval(() => {
        setTimeOnSite(prev => prev + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [showLanding])

  // Trigger glitch effect after 3 minutes (180 seconds)
  useEffect(() => {
    if (timeOnSite >= 180 && !showGlitch) {
      setShowGlitch(true)
    }
  }, [timeOnSite, showGlitch])

  const handleTuneIn = () => {
    setShowLanding(false)
  }

  const toggleContinentalMode = () => {
    setContinentalMode(!continentalMode)
  }

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === 'undefined' || showLanding) return

    const handleScroll = () => {
      const sections = ['tape', 'vault', 'product', 'streaming', 'transmit']
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
    <main className={`min-h-screen ${continentalMode ? 'continental-mode' : 'bg-background text-white'}`}>
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
              className={`text-2xl md:text-4xl font-bold tracking-[0.3em] cursor-pointer ${showGlitch ? 'glitch-text' : ''
                }`}
              data-text="BROADCAST"
              onClick={showGlitch ? toggleContinentalMode : undefined}
              whileHover={showGlitch ? { scale: 1.05 } : {}}
            >
              BROADCAST
            </motion.h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-white/40 text-xs tracking-widest uppercase font-mono">
              MR.MYSTERY // 2026
            </div>
            {showGlitch && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-transmission text-xs tracking-widest uppercase"
              >
                [ CLICK BROADCAST ]
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Content - with padding for fixed header */}
      <div className={`pt-24 relative z-10 transition-all duration-700 ${continentalMode ? 'scale-[0.98] brightness-125' : ''}`}>
        <NewRelease />
        <TheVault />
        <ProductDisplay />
        <StreamingLinks />
        <Transmit />
      </div>

      {/* Continental Mode Countdown (when active) */}
      {continentalMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md"
        >
          <div className="bg-background border-2 border-white px-8 py-6 shadow-[20px_20px_0px_rgba(255,255,255,0.1)]">
            <p className="text-white text-md tracking-[0.2em] font-bold uppercase text-center mb-2">
              CONTINENTAL MODE ACTIVE
            </p>
            <div className="h-px bg-white/20 w-full mb-4" />
            <p className="text-white/60 text-xs tracking-wider text-center font-mono">
              OFFICIAL DROP: JANUARY 2026
            </p>
            <p className="text-transmission text-[10px] text-center mt-4 font-mono animate-pulse">
              [ SECURED VIA ON-SET RECORDS ]
            </p>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-dark-grey relative z-10">
        <div className="container-custom text-center">
          <div className="flex justify-center gap-8 items-center mb-6 opacity-30">
            <span className="text-xs font-mono tracking-tighter">ON-SET</span>
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-xs font-mono tracking-tighter">MR.MYSTERY</span>
          </div>
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-4">
            CONTINENTAL (the tape)
          </p>
          <p className="text-white/20 text-[8px] tracking-wider font-mono">
            ALL TRANSMISSIONS ENCRYPTED // ON-SET MEDIA CORP © 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
