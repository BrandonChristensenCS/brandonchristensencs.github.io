'use client';

import { motion, AnimatePresence } from '@/utils/client/motion';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  // Skills categories with descriptions
  const skillCategories = [
    {
      name: 'Android Development',
      description:
        'Developed Android apps using both Kotlin and Java, leveraging MVVM and MVC patterns. Deep experience with the Android SDK, Dagger for dependency injection, and Firebase (Crashlytics) for analytics and stability. Integrated AWS services and built responsive UIs with Jetpack Compose and XML layouts.',
      technologies: [
        'Kotlin',
        'Java',
        'MVVM',
        'MVC',
        'Android SDK',
        'Dagger',
        'Firebase',
        'AWS',
        'Jetpack Compose',
        'Android Studio'
      ]
    },
    {
      name: 'iOS Development',
      description:
        'Built iOS applications primarily using Storyboard (UIKit) for UI, with additional experience in SwiftUI. Implemented core iOS frameworks, managed data with Core Data, and followed Apple’s Human Interface Guidelines for polished user experiences.',
      technologies: [
        'Swift',
        'Storyboard',
        'UIKit',
        'SwiftUI',
        'Core Data',
        'Xcode'
      ]
    },
    {
      name: 'IoT Integration',
      description:
        'Specialty in implementing Bluetooth Low Energy (BLE) protocols and device communication on Android and iOS. Experienced with device firmware updates (DFU) and various BLE services.',
      technologies: [
        'Bluetooth LE',
        'DFU',
        'J-Link',
        'Nordic Semiconductor',
        'nRF Connect'
      ]
    },
    {
      name: 'Backend Development',
      description:
        'Designed and implemented RESTful APIs using AWS Lambda and Laravel, with experience in MySQL. Built scalable, cloud-based backends and integrated various AWS services to support robust application architectures.',
      technologies: [
        'Laravel',
        'PHP',
        'AWS Lambda',
        'MySQL',
        'AWS RDS',
        'S3',
        'REST APIs'
      ]
    },
    {
      name: 'Web Development',
      description:
        'Developed and maintained this portfolio site and enterprise-grade React/Next.js web apps, including video conferencing solutions with Twilio. Focused on building responsive, accessible interfaces using Tailwind CSS and modern JavaScript/TypeScript.',
      technologies: [
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Twilio',
        'Tailwind CSS',
        'HTML/CSS'
      ]
    },
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
