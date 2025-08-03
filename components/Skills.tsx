'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Wrench, Globe, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'PLSQL', level: 80 }
      ]
    },
    {
      icon: Globe,
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'SASS', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Databases', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Zap,
      title: 'Web3 & Blockchain',
      skills: [
        { name: 'Web3.js', level: 90 },
        { name: 'Ethers.js', level: 85 },
        { name: 'Smart Contracts', level: 80 },
        { name: 'MetaMask Integration', level: 90 },
        { name: 'IPFS', level: 85 },
        { name: 'Arweave', level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Atlassian Suite', level: 85 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      icon: Palette,
      title: 'State Management & Testing',
      skills: [
        { name: 'Redux (Saga/Thunk)', level: 90 },
        { name: 'Storybook', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Testing Library', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black border border-gray-700 dark:border-gray-600 rounded-2xl shadow-xl space-y-6 relative overflow-hidden"
            >
              {/* Gradient overlay for modern effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg shadow-md hover:shadow-lg hover:border-gray-500 transition-all duration-200 hover:-translate-y-1 cursor-pointer backdrop-blur-sm">
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

                {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Additional Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized knowledge and best practices in modern web development
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'SSR/SSG', 'Performance Optimization', 'Responsive Design', 'API Integration',
              'Payment Gateways', 'Authentication', 'Security Best Practices', 'Agile Methodologies',
              'Code Review', 'Technical Documentation', 'Mentoring', 'Project Management'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Languages', value: '6' },
              { label: 'Frameworks', value: '15+' },
              { label: 'Tools', value: '12+' },
              { label: 'Experience', value: '5+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 