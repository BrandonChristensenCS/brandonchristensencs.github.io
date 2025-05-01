'use client';

import { motion } from '@/utils/client/motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Brandon Christensen</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Computer Science student and aspiring software engineer specializing in building exceptional digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background abstract shapes */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10 transform translate-x-1/4 -translate-y-1/4">
        <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20 dark:opacity-10 transform -translate-x-1/4 translate-y-1/4">
        <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-green-300 to-blue-500 blur-3xl"></div>
      </div>
    </section>
  );
}
