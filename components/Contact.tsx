'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nitinshr135@gmail.com',
      link: 'mailto:nitinshr135@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9851058544',
      link: 'tel:+919851058544'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/nitinshr135',
      link: 'https://github.com/nitinshr135'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dubai, UAE (Remote)',
      link: null
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-8">
              Let's Connect
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark-600 dark:text-dark-300">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-800 dark:text-white font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 card p-6"
            >
              <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                Current Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-dark-600 dark:text-dark-300">
                    Available for new opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-dark-600 dark:text-dark-300">
                    Open to remote work
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-dark-600 dark:text-dark-300">
                    Interested in Web3 & AI projects
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-8">
              Send a Message
            </h3>
            <div className="card p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you. Let's create something incredible together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:nitinshr135@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Start a Conversation
              </motion.a>
              <motion.a
                href="https://github.com/nitinshr135"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Github size={20} />
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 