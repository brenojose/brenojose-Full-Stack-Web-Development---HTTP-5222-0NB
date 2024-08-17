import React from 'react';
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants for navbar items
const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
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

// Navigation menu items
const NavMenu = [
    {
        id: 1,
        title: "Services",
        link: "#",
        delay: 0.3,
    },
    {
        id: 2,
        title: "Works",
        link: "#",
        delay: 0.35,
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
        delay: 0.4,
    },
];

const Navbar = () => {
  return (
    <>
      <div className="py-8 bg-gray text-white">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <motion.img
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             src={Logo} 
             alt="Web developer company logo" 
             className="w-[100px]" />
          </div>

          {/* Navigation Menu Section */}
          <div>
            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex justify-center gap-10">
              {NavMenu.map((item) => (
                <motion.li
                 variants={container(item.delay)}
                 initial="hidden"
                 whileInView="show"
                 key={item.id} 
                 className="hover:text-primary text-xl font-semibold text-white/70 duration-300">
                  <a href={item.link}>{item.title}</a>
                </motion.li>
              ))}
            </ul>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <GiHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
