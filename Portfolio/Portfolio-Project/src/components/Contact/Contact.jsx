import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";

// Function to define animation variants for the contact section
const contactAnimations = (delay) => ({
    hidden: {
        opacity: 0,    // Start with full transparency
        y: 100,        // Start 100px below the final position
    },
    show: {
        opacity: 1,    // End with full opacity
        y: 0,          // End at the final position
        transition: {
            duration: 0.4,  // Animation duration in seconds
            delay: delay,    // Delay before animation starts
        }
    }
});

// Main component for the contact section
const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
        <div className="container py-24 lg:py-36 pb-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Section: Contact Information and Call to Action */}
                <section className="space-y-7 lg:max-w-[380px]">
                    {/* Animated Contact heading */}
                    <motion.p
                      variants={contactAnimations(0.2)}
                      initial="hidden"
                      whileInView="show" 
                      className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                      - Contact
                    </motion.p>
                    {/* Animated Main Heading */}
                    <motion.h1
                      variants={contactAnimations(0.4)}
                      initial="hidden"
                      whileInView="show" 
                      className="text-2xl lg:text-3xl">
                        Let’s Connect and Collaborate.
                    </motion.h1>
                    {/* Animated Introductory Text */}
                    <motion.p
                      variants={contactAnimations(0.6)}
                      initial="hidden"
                      whileInView="show" 
                      className="text-sm leading-6 opacity-70">
                        Feel free to reach out for any project inquiries, collaboration ideas, or just to chat about tech.
                        I’m always excited to discuss new opportunities and how we can work together to create something amazing!
                    </motion.p>
                    {/* Animated Button */}
                    <motion.button
                      variants={contactAnimations(0.8)}
                      initial="hidden"
                      whileInView="show"  
                      className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">
                        Let’s grab a coffee 
                        <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                    </motion.button>
                </section>

                {/* Right Section: Additional Information and Stats */}
                <div className="space-y-7">
                    {/* Animated Inspirational Quote */}
                    <motion.p
                      variants={contactAnimations(0.2)}
                      initial="hidden"
                      whileInView="show" 
                      className="text-3xl">
                        Innovation thrives where creativity meets code. Each project is a new adventure.
                    </motion.p>
                    {/* Animated Detailed Description */}
                    <motion.p
                      variants={contactAnimations(0.6)}
                      initial="hidden"
                      whileInView="show" 
                      className="text-sm leading-6 opacity-60">
                        Every line of code is an opportunity to create something innovative, impactful, and meaningful.
                        I thrive on challenges and embrace every project as a chance to expand my expertise and deliver exceptional results,
                        continuously pushing the boundaries of what's possible.
                    </motion.p>
                    {/* Animated Stats Section */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Years of Learning and Innovating */}
                        <motion.div
                          variants={contactAnimations(0.8)}
                          initial="hidden"
                          whileInView="show" 
                          className="flex gap-3 items-center">
                            <p className="text-6xl text-primary font-bold">2</p>
                            <p className="font-semibold max-w-[100px]">Years of Learning and Innovating</p>
                        </motion.div>
                        {/* Completed Projects */}
                        <motion.div
                          variants={contactAnimations(1)}
                          initial="hidden"
                          whileInView="show"  
                          className="flex gap-3 items-center">
                            <p className="text-6xl text-primary font-bold">17</p>
                            <p className="font-semibold max-w-[100px]">Completed Projects</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Contact;
