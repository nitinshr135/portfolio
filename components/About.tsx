'use client'

import { motion } from 'framer-motion'
import { Award, Code, Users, Zap } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Smart India Hackathon Winner',
      description: 'Presented winning project to Hon\'ble Prime Minister Shri Narendra Modi',
      year: '2019'
    },
    {
      icon: Code,
      title: '50+ Technical Articles',
      description: 'Published on GeeksforGeeks covering Java and JavaScript',
      year: '2020-2023'
    },
    {
      icon: Users,
      title: '30K+ Users Supported',
      description: 'Scaled Spheron\'s platform to serve thousands of users',
      year: '2021-Present'
    },
    {
      icon: Zap,
      title: '40% Performance Improvement',
      description: 'Enhanced UI performance through optimized rendering',
      year: '2021-Present'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A passionate Senior Software Developer with expertise in Web3, React, and full-stack development. 
            Currently leading frontend development at Spheron, building scalable applications that serve thousands of users.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Background & Education
            </h3>
            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="font-semibold text-lg mb-2 text-dark-800 dark:text-white">
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-dark-700 dark:text-dark-200">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">
                      Jalpaiguri Government Engineering College • GPA: 8.31 • 2016-2020
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-700 dark:text-dark-200">
                      12th Standard
                    </p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">
                      Central Board of Secondary Education • 83.4% • 2015
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-700 dark:text-dark-200">
                      10th Standard
                    </p>
                    <p className="text-sm text-dark-600 dark:text-dark-300">
                      Central Board of Secondary Education • 10 CGPA • 2013
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-semibold text-lg mb-2 text-dark-800 dark:text-white">
                  Current Role
                </h4>
                <p className="text-dark-600 dark:text-dark-300 mb-3">
                  <span className="font-medium text-primary-600">Senior Software Developer</span> at Spheron
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Leading frontend development for a Web3 platform serving 30K+ users with 1.1K+ monthly transactions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Key Achievements
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-dark-800 dark:text-white">
                          {achievement.title}
                        </h4>
                        <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 px-2 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-dark-600 dark:text-dark-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-dark-800 dark:text-white">
              My Mission
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              To build innovative, scalable, and user-centric applications that leverage cutting-edge technologies. 
              I'm passionate about Web3, blockchain integration, and creating seamless user experiences that bridge 
              the gap between traditional web applications and decentralized technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 