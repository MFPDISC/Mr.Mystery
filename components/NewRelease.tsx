'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, ExternalLink } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'

export default function NewRelease() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                // Ensure audio isn't blocked by browser autoplay policies
                audioRef.current.play().catch(e => console.error("Audio playback prevented:", e))
                trackEvent('song_streams')
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section id="new-release" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 py-24 border-b border-white/10">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img 
                    src="/Mr.Mystery/intention-cover.jpg"
                    alt="INTENTION Cover Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125 mix-blend-screen"
                />
                {/* Fallback Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background z-10" />
                <div className="grain-overlay absolute inset-0 z-20" />
            </div>

            <div className="container-custom max-w-4xl mx-auto relative z-30 flex flex-col items-center w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-transmission rounded-full animate-pulse" />
                        <span className="text-transmission text-sm tracking-[0.3em] uppercase font-mono">
                            INCOMING TRANSMISSION
                        </span>
                        <div className="w-2 h-2 bg-transmission rounded-full animate-pulse" />
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-[0.2em] mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        INTENTION
                    </h2>
                    <p className="text-white/60 text-sm md:text-base tracking-widest uppercase font-mono">
                        MR. MYSTERY // APRIL 03 // 00:03 SAST
                    </p>
                </motion.div>

                {/* Status */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-16 text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-transmission tracking-[0.2em] mb-2 animate-pulse">
                        OUT NOW
                    </h3>
                </motion.div>

                {/* Audio Preview Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-2xl bg-black/40 border border-white/20 backdrop-blur-md p-6 md:p-8 mb-12 relative"
                >
                    {/* Tech details */}
                    <div className="absolute top-0 right-0 p-3 opacity-50 hidden sm:block">
                        <span className="text-[10px] font-mono tracking-widest">
                            FREQ: {isPlaying ? '44.1kHz' : 'OFFLINE'}
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={togglePlay}
                            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full border-2 border-white/50 hover:border-transmission hover:text-transmission flex items-center justify-center transition-all bg-black"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                            ) : (
                                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2 fill-current" />
                            )}
                        </motion.button>
                        
                        <div className="flex-1 w-full flex flex-col justify-center">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs tracking-widest text-white/60">PREVIEW _ TRACK 01</span>
                                <span className="text-xs font-mono text-transmission animate-pulse hidden sm:block">
                                    {isPlaying ? 'LIVE_STREAMING' : 'STANDBY'}
                                </span>
                            </div>
                            
                            {/* Fake Waveform visual */}
                            <div className="h-12 w-full flex items-end gap-1 overflow-hidden">
                                {Array.from({ length: 48 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ 
                                            height: isPlaying ? ['20%', `${Math.random() * 80 + 20}%`, '20%'] : '20%',
                                        }}
                                        transition={{ 
                                            duration: 0.5 + Math.random() * 0.5, 
                                            repeat: isPlaying ? Infinity : 0,
                                            ease: "easeInOut"
                                        }}
                                        className={`flex-1 rounded-t-sm ${isPlaying ? 'bg-transmission' : 'bg-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Audio element hooked up to the local MP3 file */}
                    <audio 
                        ref={audioRef} 
                        src="/Mr.Mystery/intention.mp3" 
                        onEnded={() => setIsPlaying(false)}
                        className="hidden" 
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center gap-6 w-full"
                >
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <a 
                            href="https://distrokid.com/hyperfollow/mrmystery/intention?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid&utm_content=link_in_bio&fbclid=PAdGRleAQ6U_hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae5yO_YX1GrRDY1vyV2P138x_JJ1wOnW0dLjo-jkVZOGgHpltAEoritk0yfFg_aem_taVRHMZTtGKnYyy7ZUNpXw" 
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('stream_now_clicks')}
                            className="group relative w-full flex items-center justify-center gap-3 p-4 border-2 border-white bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-bold tracking-[0.2em]"
                        >
                            <span>STREAM NOW</span>
                            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                        </a>
                        <a href="https://open.spotify.com/artist/2sHBjhLpyKfZrCgRyJCxj2?si=4SmqgkhuTo-IEARgY_ckfw" target="_blank" rel="noopener noreferrer" className="group relative w-full flex items-center justify-center gap-3 p-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-[0.2em]">
                            <span>SPOTIFY</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <a href="https://music.apple.com/za/artist/mr-mystery/1697213875" target="_blank" rel="noopener noreferrer" className="group relative w-full flex items-center justify-center gap-3 p-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-[0.2em]">
                            <span>APPLE MUSIC</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
