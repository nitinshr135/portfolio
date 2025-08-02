'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer - UI',
      company: 'Spheron',
      location: 'Dubai, UAE (Remote)',
      period: 'Aug 2021 – Present',
      description: 'Leading frontend development for a Web3 platform with 30K+ users',
      achievements: [
        'Architected and scaled Spheron\'s core frontend platform, supporting 30K+ users with high performance and modularity',
        'Improved UI performance by 40% through optimized rendering, efficient DOM manipulation, and advanced TypeScript patterns',
        'Integrated Web3 payments with MetaMask, Phantom, and WalletConnect across Ethereum, Polygon, Solana & Arbitrum',
        'Built and maintained an open-source SDK with 1K+ weekly downloads, abstracting complex contract interactions',
        'Published and versioned 10+ internal and public-facing NPM packages, streamlining UI components and Web3 utilities',
        'Implemented smart contract logic to read/write data and reflect on-chain states in real-time',
        'Led decentralized storage integrations with IPFS, Arweave, and Filecoin to ensure 99.99%+ data persistence',
        'Streamlined CI/CD pipelines, testing frameworks, and code reviews, reducing bugs in production by over 60%'
      ],
      techStack: ['NextJs', 'React', 'Redux Thunk/Saga', 'TypeScript', 'Tailwind', 'Node.js', 'SASS', 'MongoDB', 'Web3 APIs', 'Stripe', 'Privy', 'Git', 'Figma', 'Docker', 'IPFS', 'Arweave', 'Atlassian Suite', 'CI/CD']
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant',
      location: 'Chennai, India',
      period: 'Aug 2020 – Aug 2021',
      description: 'Provided technical support and enhancements for enterprise platforms',
      achievements: [
        'Collaborated with clients to identify, troubleshoot, and resolve real-time technical issues',
        'Provided technical enhancements and support for enterprise platforms including ServiceNow and Oracle E-Business Suite',
        'Utilized HTML, React, JavaScript, CSS, SQL/PLSQL for configuration and data handling',
        'Maintained clear documentation of incidents, resolutions, and SOPs to support efficient issue handling'
      ],
      techStack: ['HTML', 'React', 'JavaScript', 'CSS', 'SQL', 'PLSQL', 'ServiceNow', 'Oracle E-Business Suite']
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            My professional journey in software development, from enterprise support to leading Web3 platform development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                      {experience.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-dark-600 dark:text-dark-300 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-primary-600">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className="text-lg text-dark-700 dark:text-dark-200 mb-6">
                    {experience.description}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-600 dark:text-dark-300">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Years of Experience', value: '3+' },
            { label: 'Companies Worked', value: '2' },
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Technologies Used', value: '20+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-dark-600 dark:text-dark-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 