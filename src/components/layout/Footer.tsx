'use client';

import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Brandon Christensen. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <SocialLink
              href="https://github.com/brandonchristensencs"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-6 h-6" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/brandon-christensen-cs/"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-6 h-6" />
            </SocialLink>
            <SocialLink
              href="mailto:brandon.christensen.cs@gmail.com"
              aria-label="Email Brandon"
            >
              <EmailIcon className="w-6 h-6" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      {...(href && href.startsWith('mailto:')
        ? {}
        : { target: '_blank', rel: 'noopener noreferrer' })}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      {...props}
    >
      {children}
    </a>
  );
}
