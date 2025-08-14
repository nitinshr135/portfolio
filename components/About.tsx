"use client";

import { motion } from "framer-motion";
import { Award, Code, Users, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Smart India Hackathon Winner",
      description:
        "Presented winning project to Hon'ble Prime Minister Shri Narendra Modi",
      year: "2019",
    },
    {
      icon: Code,
      title: "50+ Technical Articles",
      description: "Published on GeeksforGeeks covering Java and JavaScript",
      year: "2020-2023",
    },
    {
      icon: Zap,
      title: "40% Performance Improvement",
      description: "Enhanced UI performance through optimized rendering",
      year: "2021-Present",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-black">
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Senior Software Developer with expertise in Web3,
            NextJs,React, Typescript and full-stack development. Currently
            leading frontend development at Spheron, building scalable
            applications that serve thousands of users.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Background & Education
            </h3>
            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Jalpaiguri Government Engineering College • GPA: 8.31 •
                      2016-2020
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      12th Standard
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Central Board of Secondary Education • 83.4% • 2015
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      10th Standard
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Central Board of Secondary Education • 10 CGPA • 2013
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  Current Role
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Senior Software Developer
                  </span>{" "}
                  at Spheron
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Leading frontend development for a Web3 platform serving 50K+
                  active users with 1.1K+ monthly transactions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
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
                  className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">
                          {achievement.title}
                        </h4>
                        <span className="text-xs bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 px-2 py-1 rounded-full border border-gray-600">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
