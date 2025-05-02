'use client';

import { motion } from '@/utils/client/motion';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY * 0.4}px`, // Parallax effect
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 -z-10" />
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
            Software engineer specializing in building exceptional digital experiences.
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
          </motion.div>
        </div>
      </div>

      {/* Attribution for background image */}
      <div className="absolute bottom-2 right-4 text-xs text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-black/40 px-2 py-1 rounded z-10">
        Photo by <a href="https://unsplash.com/@tonypepe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tony Pepe</a> on <a href="https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-6Gkj0zb2JXI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </section>
  );
}
