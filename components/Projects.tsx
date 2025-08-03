'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'SAHAYAK',
      subtitle: 'Smart India Hackathon 2019 Winning Project',
      description: 'A full-stack mobile app to connect NGOs, NRCs, and check-up camps, enabling real-time referrals of malnourished children and centralized tracking of their health data. This was a closed-source project submitted to the Government of India as part of the Smart India Hackathon.',
      highlights: [
        'Presented to Hon\'ble Prime Minister Shri Narendra Modi as team leader',
        'Real-time health data tracking and referral system',
        'Mobile-first design for field workers',
        'Centralized database for health monitoring'
      ],
      techStack: ['React Native', 'Firebase', 'Node.js', 'Google Maps API', 'MongoDB', 'ImageJ'],
      links: {
        github: null,
        live: null
      },
      badge: 'Winner',
      badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    },
    {
      title: 'ExamStudio',
      subtitle: 'Appwrite Hackathon Project',
      description: 'An end-to-end exam platform using Next.js, TypeScript, and Appwrite. The application allows users to create custom exams and securely share them with others for participation.',
      highlights: [
        'Designed to bridge the gap between exam creation and distribution',
        'Maintains confidentiality and integrity of assessments',
        'Secure exam sharing and participation system',
        'Real-time exam management'
      ],
      techStack: ['Next.js', 'TypeScript', 'Appwrite', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/nitinshr135/exam-studio',
        live: 'https://exam-studio.vercel.app'
      },
      badge: 'Live',
      badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    },
    {
      title: 'Spheron Platform',
      subtitle: 'Web3 Infrastructure Platform',
      description: 'Leading frontend development for Spheron\'s core platform, supporting 50K+ active users with high performance and modularity.',
      highlights: [
        '50K+ active active users supported',
        '1.1K+ monthly transactions processed',
        '40% UI performance improvement',
        'Multi-chain Web3 integration'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Web3.js', 'Ethers.js', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      links: {
        github: null,
        live: 'https://console.spheron.network'
      },
      badge: 'Production',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      title: 'Web3 SDK',
      subtitle: 'Open Source Developer Tools',
      description: 'Built and maintained an open-source SDK with 1K+ weekly downloads, abstracting complex contract interactions into plug-and-play utilities for developers.',
      highlights: [
        '1K+ weekly downloads',
        '10+ NPM packages published',
        'Multi-chain support (Ethereum, Polygon, Solana, Arbitrum)',
        'Wallet integration (MetaMask, Phantom, WalletConnect)'
      ],
      techStack: ['TypeScript', 'Web3.js', 'Ethers.js', 'NPM', 'GitHub', 'Documentation'],
      links: {
        github: null,
        live: 'https://www.npmjs.com/package/@spheron/protocol-sdk'
      },
      badge: 'Open Source',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A showcase of my most impactful projects, from hackathon winners to production applications serving thousands of users.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-800 dark:text-white mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-800 dark:text-white mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Globe size={16} />
                    {project.title === 'Web3 SDK' ? 'View Package' : 'Live Demo'}
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Technical Content Writing',
                  description: '50+ articles on GeeksforGeeks covering Java and JavaScript',
                  link: 'https://geeksforgeeks.org/nitinsharma/contributions'
                },
                {
                  title: 'NPM Packages',
                  description: '10+ internal and public-facing packages for UI components and Web3 utilities',
                  link: 'https://www.npmjs.com/~nitinshr135'
                },
                {
                  title: 'Decentralized Storage',
                  description: 'IPFS, Arweave, and Filecoin integrations for 99.99%+ data persistence',
                  link: null
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                >
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-dark-600 dark:text-dark-300 mb-3">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      View Details →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 