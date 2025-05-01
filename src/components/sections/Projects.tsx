'use client';

import { motion } from '@/utils/client/motion';
import Card from '../ui/Card';

export default function Projects() {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment processing.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?ecommerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/brandonchristensencs',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, featuring drag-and-drop UI, filtering, and real-time updates.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?productivity',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com/brandonchristensencs',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current and forecast weather data using a third-party API.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?weather',
      tags: ['JavaScript', 'API Integration', 'CSS3', 'Responsive Design'],
      githubUrl: 'https://github.com/brandonchristensencs',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
      imageSrc: 'https://source.unsplash.com/random/800x600/?portfolio',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/brandonchristensencs/brandonchristensencs.github.io',
      liveUrl: '#',
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
              className="flex"
            >
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
