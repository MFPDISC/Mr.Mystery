'use client'

import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Tour T-Shirt',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800',
    link: '#',
  },
  {
    id: 2,
    name: 'Limited Vinyl',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800',
    link: '#',
  },
  {
    id: 3,
    name: 'Hoodie',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800',
    link: '#',
  },
  {
    id: 4,
    name: 'Poster Set',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800',
    link: '#',
  },
]

export default function ShopSection() {
  return (
    <section id="shop" className="section-padding bg-zinc-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center">
            SHOP
          </h2>
          <p className="text-center text-gray-400 mb-16 uppercase tracking-widest">
            Official Merchandise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm"
                  >
                    <ShoppingBag size={18} />
                    Quick View
                  </motion.button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-accent font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-black px-12 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-accent/90 transition-all"
          >
            Visit Store
          </motion.a>
        </div>
      </div>
    </section>
  )
}
