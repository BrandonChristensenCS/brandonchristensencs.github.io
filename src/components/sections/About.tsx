'use client';

import { motion } from '@/utils/client/motion';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  // Skills data organized by category with years of experience
  const skillsByCategory = {
    'Programming Languages': [
      { name: 'Java', years: 2 },
      { name: 'Kotlin', years: 2 },
      { name: 'Swift', years: 1 },
      { name: 'Python', years: 2 },
      { name: 'JavaScript', years: 1 },
      { name: 'React', years: 1 },
      { name: 'Next.js', years: 1 },
      { name: 'HTML', years: 1 },
      { name: 'CSS', years: 1 },
      { name: 'Tailwind CSS', years: 1 },
      { name: 'C++', years: 1 },
      { name: 'PHP', years: 1 },
      { name: 'Laravel', years: 1 },
    ],
    'Mobile Development': [
      { name: 'Jetpack Compose', years: 2 },
      { name: 'Kotlin Coroutines', years: 1.5 },
      { name: 'XML Layouts', years: 2 },
      { name: 'Amazon Web Services', years: 2 },
      { name: 'Android SDK', years: 1 },
      { name: 'MVVM', years: 1 },
      { name: 'React Native', years: 1 },
      { name: 'Firebase', years: 1 },
      { name: 'Storyboard', years: 1 },
      { name: 'SwiftUI', years: 1 },
      { name: 'Dagger', years: 1 },
      { name: 'ADB', years: 1 },
      { name: 'Android Studio', years: 1 },

    ],
    'Other Technologies': [
      { name: 'Git', years: 2 },
      { name: 'GitFlow', years: 2 },
      { name: 'GitHub', years: 1 },
      { name: 'IntelliJ IDEA', years: 1 },
      { name: 'Microsoft VS Code', years: 1 },
      { name: 'Adobe XD', years: 1 },
      { name: 'Adobe Illustrator', years: 1 },
      { name: '', years: 1 },
      { name: '', years: 1 },
      { name: '', years: 1 },
      { name: '', years: 1 },
      { name: '', years: 1 },
      { name: '', years: 1 },
    ],
  };
  const categories = Object.keys(skillsByCategory);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl h-96 max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/pfp.png"
                alt="Brandon Christensen"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Software Engineer
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate developer focused on creating clean, user-friendly applications.
              With a strong foundation in computer science principles and modern development
              practices, I enjoy solving complex problems and bringing ideas to life through code.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or expanding my knowledge through continuous learning.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h4>

              {/* Tabs for skill categories */}
              <div className="flex space-x-4 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${activeTab === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {skillsByCategory[activeTab].map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="ml-2 text-sm text-gray-900 dark:text-white">
                      {skill.years} yrs
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
