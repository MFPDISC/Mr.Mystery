'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
              ABOUT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000"
                  alt="Artist"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-display font-bold">
                The Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <div className="pt-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-display font-bold text-accent mb-2">
                      50M+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Streams
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-accent mb-2">
                      100+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Shows
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-accent mb-2">
                      10
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Awards
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
