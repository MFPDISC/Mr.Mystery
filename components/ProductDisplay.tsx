'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductDisplay() {
    return (
        <section id="product" className="py-24 bg-black relative border-t border-white/10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="container-custom mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-md aspect-square group"
                    >
                        <div className="absolute inset-0 border border-white/10 bg-white/5 transform rotate-3 group-hover:rotate-6 transition-transform duration-500 will-change-transform" />
                        <div className="absolute inset-0 border border-white/10 bg-black translate-x-3 translate-y-3" />

                        <div className="relative h-full w-full border border-white/20 bg-black p-2 overflow-hidden">
                            <Image
                                src="/continental-cover.png"
                                alt="CONTINENTAL CD Cover"
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-red-500 text-xs tracking-widest uppercase font-mono">Restocked</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-2">CONTINENTAL</h2>
                            <p className="text-white/50 text-sm tracking-widest uppercase mb-6">Physical Compact Disc</p>
                        </div>

                        <div className="space-y-6 max-w-sm">
                            <p className="text-white/70 text-sm leading-relaxed font-light">
                                The debut project from Mr. Mystery. Includes "Lack Honesty", "Day-to-Day", and exclusive bonus tracks not available on streaming.
                            </p>

                            <ul className="text-xs text-white/40 font-mono space-y-2 text-left border-l border-white/10 pl-4 py-2">
                                <li>// LIMITED PRESSING</li>
                                <li>// INCLUDES HIGH-RES COVER ART</li>
                                <li>// ENCRYPTED NOTE INSIDE</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="text-3xl font-mono text-white">$19.99</div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white text-black py-4 px-8 text-sm tracking-[0.3em] font-bold uppercase hover:bg-gray-200 transition-colors"
                                onClick={() => alert('Checkout implementation required')}
                            >
                                Buy Now
                            </motion.button>

                            <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
                                Worldwide Shipping Available
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
