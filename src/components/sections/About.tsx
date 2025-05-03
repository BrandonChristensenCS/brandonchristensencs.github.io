'use client';

import { motion, AnimatePresence } from '@/utils/client/motion';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  // Skills categories with descriptions
  const skillCategories = [
    {
      name: 'Android Development',
      description: 'Built native Android applications using Kotlin and Jetpack Compose. Implemented MVVM architecture, Kotlin Coroutines for asynchronous operations, and integrated with various AWS services. Created responsive and interactive UIs with both modern Compose and traditional XML layouts.',
      technologies: ['Java', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Coroutines', 'Android SDK', 'Dagger', 'Android Studio']
    },
    {
      name: 'iOS Development',
      description: 'Developed iOS applications using Swift and SwiftUI. Created intuitive user interfaces with Storyboard and programmatic UI approaches. Implemented core iOS frameworks and followed Apple Human Interface Guidelines for optimal user experience.',
      technologies: ['Swift', 'SwiftUI', 'Storyboard', 'UIKit', 'Core Data', 'Xcode']
    },
    {
      name: 'Web Development',
      description: 'Crafted responsive web applications using modern JavaScript frameworks like React and Next.js. Built backend systems with PHP/Laravel. Applied clean design principles with Tailwind CSS to create beautiful, functional interfaces.',
      technologies: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'PHP', 'Laravel']
    },
    {
      name: 'IoT Devices',
      description: 'Designed and implemented solutions for connected devices, focusing on seamless integration between hardware and software. Worked with various sensors, microcontrollers and network protocols to create smart, responsive systems.',
      technologies: ['Python', 'C++', 'Embedded Systems', 'Bluetooth', 'MQTT']
    }
  ];

  const [activeCategory, setActiveCategory] = useState('Android Development');

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
              I&apos;m an engineer who enjoys building intuitive, well-structured applications that solve real problems. With a strong foundation in computer science and a passion for thoughtful design, I focus on writing clean, maintainable, and accessible code across a range of platforms.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Outside of programming, I&apos;m an avid Dungeons & Dragons player who loves getting immersed in collaborative storytelling. Whether it&apos;s exploring a new framework or a new campaign setting, I&apos;m always looking for my next creative challenge.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Expertise
              </h4>

              {/* Animated skill pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {skillCategories.map((category, idx) => (
                  <motion.button
                    key={category.name}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveCategory(
                      activeCategory === category.name ? '' : category.name
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Animated description box */}
              <AnimatePresence>
                {activeCategory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 mb-4"
                  >
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      {skillCategories.find(c => c.name === activeCategory)?.name}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {skillCategories.find(c => c.name === activeCategory)?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skillCategories
                        .find(c => c.name === activeCategory)
                        ?.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
