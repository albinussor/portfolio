import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaTools } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/constants";

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-4">
                <FaLaptopCode className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>

            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} color="default" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mr-4">
                <FaUsers className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>

            <div className="space-y-4">
              {skills.soft.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} color="emerald" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900 text-violet-500 dark:text-violet-400 flex items-center justify-center mr-4">
                <FaTools className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">Tools & Software</h3>
            </div>

            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} color="violet" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
