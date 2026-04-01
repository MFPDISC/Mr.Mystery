'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function TheVault() {
    const [activeEasterEgg, setActiveEasterEgg] = useState<number | null>(null)

    // Easter egg positions (hidden links)
    const easterEggs = [
        { id: 0, url: 'https://youtube.com/watch?v=unlisted1', label: 'Studio Session #1' },
        { id: 1, url: 'https://youtube.com/watch?v=unlisted2', label: 'Behind the Booth' },
        { id: 2, url: 'https://youtube.com/watch?v=unlisted3', label: 'Late Night Take' },
    ]

    return (
        <section id="vault" className="section-padding bg-dark-grey grain-overlay min-h-screen">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] mb-4">
                        03 // THE VAULT
                    </h2>
                    <p className="text-white/50 text-sm tracking-widest uppercase">
                        Leaked Transmissions
                    </p>
                </motion.div>

                {/* Leaked Folder Aesthetic */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Behind the scenes photos - will be replaced with actual images */}
                    {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
                            className="relative group cursor-pointer"
                            onClick={() => easterEggs[index] && setActiveEasterEgg(index)}
                        >
                            {/* Polaroid-style photo frame */}
                            <div className="bg-white p-4 pb-16 shadow-2xl relative">
                                {/* Photo placeholder - will be replaced with actual images */}
                                <div className="aspect-square bg-grain-grey border border-black/10 grain-overlay flex items-center justify-center">
                                    <span className="text-black/20 text-xs tracking-widest uppercase">
                                        CLASSIFIED_0{item}.jpg
                                    </span>
                                </div>

                                {/* Handwritten caption */}
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <p className="text-black/60 text-sm handwritten">
                                        {item === 1 && 'by the sea sessions'}
                                        {item === 2 && 'late night in the booth'}
                                        {item === 3 && 'continental vibes'}
                                        {item === 4 && 'broadcast ready'}
                                    </p>
                                </div>

                                {/* Easter egg hint on hover */}
                                {easterEggs[index] && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/80 flex items-center justify-center"
                                    >
                                        <div className="text-center">
                                            <ExternalLink className="w-8 h-8 text-transmission mx-auto mb-2" />
                                            <p className="text-transmission text-xs tracking-widest uppercase">
                                                Hidden Link
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Tape strip for polaroid effect */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-white/20 backdrop-blur rotate-0" />
                        </motion.div>
                    ))}
                </div>

                {/* Handwritten Tracklist - Corkboard Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto relative"
                >
                    {/* Corkboard background */}
                    <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 p-8 md:p-12 border-2 border-amber-900/50 relative">
                        {/* Pushpin decorations */}
                        <div className="absolute top-4 left-8 w-3 h-3 rounded-full bg-red-600 shadow-lg" />
                        <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-red-600 shadow-lg" />

                        {/* ON-SET Branding on Corkboard */}
                        <div className="absolute bottom-4 right-8 opacity-40">
                            <span className="text-2xl font-bold font-mono tracking-tighter text-white">ON-SET</span>
                        </div>

                        {/* Note paper */}
                        <div className="bg-yellow-50 p-8 shadow-xl transform -rotate-1 relative overflow-hidden">
                            {/* Suble ON-SET Stamp */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-red-600/20 rounded-full flex items-center justify-center rotate-12">
                                <span className="text-red-600/20 font-bold text-xs">ON-SET</span>
                            </div>

                            <h3 className="text-black text-2xl md:text-3xl mb-6 text-center handwritten">
                                CONTINENTAL (the tape)
                            </h3>

                            <div className="space-y-3 text-black handwritten text-lg">
                                <p>01. CONTINENTAL (INTRO)</p>
                                <p>02. LACK HONESTY FT. B-RAIZ</p>
                                <p>03. DAY-TO-DAY FT. YUNGSMOKE</p>
                                <p>04. LONG SHOT</p>
                                <p>05. BROADCAST FT. ON-SET RADIO</p>
                            </div>

                            <div className="mt-6 pt-4 border-t-2 border-black/20">
                                <p className="text-black/60 text-sm handwritten text-right">
                                    - MR.MYSTERY // ON-SET
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Easter Egg Modal */}
                {activeEasterEgg !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveEasterEgg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="bg-dark-grey border-2 border-transmission p-8 max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-xl tracking-widest uppercase mb-4 text-transmission">
                                [ TRANSMISSION FOUND ]
                            </h3>
                            <p className="text-white/80 mb-6">
                                {easterEggs[activeEasterEgg].label}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={easterEggs[activeEasterEgg].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 command-input text-center py-3 hover:bg-transmission/20 transition-all"
                                >
                                    [ ACCESS ]
                                </a>
                                <button
                                    onClick={() => setActiveEasterEgg(null)}
                                    className="flex-1 border-2 border-white/20 text-white/60 py-3 hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                                >
                                    [ CLOSE ]
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
