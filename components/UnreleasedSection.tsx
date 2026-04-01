'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Lock } from 'lucide-react'

interface Track {
    id: string
    title: string
    duration: string
    file?: string
    isLocked?: boolean
}

export default function UnreleasedSection() {
    const [playingTrackId, setPlayingTrackId] = useState<string | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    // Tracks array - we'll fill the file paths once you drop the MP3s!
    const tracks: Track[] = [
        { id: 'track-01', title: 'SUSPENSION', duration: '3:45', file: '/Mr.Mystery/audio/suspension.mp3' },
    ]

    const togglePlay = (track: Track) => {
        if (track.isLocked) return

        if (playingTrackId === track.id) {
            audioRef.current?.pause()
            setPlayingTrackId(null)
        } else {
            setPlayingTrackId(track.id)
            if (audioRef.current) {
                audioRef.current.src = track.file || ''
                audioRef.current.play().catch(e => console.error("Playback error:", e))
            }
        }
    }

    return (
        <section id="unreleased" className="py-24 bg-black relative border-t border-white/10 overflow-hidden">
            {/* Grain & Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container-custom relative z-10 max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block border border-transmission/50 px-3 py-1 mb-4">
                        <span className="text-transmission text-[10px] md:text-xs tracking-[0.4em] font-mono uppercase">
                            OFFICIAL_VAULT // SECURE_ACCESS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-[0.3em] mb-4">
                        UNRELEASED DEMOS
                    </h2>
                    <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase font-mono">
                        Direct Studio Transmissions // Early Fragments
                    </p>
                </motion.div>

                {/* Track List */}
                <div className="space-y-4">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative overflow-hidden border border-white/10 bg-white/5 p-4 md:p-6 transition-all duration-300 ${
                                track.isLocked ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:bg-white/10'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    {/* Play/Pause/Lock Icon */}
                                    <button 
                                        onClick={() => togglePlay(track)}
                                        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 transition-all ${
                                            track.isLocked ? 'cursor-not-allowed' : 'hover:border-transmission hover:text-transmission'
                                        }`}
                                    >
                                        {track.isLocked ? (
                                            <Lock className="w-4 h-4 md:w-5 md:h-5 opacity-40" />
                                        ) : playingTrackId === track.id ? (
                                            <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                        ) : (
                                            <Play className="w-5 h-5 md:w-6 md:h-6 ml-1 fill-current" />
                                        )}
                                    </button>

                                    {/* Track Info */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[10px] md:text-xs font-mono text-white/30">
                                                {String(idx + 1).padStart(2, '0')} //
                                            </span>
                                            <h3 className="text-sm md:text-lg tracking-[0.1em] font-bold text-white group-hover:translate-x-1 transition-transform">
                                                {track.title}
                                            </h3>
                                        </div>
                                        <p className="text-[9px] md:text-[10px] tracking-widest text-white/40 uppercase font-mono">
                                            {track.isLocked ? 'LOCKED // ENCRYPTION REQUIRED' : 'BROADCAST_READY'}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="text-[10px] md:text-xs font-mono text-white/40">
                                        {track.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Active Animation bar (if playing) */}
                            {playingTrackId === track.id && (
                                <motion.div 
                                    layoutId="playingBar"
                                    className="absolute bottom-0 left-0 h-[1px] bg-transmission"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Hidden Audio Element */}
                <audio 
                    ref={audioRef} 
                    onEnded={() => setPlayingTrackId(null)}
                    className="hidden" 
                />

                <div className="mt-12 text-center">
                    <p className="text-white/20 text-[10px] tracking-widest uppercase font-mono">
                        [ END OF LISTING // MORE FRAGMENTS AVAILABLE SOON ]
                    </p>
                </div>
            </div>
        </section>
    )
}
