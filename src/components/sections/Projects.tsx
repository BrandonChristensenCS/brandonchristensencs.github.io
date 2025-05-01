'use client';

import { motion } from '@/utils/client/motion';
import Card from '../ui/Card';

export default function Projects() {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?portfolio',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Hosted on GitHub Pages'],
      githubUrl: 'https://github.com/brandonchristensencs/brandonchristensencs.github.io',
    },
    {
      id: 2,
      title: 'NWS Weather',
      description: 'An interactive Android app & Widget that displays information from the National Weather Service\'s third-party API.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?weather',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'API Integration'],
      githubUrl: 'https://github.com/BrandonChristensenCS/nws-weather',
      liveUrl: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.brandonchristensen.nwsweather',
          label: 'Google Play',
          icon: 'googleplay',
        },
      ],
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A react-native productivity application for managing timesheets and tasks.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?productivity',
      tags: ['React-Native', 'Android', 'iOS'],
      githubUrl: 'https://github.com/brandonchristensencs',
      liveUrl: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.example.taskmanager',
          label: 'Google Play',
          icon: 'googleplay',
        },
        {
          url: 'https://apps.apple.com/app/id1234567890',
          label: 'App Store',
          icon: 'appstore',
        },
      ],
    },
    {
      id: 4,
      title: 'Placeholder Project',
      description: 'A placeholder project description.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?ecommerce',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/brandonchristensencs',
      liveUrl: [
        {
          url: 'https://example.com',
          label: 'Check It Out',
          icon: 'external',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some projects I've worked on. Each one has taught me valuable skills and
            helped me grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex w-full h-full"
            >
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                className="w-full h-full flex flex-col"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
