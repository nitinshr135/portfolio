'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-3xl font-bold gradient-text mb-4">
              Nitin Sharma
            </div>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Senior Software Developer specializing in Web3, React, and full-stack development. 
              Building innovative solutions that bridge traditional web applications with decentralized technologies.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-6 mb-8"
          >
            <motion.a
              href="https://github.com/nitinshr135"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:nitinshr135@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-sm"
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Experience', href: '#experience' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-dark-700 mb-8"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between text-sm text-dark-400"
          >
            <div className="mb-4 sm:mb-0">
              © {currentYear} Nitin Sharma. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 