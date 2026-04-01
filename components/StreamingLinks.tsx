'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Music, Disc, Radio, Youtube } from 'lucide-react'

export default function StreamingLinks() {
    const links = [
        {
            name: 'SPOTIFY',
            icon: Disc,
            url: '#',
            color: 'hover:text-[#1DB954]',
            description: 'Latest Releases'
        },
        {
            name: 'APPLE MUSIC',
            icon: Music,
            url: '#',
            color: 'hover:text-[#FA243C]',
            description: 'High Fidelity'
        },
        {
            name: 'SOUNDCLOUD',
            icon: Radio,
            url: '#',
            color: 'hover:text-[#FF5500]',
            description: 'Underground Cuts'
        },
        {
            name: 'YOUTUBE',
            icon: Youtube,
            url: '#',
            color: 'hover:text-[#FF0000]',
            description: 'Visuals & Vlogs'
        }
    ]

    return (
        <section id="streaming" className="py-24 bg-dark-grey border-t border-white/10 relative overflow-hidden">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container-custom mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] mb-4">
                        FREQUENCIES
                    </h2>
                    <p className="text-white/50 text-sm tracking-widest uppercase">
                        Listen Everywhere
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto grid gap-4">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex items-center justify-between p-6 border border-white/10 bg-black/40 hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-6">
                                <div className={`p-4 border border-white/10 bg-white/5 group-hover:border-white/30 transition-colors ${link.color}`}>
                                    <link.icon className="w-6 h-6 transition-colors" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl tracking-[0.2em] font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                                        {link.name}
                                    </h3>
                                    <p className="text-xs text-white/40 font-mono tracking-wider uppercase">
                                        {link.description}
                                    </p>
                                </div>
                            </div>

                            <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />

                            {/* Hover corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/50 transition-all duration-300" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/50 transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
