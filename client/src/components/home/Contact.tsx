import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { personalInfo } from "@/lib/constants";

// Extend the schema with additional validation
const formSchema = insertContactFormSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/contact', values);
      const data = await response.json();
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Feel free to contact me for any work or suggestions below
          </p>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-4 shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-4 shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-4 shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-primary flex items-center justify-center mr-4 shrink-0">
                    <FaGlobe />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Social Profiles</h4>
                    <div className="flex space-x-4 mt-2">
                      {personalInfo.social.linkedin && (
                        <a 
                          href={personalInfo.social.linkedin} 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      
                      {personalInfo.social.github && (
                        <a 
                          href={personalInfo.social.github} 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      )}
                      
                      {personalInfo.social.twitter && (
                        <a 
                          href={personalInfo.social.twitter} 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      )}
                      
                      {personalInfo.social.instagram && (
                        <a 
                          href={personalInfo.social.instagram} 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email"
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5}
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane className="mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
