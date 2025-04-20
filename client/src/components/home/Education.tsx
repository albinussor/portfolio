import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { education, experience } from "@/lib/constants";

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Education Timeline */}
          <div className="md:w-1/2">
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-3">
                <FaGraduationCap />
              </div>
              Education
            </motion.h3>

            <motion.div 
              className="relative timeline-container pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="mb-8 relative timeline-item"
                  variants={itemVariants}
                >
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                    <span className="text-sm text-primary dark:text-primary font-medium block mb-1">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mr-3">
                <FaBriefcase />
              </div>
              Experience
            </motion.h3>

            <motion.div 
              className="relative timeline-container pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-8 relative timeline-item"
                  variants={itemVariants}
                >
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                    <span className="text-sm text-emerald-500 dark:text-emerald-400 font-medium block mb-1">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{exp.position}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
