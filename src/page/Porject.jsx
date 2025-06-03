import React from 'react';

const Project = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://ecommerce-demo.com',
      codeLink: 'https://github.com/username/ecommerce-platform',
      videoDemo: 'https://www.youtube.com/embed/your-video-id-1', // Replace with your video URL
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and contact information.',
      technologies: ['Next.js', 'Tailwind CSS', 'Figma'],
      demoLink: 'https://portfolio-demo.com',
      codeLink: 'https://github.com/username/portfolio',
      videoDemo: 'https://www.youtube.com/embed/your-video-id-2', // Replace with your video URL
    },
    {
      title: 'Task Management App',
      description: 'A task management application with features like task creation, assignment, and progress tracking.',
      technologies: ['Vue.js', 'Firebase', 'GraphQL'],
      demoLink: 'https://taskmanager-demo.com',
      codeLink: 'https://github.com/username/task-management-app',
      videoDemo: 'https://www.youtube.com/embed/your-video-id-3', // Replace with your video URL
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing social media accounts, scheduling posts, and analyzing engagement metrics.',
      technologies: ['Angular', 'Python', 'PostgreSQL'],
      demoLink: 'https://socialdashboard-demo.com',
      codeLink: 'https://github.com/username/social-media-dashboard',
      videoDemo: 'https://www.youtube.com/embed/your-video-id-4', // Replace with your video URL
    },
  ];

  return (
    <div className='container-fluid mx-auto px-5 md:px-0 py-10 pb-30 text-center text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-5 md:px-20 py-10 pb-34 text-center'>
        <h2 className='text-3xl font-bold mb-10'>Projects</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'
            >
              <h3 className='text-xl font-semibold mb-4'>{project.title}</h3>
              <div className='mb-4'>
                <iframe
                  src={project.videoDemo}
                  title={`${project.title} Demo`}
                  className='w-full h-48 rounded-lg'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-center space-x-4'>
                <a 
                  href={project.demoLink} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeLink} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;