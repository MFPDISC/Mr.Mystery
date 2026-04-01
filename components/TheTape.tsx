'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import Image from 'next/image'

export default function TheTape() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setCurrentTrack] = useState(0)

    const tracks = [
        { title: 'CONTINENTAL (INTRO)', duration: '1:45' },
        { title: 'LACK HONESTY FT. B-RAIZ', duration: '3:24' },
        { title: 'DAY-TO-DAY FT. YUNGSMOKE', duration: '4:12' },
        { title: 'LONG SHOT', duration: '3:15' },
        { title: 'BROADCAST FT. ON-SET RADIO', duration: '2:58' },
    ]

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <section id="tape" className="section-padding bg-background grain-overlay min-h-screen flex items-center relative overflow-hidden">
            {/* Header Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-image.jpg"
                    alt="Studio Background"
                    fill
                    className="object-cover opacity-80 contrast-125"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="container-custom w-full relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] mb-4">
                        01 // THE TAPE
                    </h2>
                    <p className="text-white/50 text-sm tracking-widest uppercase">
                        Studio Transmissions
                    </p>
                </motion.div>

                {/* 3D Cassette Tape */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="cassette-tape relative">
                        {/* Cassette Body */}
                        <div className="bg-grain-grey p-8 md:p-12 border-2 border-white/20">
                            {/* Label Area */}
                            <div className="bg-black/40 p-6 mb-8 border border-white/10 relative overflow-hidden">
                                {/* ON-SET Branding Background */}
                                <div className="absolute top-0 right-0 p-2 opacity-20 transform rotate-12">
                                    <span className="text-4xl font-bold font-mono tracking-tighter">ON-SET</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-center mb-2">
                                    MR.MYSTERY
                                </h3>
                                <div className="flex justify-center items-center gap-4">
                                    <span className="text-[10px] border border-transmission/50 px-2 py-0.5 text-transmission font-mono">ON-SET</span>
                                    <p className="text-transmission text-center text-xs tracking-widest uppercase">
                                        CONTINENTAL // THE TAPE
                                    </p>
                                </div>
                            </div>

                            {/* Tape Reels */}
                            <div className="flex justify-between items-center mb-8 px-4 md:px-12">
                                <motion.div
                                    animate={{ rotate: isPlaying ? 360 : 0 }}
                                    transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                                    className="cassette-reel"
                                />
                                <motion.div
                                    animate={{ rotate: isPlaying ? 360 : 0 }}
                                    transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                                    className="cassette-reel"
                                />
                            </div>

                            {/* Tracklist */}
                            <div className="space-y-3 mb-8">
                                {tracks.map((track, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            setCurrentTrack(index)
                                            setIsPlaying(true)
                                        }}
                                        whileHover={{ x: 5 }}
                                        className={`w-full flex justify-between items-center p-3 border border-white/10 transition-all ${currentTrack === index && isPlaying
                                            ? 'bg-transmission/10 border-transmission/50'
                                            : 'hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/40 text-xs font-mono">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm md:text-base tracking-widest uppercase">
                                                {track.title}
                                            </span>
                                        </div>
                                        <span className="text-white/40 text-xs font-mono">{track.duration}</span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Playback Controls */}
                            <div className="flex items-center justify-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full border-2 border-white/30 hover:border-white flex items-center justify-center transition-all"
                                >
                                    {isPlaying ? (
                                        <Pause className="w-6 h-6" fill="white" />
                                    ) : (
                                        <Play className="w-6 h-6 ml-1" fill="white" />
                                    )}
                                </motion.button>
                            </div>
                        </div>

                        {/* Cassette Shadows for 3D effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 pointer-events-none" />
                    </div>
                </motion.div>

                {/* BROADCAST Live Stream Teaser */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 max-w-2xl mx-auto"
                >
                    <div className="border-2 border-transmission/30 p-6 md:p-8 bg-transmission/5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-transmission rounded-full animate-pulse" />
                            <h4 className="text-lg md:text-xl tracking-widest uppercase">
                                LIVE BROADCAST
                            </h4>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                            24/7 transmission of unreleased demos, studio sessions, and late-night frequencies.
                            Tune in to the signal and hear what's coming from the vault.
                        </p>
                        <button className="command-input w-full text-center cursor-pointer hover:bg-transmission/10 transition-all">
                            [ ACCESS LIVE FEED ]
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
