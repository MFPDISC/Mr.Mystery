'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface RadioDialNavProps {
    currentSection?: string
}

export default function RadioDialNav({ currentSection = 'tape' }: RadioDialNavProps) {
    const [isHovered, setIsHovered] = useState(false)

    const sections = [
        { id: 'tape', label: '01 // THE TAPE', href: '#tape' },
        { id: 'frequency', label: '02 // THE FREQUENCY', href: '#frequency' },
        { id: 'vault', label: '03 // THE VAULT', href: '#vault' },
        { id: 'product', label: '04 // CONTINENTAL', href: '#product' },
        { id: 'streaming', label: '05 // FREQUENCIES', href: '#streaming' },
        { id: 'transmit', label: '06 // TRANSMIT', href: '#transmit' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-dark-grey/90 backdrop-blur-md border border-white/10 rounded-full p-4 md:p-6">
                {/* Radio Dial Visual */}
                <div className="relative">
                    {/* Dial Center */}
                    <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center mb-6"
                    >
                        <div className="w-1 h-6 bg-white/50 rounded-full" />
                    </motion.div>

                    {/* Navigation Items */}
                    <div className="space-y-3">
                        {sections.map((section, index) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.href)}
                                whileHover={{ x: -5 }}
                                className={`block w-full text-left transition-colors duration-300 ${currentSection === section.id
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white/80'
                                    }`}
                            >
                                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono whitespace-nowrap">
                                    {section.label}
                                </span>

                                {/* Active Indicator */}
                                {currentSection === section.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="w-8 h-px bg-transmission mt-1"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dial Label */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.6 }}
                className="mt-3 text-center"
            >
                <p className="text-white/40 text-[8px] tracking-widest uppercase">
                    BROADCAST
                </p>
            </motion.div>
        </motion.nav>
    )
}
