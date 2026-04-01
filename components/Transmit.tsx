'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { submitToGHL, triggerSMSSequence } from '@/utils/ghl-integration'

export default function Transmit() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Submit to GHL
        const result = await submitToGHL(formData)

        if (result.success) {
            // Trigger SMS sequence if phone number provided
            if (formData.phone) {
                await triggerSMSSequence(formData.email)
            }

            setIsSubmitted(true)
            console.log('Transmission Code:', result.transmissionCode)

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({ email: '', phone: '' })
            }, 5000)
        } else {
            console.error('Submission failed:', result.message)
            alert('Transmission failed. Please try again.')
        }

        setIsSubmitting(false)
    }

    return (
        <section id="transmit" className="section-padding bg-background grain-overlay min-h-screen flex items-center">
            <div className="container-custom w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] mb-4">
                        04 // TRANSMIT
                    </h2>
                    <p className="text-white/50 text-sm tracking-widest uppercase">
                        Command Center // Direct Line
                    </p>
                </motion.div>

                {/* Command Center Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    {!isSubmitted ? (
                        <div className="border-2 border-transmission/50 p-8 md:p-12 bg-transmission/5 relative">
                            {/* Grid background effect */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }}
                            />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <div className="w-2 h-2 bg-transmission rounded-full animate-pulse" />
                                        <h3 className="text-2xl md:text-3xl tracking-[0.3em] uppercase">
                                            [ ENTER COORDINATES ]
                                        </h3>
                                        <div className="w-2 h-2 bg-transmission rounded-full animate-pulse" />
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Receive late night transmissions. Unreleased cuts. Studio secrets.
                                        The frequency is open to those who tune in.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-transmission text-xs tracking-widest uppercase mb-2">
                                            Email Signal
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="YOUR@EMAIL.COM"
                                            className="command-input w-full"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label className="block text-transmission text-xs tracking-widest uppercase mb-2">
                                            Phone Frequency (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+1 (XXX) XXX-XXXX"
                                            className="command-input w-full"
                                        />
                                        <p className="text-white/40 text-xs mt-2 tracking-wider">
                                            For SMS transmissions and direct broadcasts
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className="w-full command-input flex items-center justify-center gap-3 py-6 cursor-pointer hover:bg-transmission/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-transmission border-t-transparent rounded-full animate-spin" />
                                                <span>ESTABLISHING CONNECTION...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>[ TRANSMIT COORDINATES ]</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                {/* Privacy Note */}
                                <div className="mt-6 pt-6 border-t border-transmission/20">
                                    <p className="text-white/30 text-xs text-center tracking-wider">
                                        Your signal is encrypted. We never share coordinates.
                                        Unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Success Message - Coded Transmission
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="border-2 border-transmission p-8 md:p-12 bg-transmission/10"
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-6"
                                >
                                    <div className="w-16 h-16 bg-transmission rounded-full mx-auto flex items-center justify-center">
                                        <div className="w-8 h-8 border-4 border-black rounded-full" />
                                    </div>
                                </motion.div>

                                <h3 className="text-2xl md:text-3xl tracking-[0.3em] uppercase mb-4 text-transmission">
                                    [ SIGNAL RECEIVED ]
                                </h3>

                                <div className="bg-black/50 p-6 mb-6 font-mono text-transmission text-xs md:text-sm">
                                    <p className="mb-2">TRANSMISSION CODE: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                                    <p className="mb-2">FREQUENCY: LOCKED</p>
                                    <p className="mb-2">STATUS: ACTIVE</p>
                                    <p className="text-transmission/60 mt-4">
                                        Check your inbox for the first broadcast.
                                        Late night transmissions incoming...
                                    </p>
                                </div>

                                <p className="text-white/60 text-sm tracking-wider">
                                    Welcome to the BROADCAST.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* GHL Integration Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 max-w-xl mx-auto"
                >
                    <div className="border border-white/10 p-6 bg-dark-grey/50">
                        <h4 className="text-white/70 text-sm tracking-widest uppercase mb-3">
                            What You'll Receive:
                        </h4>
                        <ul className="text-white/50 text-sm space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-transmission mt-1">→</span>
                                <span>Unreleased music and demo snippets</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-transmission mt-1">→</span>
                                <span>Behind-the-scenes studio footage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-transmission mt-1">→</span>
                                <span>Early access to new releases</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-transmission mt-1">→</span>
                                <span>Exclusive broadcast transmissions</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
