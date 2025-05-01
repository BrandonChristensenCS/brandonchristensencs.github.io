'use client';

import { motion } from '@/utils/client/motion';
import Image from 'next/image';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function Card({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
  githubUrl,
}: CardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="View source code on GitHub"
            >
              <GitHubIcon className="w-4 h-4 mr-2" />
              See Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              aria-label="Visit live site"
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Check It Out
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
