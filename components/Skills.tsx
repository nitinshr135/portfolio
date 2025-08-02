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
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
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
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'SSR/SSG', 'Performance Optimization', 'Responsive Design', 'API Integration',
                'Payment Gateways', 'Authentication', 'Security Best Practices', 'Agile Methodologies',
                'Code Review', 'Technical Documentation', 'Mentoring', 'Project Management'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg"
                >
                  <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Programming Languages', value: '6' },
            { label: 'Frameworks & Libraries', value: '15+' },
            { label: 'Tools & Platforms', value: '12+' },
            { label: 'Years of Experience', value: '3+' }
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

export default Skills 