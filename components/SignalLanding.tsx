'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SignalLandingProps {
    onTuneIn: () => void
}

export default function SignalLanding({ onTuneIn }: SignalLandingProps) {
    const [audioEnabled, setAudioEnabled] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Create ambient audio element
        if (typeof window !== 'undefined') {
            audioRef.current = new Audio()
            // Using a simple ocean wave sound URL (we'll add actual file later)
            // For now, we'll create the element ready for integration
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const handleTuneIn = () => {
        // Enable audio and trigger transition
        if (audioRef.current && !audioEnabled) {
            audioRef.current.play().catch(e => console.log('Audio play prevented:', e))
            setAudioEnabled(true)
        }

        // Wait for glitch animation then call onTuneIn
        setTimeout(() => {
            onTuneIn()
        }, 300)
    }

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden crt-effect">
            {/* Hero Background Image with Slow Zoom */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/hero-image.jpg"
                        alt="Background Signal"
                        fill
                        className="object-cover opacity-60 grayscale contrast-125"
                        priority
                    />
                </div>
            </motion.div>

            {/* CRT Scanline Effect */}
            <div className="crt-scanline z-10" />

            {/* Grain Overlay */}
            <div className="grain-overlay absolute inset-0 z-10" />

            {/* Flickering Dot - CRT TV warming up */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="relative z-10 mb-8"
            >
                <div className="flickering-dot" />
            </motion.div>

            {/* TUNE IN Prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-20 text-center"
            >
                <button
                    onClick={handleTuneIn}
                    className="group relative cursor-pointer"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/80 hover:text-white transition-colors duration-300"
                    >
                        <span className="text-sm md:text-base tracking-[0.3em] uppercase font-mono block mb-2">
                            [ TUNE IN ]
                        </span>
                        <div className="w-40 h-px bg-white/40 mx-auto group-hover:bg-white transition-colors" />
                    </motion.div>
                </button>
            </motion.div>

            {/* Subtle instruction text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative z-20 text-center mt-6"
            >
                <p className="text-white/30 text-xs tracking-widest uppercase">
                    Click to enter
                </p>
            </motion.div>
        </div>
    )
}
