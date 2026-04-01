'use client'

import { Instagram, Twitter, Facebook, Youtube, Music } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Music, href: '#', label: 'Spotify' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold tracking-wider mb-4">
              ARTIST
            </h3>
            <p className="text-gray-400">
              The official website. Stay connected for the latest music, tour dates, and exclusive content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#music" className="text-gray-400 hover:text-white transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#tour" className="text-gray-400 hover:text-white transition-colors">
                  Tour Dates
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-400 hover:text-white transition-colors">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Follow
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artist Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
