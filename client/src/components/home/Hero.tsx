import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaChevronDown } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary dark:text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.tagline}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md">
              {personalInfo.shortBio}
            </p>

            <div className="flex space-x-4 mb-8">
              <Button className="px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center">
                <span>My Work</span>
                <FaArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary dark:border-primary dark:text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center"
              >
                <span>Download CV</span>
                <FaDownload className="ml-2" />
              </Button>
            </div>

            <div className="flex space-x-4">
              {personalInfo.social.linkedin && (
                <a 
                  href={personalInfo.social.linkedin}
                  className="text-xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              
              {personalInfo.social.github && (
                <a 
                  href={personalInfo.social.github}
                  className="text-xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              
              {personalInfo.social.instagram && (
                <a 
                  href={personalInfo.social.instagram}
                  className="text-xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
              
              {personalInfo.social.twitter && (
                <a 
                  href={personalInfo.social.twitter}
                  className="text-xl text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 overflow-hidden border-4 border-primary/20">
                <img 
                  src={personalInfo.profileImage} 
                  alt={`${personalInfo.name} profile`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl font-bold"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FaCode />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <FaChevronDown className="text-3xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
