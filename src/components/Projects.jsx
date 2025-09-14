import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ruang Suara',
    description: 'Platform aspirasi masyarakat yang memberikan kebebasan untuk menyampaikan pendapat secara terbuka maupun anonim.',
    demoLink: 'https://ruangsuara.netlify.app/',
    image: '/asset/ruang suara.png',
    year: '2025',
    tech: ['React', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'NutriJel',
    description: 'Platform yang membantu kamu memahami informasi nutrisi secara sederhana dan praktis.',
    demoLink: 'https://nutrijel.netlify.app/home',
    image: '/asset/Nutrijel.png',
    year: '2025',
    tech: ['React', 'Tailwind CSS', 'Nutritionix API']
  },
  {
    title: 'Toyota Indonesia',
    description: 'Platform resmi yang memperkenalkan sejarah perusahaan, berbagai model kendaraan, dan teknologi otomotif mutakhir.',
    demoLink: 'https://khaa-toyotahtml.netlify.app/',
    image: '/asset/Toyota.png',
    year: '2025',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  },
  {
    title: 'Notes App',
    description: 'Aplikasi sederhana untuk menulis, melihat, dan mengarsipkan catatan secara langsung di halaman web.',
    demoLink: 'https://apiwebkhaa.netlify.app/',
    image: '/asset/Notes App.png',
    year: '2025',
    tech: ['React', 'Context API', 'CSS Modules']
  },
  {
    title: 'KHA PhotoBooth',
    description: 'Aplikasi web interaktif yang memungkinkan pengguna mengambil foto dan menerapkan berbagai filter kreatif.',
    demoLink: 'https://photobothkhaa.netlify.app/',
    image: '/asset/photobooth.png',
    year: '2025',
    tech: ['JavaScript', 'Canvas API', 'CSS3', 'Webcam API']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-darker-blue to-[#0a192f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSAyNTUgMjU1IC8gMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">My</span> <span className="text-green-300">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Explore my journey through these projects, each representing a milestone in my development career
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-400/30 to-cyan-400/30"></div>
          
          <div className="space-y-16">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Project content */}
                  <div className={`w-full md:w-1/2 p-4 ${isEven ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'}`}>
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-4">
                          <div className="flex justify-between items-start">
                            <span className="text-emerald-400 font-mono text-sm bg-black/50 px-2 py-1 rounded">
                              {project.year}
                            </span>
                            <div className="flex space-x-2">
                              {project.tech.map((tech, i) => (
                                <span key={i} className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-emerald-400 hover:text-white font-medium group transition-colors"
                        >
                          View Project
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-1/2 w-4 h-4 -ml-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30 z-10 ${isEven ? 'md:left-1/2' : 'md:right-1/2'}`}></div>
                  
                  {/* Empty space for alignment */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
