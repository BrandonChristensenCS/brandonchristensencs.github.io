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
        'Comprehensive expertise in Android development with Kotlin and Java, applying MVVM and MVC patterns for scalable codebases. Proficient in building performant, responsive UIs with Jetpack Compose and XML layouts. Skilled in Android Studio profiling and optimization, dependency injection with Dagger, and full integration of Firebase Crashlytics for real-time stability monitoring. Experience includes leveraging AWS services within mobile applications, cross-platform development with React Native, and automating end-to-end tests using Appium.',
      technologies: [
        'Kotlin',
        'Java',
        'Jetpack Compose',
        'Coroutines',
        'Android SDK',
        'AWS',
        'Play Store',
      ]
    },
    {
      name: 'iOS Development',
      description:
        'Extensive experience in iOS development with a focus on UIKit and Storyboards for interface design, complemented by working knowledge of SwiftUI. Proficient in Xcode tooling, performance profiling, and implementing core iOS frameworks. Skilled in persistent data management with Core Data, app stability monitoring with Firebase Crashlytics, and compliance with Apple\'s Human Interface Guidelines for polished, native user experiences. Experience includes cross-platform development with React Native and full lifecycle deployment through the App Store.',
      technologies: [
        'Swift',
        'Storyboard',
        'UIKit',
        'Xcode',
        'AWS',
        'App Store',
      ]
    },
    {
      name: 'IoT Integration',
      description:
        'Specialized in implementing Bluetooth Low Energy (BLE) communication protocols on both Android and iOS. Experienced in writing robust BLE client logic, handling peripheral interactions, characteristic parsing, GATT service management, and cross-platform solutions. Proficient in executing device firmware updates (DFU), ensuring reliable over-the-air upgrades. Proficient with Nordic Semiconductor\'s SDK and using SEGGER tools for device flashing, debugging, and low-level analysis.',
      technologies: [
        'BLE',
        'DFU',
        'J-Link',
        'Nordic Semiconductor',
        'nRF Connect'
      ]
    },
    {
      name: 'Backend Development',
      description:
        'Extensive experience architecting and deploying scalable, cloud-native backends using AWS Lambda and Laravel. Proficient in designing RESTful APIs, integrating MySQL databases, and leveraging AWS services such as RDS and S3 for robust data management. Skilled in implementing secure authentication, optimizing query performance, and automating deployment pipelines to ensure reliability and maintainability across distributed systems.',
      technologies: [
        'AWS Lambda',
        'Laravel',
        'PHP',
        'MySQL',
        'AWS RDS',
        'S3',
        'REST APIs',
        'Docker',
        'CI/CD',
      ]
    },
    {
      name: 'Web Development',
      description:
        'Proficient in building modern, responsive web applications with React and Next.js, focusing on maintainable architectures and seamless user experiences. Experienced in developing enterprise-grade solutions, including real-time video conferencing leveraging Twilio, and implementing accessible, performant interfaces using Tailwind CSS and TypeScript. Skilled in full-stack development, continuous integration, and optimizing web performance for diverse audiences.',
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'HTML/CSS',
        'Tailwind CSS',
        'REST APIs'
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
              Engineer by day, tea drinker by choice. I got my start in Las Vegas and now call Montana home. I care about making technology easier to use, more reliable, and just a little more enjoyable.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Outside of programming, I&apos;m an avid Dungeons & Dragons player who loves being immersed in collaborative storytelling. Whether it&apos;s exploring a new framework or a new campaign setting, I&apos;m always looking for my next creative challenge.
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
