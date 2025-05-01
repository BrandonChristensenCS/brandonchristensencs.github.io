'use client';

import React from 'react';
import { motion } from '@/utils/client/motion';
import Image from 'next/image';
import { ExternalLinkIcon, GitHubIcon, GooglePlayIcon, AppleAppStoreIcon } from './Icons';

interface LiveUrl {
  url: string;
  label: string;
  icon?: 'external' | 'googleplay' | 'appstore';
}

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: LiveUrl[];
  githubUrl?: string;
}

export default function Card({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
  githubUrl,
  className = '',
}: CardProps & { className?: string }) {
  // Helper to render store button
  const renderStoreButton = (icon: string, url: string, label: string) => {
    const baseBtn =
      "flex items-center justify-center h-11 px-4 rounded-md shadow border text-sm font-medium transition-colors" +
      " bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600 min-w-0 flex-shrink w-full sm:w-auto";
    if (icon === 'googleplay') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={baseBtn}
          aria-label="Get it on Google Play"
        >
          <span className="mr-2 flex items-center">
            <GooglePlayIcon className="w-5 h-5" />
          </span>
          <span className="flex flex-col items-center leading-tight truncate w-full">
            <span className="text-[10px] truncate w-full whitespace-nowrap text-center">GET IT ON</span>
            <span className="-mt-0.5 font-sans text-base font-semibold truncate w-full whitespace-nowrap sm:text-base text-xs text-center">Google Play</span>
          </span>
        </a>
      );
    }
    if (icon === 'appstore') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={baseBtn}
          aria-label="Download on the App Store"
        >
          <span className="mr-2 flex items-center">
            <AppleAppStoreIcon className="w-5 h-5" />
          </span>
          <span className="flex flex-col items-center leading-tight truncate w-full">
            <span className="text-[10px] truncate w-full whitespace-nowrap text-center">Download on the</span>
            <span className="-mt-0.5 font-sans text-base font-semibold truncate w-full whitespace-nowrap sm:text-base text-xs text-center">App Store</span>
          </span>
        </a>
      );
    }
    return null;
  };

  // Filter store links
  const storeLinks = (liveUrl || []).filter(l => l.icon === 'googleplay' || l.icon === 'appstore');
  const externalLinks = (liveUrl || []).filter(l => l.icon === 'external');

  // Collect all buttons to render
  const buttons: React.ReactNode[] = [];
  if (githubUrl) {
    buttons.push(
      <a
        key="github"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center h-11 px-4 text-sm font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors min-w-0 flex-shrink w-full sm:w-auto justify-center shadow border border-gray-300 dark:border-gray-600"
        aria-label="View source code on GitHub"
      >
        <GitHubIcon className="w-6 h-6 mr-2" />
        <span className="truncate w-full whitespace-nowrap text-center">Source Code</span>
      </a>
    );
  }
  storeLinks.forEach((link, idx) => {
    buttons.push(
      renderStoreButton(link.icon!, link.url, link.label) &&
      React.cloneElement(
        renderStoreButton(link.icon!, link.url, link.label) as React.ReactElement,
        { key: `${link.icon}-${link.url}` }
      )
    );
  });
  if (storeLinks.length === 0 && externalLinks.length === 1) {
    buttons.push(
      <a
        key="external"
        href={externalLinks[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center h-11 px-4 text-sm font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors min-w-0 flex-shrink w-full sm:w-auto justify-center shadow border border-gray-300 dark:border-gray-600"
        aria-label={externalLinks[0].label}
      >
        <ExternalLinkIcon className="w-5 h-5 mr-2" />
        <span className="truncate w-full whitespace-nowrap text-center">{externalLinks[0].label}</span>
      </a>
    );
  }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col ${className}`}
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

      <div className="p-5 flex flex-col flex-1">
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

        <div className="flex flex-wrap gap-4 mt-auto items-center w-full sm:flex-nowrap sm:gap-4 sm:justify-between">
          {buttons.map((btn, idx) => (
            React.isValidElement(btn)
              ? React.cloneElement(btn, {
                  className: `${btn.props.className ?? ''} min-w-0 flex-1 w-full sm:w-auto`,
                  key: btn.key ?? idx,
                })
              : btn
          ))}
        </div>
      </div>
    </motion.div>
  );
}
