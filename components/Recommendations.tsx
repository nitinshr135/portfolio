"use client";

import { motion } from "framer-motion";
import { Linkedin, Star, Quote, ExternalLink } from "lucide-react";

const Recommendations = () => {
  const recommendations = [
    {
      name: "Prashant Maurya",
      role: "Co-Founder & CEO",
      company: "Spheron Network",
      text: "I've had the pleasure of working with Nitin for over 4 years at Spheron, where he's been an exceptional Front-End Engineer and an even better teammate. From crafting intuitive, high-performance UIs to solving complex technical challenges, Nitin consistently delivered quality, reliability, and attention to detail. He's been the go-to person for tricky UI problems, a mentor to new engineers, and a driving force behind some of our most impactful product releases. If you're looking for someone who blends deep technical expertise with collaboration and ownership, Nitin is that person. Any team would be lucky to have him.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/techprashantmaurya",
      isFeatured: true,
    },
  ];

  return (
    <section
      id="recommendations"
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recommendations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what colleagues have to say about working with me. Click on
            any recommendation to view their full LinkedIn profile.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden pt-12">
                {recommendation.isFeatured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-blue-500">
                      CEO Recommendation
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-gray-400" />
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed text-lg">
                  "{recommendation.text}"
                </blockquote>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200">
                        {recommendation.name}
                      </h4>
                      <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                        {recommendation.role}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-500">
                        {recommendation.company}
                      </p>
                    </div>

                    <a
                      href={recommendation.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span className="text-base font-medium group-hover/link:underline">
                        View Profile
                      </span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
