'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const albums = [
  {
    id: 1,
    title: 'Latest Album',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800',
    spotifyLink: '#',
  },
  {
    id: 2,
    title: 'Previous Album',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800',
    spotifyLink: '#',
  },
  {
    id: 3,
    title: 'Earlier Work',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800',
    spotifyLink: '#',
  },
  {
    id: 4,
    title: 'Classic Collection',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
    spotifyLink: '#',
  },
]

export default function MusicSection() {
  return (
    <section id="music" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center">
            MUSIC
          </h2>
          <p className="text-center text-gray-400 mb-16 uppercase tracking-widest">
            Discography
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center"
                  >
                    <Play size={24} className="text-black fill-black ml-1" />
                  </motion.button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{album.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {album.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-white px-12 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            View All Releases
          </motion.a>
        </div>
      </div>
    </section>
  )
}
