'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-zinc-950 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <Mail size={48} className="mx-auto mb-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            STAY CONNECTED
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Join the mailing list for exclusive updates, behind-the-scenes content,
            and early access to new releases and tour dates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-black font-semibold rounded-full uppercase tracking-wider hover:bg-accent/90 transition-all"
            >
              Subscribe
            </motion.button>
          </form>

          <p className="text-gray-500 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
