'use client'

import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 tracking-wider">
            ARTIST
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 uppercase tracking-widest">
            New Album Out Now
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-all hover:bg-accent hover:text-white"
            >
              <Play size={20} className="group-hover:animate-pulse" />
              Listen Now
            </motion.button>
            
            <motion.a
              href="#tour"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border-2 border-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              Get Tickets
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#music" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}
