import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400 max-w-xs">{personalInfo.tagline}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  className="text-gray-400 hover:text-primary text-xl transition-colors"
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
                  className="text-gray-400 hover:text-primary text-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              
              {personalInfo.social.twitter && (
                <a
                  href={personalInfo.social.twitter}
                  className="text-gray-400 hover:text-primary text-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              )}
              
              {personalInfo.social.instagram && (
                <a
                  href={personalInfo.social.instagram}
                  className="text-gray-400 hover:text-primary text-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
            </div>

            <p className="text-gray-500 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#home"
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
