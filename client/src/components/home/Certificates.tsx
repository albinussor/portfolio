import { motion } from "framer-motion";
import { FaCertificate, FaTrophy, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "@/lib/constants";

const Certificates = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "certificate":
        return <FaCertificate />;
      case "award":
        return <FaAward />;
      case "trophy":
        return <FaTrophy />;
      default:
        return <FaCertificate />;
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mb-4">
                {getIcon(cert.type)}
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                {cert.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-primary dark:text-primary">{cert.date}</span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="inline mr-1" /> 
                    {cert.linkText || "Verify"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
