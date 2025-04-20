import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { personalInfo } from "@/lib/constants";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary">
              Who am I?
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {personalInfo.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary">
              Personal Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaUser className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="font-medium">{personalInfo.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Birthday</p>
                  <p className="font-medium">{personalInfo.birthday}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaGraduationCap className="mr-3 text-primary dark:text-primary w-8" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Degree</p>
                  <p className="font-medium">{personalInfo.degree}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
