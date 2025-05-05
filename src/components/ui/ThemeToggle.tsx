'use client';

import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from './Icons';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevents hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <SunIcon className="w-5 h-5 text-yellow-500" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <MoonIcon className="w-5 h-5 text-indigo-500" />
        </motion.div>
      )}
    </motion.button>
  );
}
