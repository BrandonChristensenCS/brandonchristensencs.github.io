'use client';

import { motion } from '@/utils/client/motion';
import Image from 'next/image';

export default function About() {
  // Placeholder skills for demonstration
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'Git', level: 80 },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl h-96 max-w-md mx-auto lg:mx-0">
              <Image
                src="https://source.unsplash.com/random/600x600/?portrait"
                alt="Brandon Christensen"
                fill
                className="object-cover"
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
              Computer Science Student & Software Engineer
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

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
