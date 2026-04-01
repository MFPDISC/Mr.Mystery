'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'New Music Video',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800',
    views: '10M',
    link: '#',
  },
  {
    id: 2,
    title: 'Behind The Scenes',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800',
    views: '5.2M',
    link: '#',
  },
  {
    id: 3,
    title: 'Live Performance',
    thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800',
    views: '8.7M',
    link: '#',
  },
  {
    id: 4,
    title: 'Official Video',
    thumbnail: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=800',
    views: '15M',
    link: '#',
  },
]

export default function VideoSection() {
  return (
    <section id="videos" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center">
            VIDEOS
          </h2>
          <p className="text-center text-gray-400 mb-16 uppercase tracking-widest">
            Latest Releases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.views} views</p>
                </div>
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
            Watch More
          </motion.a>
        </div>
      </div>
    </section>
  )
}
