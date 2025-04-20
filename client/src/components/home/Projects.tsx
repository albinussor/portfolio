import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filterProjects = () => {
    if (filter === "all") return projects;
    return projects.filter(project => project.category === filter);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Here are some of the projects I've worked on. Feel free to check them out!
          </p>
        </motion.div>

        {/* Project filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeIn}
        >
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            className="px-6 py-2 rounded-full"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button 
            variant={filter === "web" ? "default" : "outline"}
            className="px-6 py-2 rounded-full"
            onClick={() => setFilter("web")}
          >
            Web
          </Button>
          <Button 
            variant={filter === "mobile" ? "default" : "outline"}
            className="px-6 py-2 rounded-full"
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </Button>
          <Button 
            variant={filter === "other" ? "default" : "outline"}
            className="px-6 py-2 rounded-full"
            onClick={() => setFilter("other")}
          >
            Other
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects().map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      className="text-primary hover:text-primary/80 dark:hover:text-primary/80 font-medium flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-10 text-center">
            <Button className="px-8 py-3 rounded-lg font-medium">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
