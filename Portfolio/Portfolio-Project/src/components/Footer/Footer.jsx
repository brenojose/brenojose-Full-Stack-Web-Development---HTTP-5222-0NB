import React from 'react';
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

// Footer component to display the footer section of the website
const Footer = () => {
  return (
    <div className="bg-darkGray py-14">
        <div className="container flex flex-col gap-3 justify-center items-center">
            {/* Animated Logo Image */}
            <motion.img
                initial={{ opacity: 0, scale: 0 }}  // Start with hidden and scaled down
                whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale up to full size
                transition={{ duration: 0.4 }}  // Animation duration of 0.4 seconds
                src={Logo} 
                alt="Logo"  // Provide a descriptive alt text for accessibility
                className="w-[150px]"  // Set width of the logo
            />
            {/* Animated Copyright Text */}
            <motion.p
                initial={{ opacity: 0, scale: 0 }}  // Start with hidden and scaled down
                whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale up to full size
                transition={{ duration: 0.4, delay: 0.4 }}  // Animation duration of 0.4 seconds with a delay of 0.4 seconds
                className="text-white text-center text-sm">
                Copyright &copy; 2024. All Rights Reserved.
            </motion.p>
            {/* Animated GitHub Link */}
            <motion.p
                initial={{ opacity: 0, scale: 0 }}  // Start with hidden and scaled down
                whileInView={{ opacity: 1, scale: 1 }}  // Fade in and scale up to full size
                transition={{ duration: 0.4, delay: 0.8 }}  // Animation duration of 0.4 seconds with a delay of 0.8 seconds
                className="text-white">
                Follow on Git:{" "}
                <a href="https://github.com/brenojose" className="text-primary" target="_blank" rel="noopener noreferrer">
                    Git.io/brenojose
                </a>
            </motion.p>
        </div>
    </div>
  );
}

export default Footer;
