'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Ticket } from 'lucide-react'

const tourDates = [
  {
    id: 1,
    date: 'Dec 15, 2024',
    venue: 'Madison Square Garden',
    city: 'New York, NY',
    ticketLink: '#',
    status: 'on-sale',
  },
  {
    id: 2,
    date: 'Dec 20, 2024',
    venue: 'The Forum',
    city: 'Los Angeles, CA',
    ticketLink: '#',
    status: 'on-sale',
  },
  {
    id: 3,
    date: 'Dec 28, 2024',
    venue: 'United Center',
    city: 'Chicago, IL',
    ticketLink: '#',
    status: 'sold-out',
  },
  {
    id: 4,
    date: 'Jan 05, 2025',
    venue: 'The O2',
    city: 'London, UK',
    ticketLink: '#',
    status: 'on-sale',
  },
  {
    id: 5,
    date: 'Jan 12, 2025',
    venue: 'Accor Arena',
    city: 'Paris, France',
    ticketLink: '#',
    status: 'on-sale',
  },
]

export default function TourSection() {
  return (
    <section id="tour" className="section-padding bg-zinc-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center">
            TOUR
          </h2>
          <p className="text-center text-gray-400 mb-16 uppercase tracking-widest">
            Upcoming Shows
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {tourDates.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-accent/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={18} className="text-accent" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      {show.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{show.venue}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{show.city}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {show.status === 'sold-out' ? (
                    <span className="px-6 py-3 bg-gray-700 text-gray-300 rounded-full font-semibold uppercase tracking-wider text-sm">
                      Sold Out
                    </span>
                  ) : (
                    <motion.a
                      href={show.ticketLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors"
                    >
                      <Ticket size={18} />
                      Tickets
                    </motion.a>
                  )}
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
            View All Dates
          </motion.a>
        </div>
      </div>
    </section>
  )
}
