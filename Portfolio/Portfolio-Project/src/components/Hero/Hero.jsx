import React from 'react';
import Person from '../../assets/person.png';
import { FaArrowRight, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants for hero section elements
const heroVariants = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});

const Hero = () => {
  return (
    <>
    <main className="bg-gray text-white">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[600px] lg:overflow-y-hidden place-items-center py-20 md:py-0 overflow-x-hidden">   
            
            {/* Image Section */}
            <div className="grid col-span-2 relative h-full justify-center items-center">
                <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                    {/* Animated Header */}
                    <motion.h1 
                        variants={heroVariants(0.2)} 
                        initial="hidden"
                        whileInView="show"
                        className="text-4xl md:text-6xl font-bold relative z-20">
                        Breno<br/>Gomes.
                    </motion.h1>
                    
                    {/* Animated Underline */}
                    <motion.div
                        variants={heroVariants(0.5)}
                        initial="hidden"
                        whileInView="show"
                        className="h-[6px] w-[80px] bg-primary mt-4">
                    </motion.div>
                    
                    {/* Social Media Links */}
                    <div className="flex gap-6 mt-24">
                        {/* GitHub Icon */}
                        <motion.div
                            variants={heroVariants(0.8)}
                            initial="hidden"
                            whileInView="show"
                            className="z-20">
                            <FaGithub className="text-2xl hover:scale-110 cursor-pointer duration-200"/>
                        </motion.div>
                        
                        {/* LinkedIn Icon */}
                        <motion.div
                            variants={heroVariants(1.0)}
                            initial="hidden"
                            whileInView="show"
                            className="z-20">
                            <FaLinkedinIn className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                        </motion.div>
                        
                        {/* Instagram Icon */}
                        <motion.div
                            variants={heroVariants(1.2)}
                            initial="hidden"
                            whileInView="show"
                            className="z-20">
                            <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                        </motion.div>
                    </div>
                    
                    {/* Person Image */}
                    <div className="absolute -right-6 md:-right-36 bottom-0">
                        <motion.img
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}
                            src={Person} 
                            alt="Web developer image"  // Descriptive alt text for accessibility
                            className="img-shadow scale-110 relative z-10 w-[150px] sm:w-[250px] md:w-full" 
                        />
                    </div>
                </div>
            </div>
            
            {/* Text Content Section */}
            <div className="space-y-7">
                {/* Introduction Text */}
                <motion.p
                    variants={heroVariants(0.4)} 
                    initial="hidden"
                    whileInView="show"
                    className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                    - Introduction
                </motion.p>
                
                {/* Main Heading */}
                <motion.h1 
                    variants={heroVariants(0.5)} 
                    initial="hidden"
                    whileInView="show" 
                    className="text-2xl lg:text-3xl">
                    Product Designer and Developer, based in Etobicoke.
                </motion.h1>
                
                {/* Description Text */}
                <motion.p 
                    variants={heroVariants(0.6)} 
                    initial="hidden"
                    whileInView="show" 
                    className="text-sm leading-6 opacity-70">
                    With a strong background in technology, I have found my passion in coding and developing impactful solutions.
                    Transitioning into the world of full-stack development has been an exciting journey, allowing me to blend creativity
                    with technical expertise.
                </motion.p>
                
                {/* Call to Action Button */}
                <motion.button 
                    variants={heroVariants(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">
                    The road so far 
                    <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                </motion.button>
            </div>
          </div>
        </div>
    </main>
    </>
  );
}

export default Hero;
