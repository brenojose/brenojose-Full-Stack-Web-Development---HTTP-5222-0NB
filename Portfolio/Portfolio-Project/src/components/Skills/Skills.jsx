import React from 'react'; // Import React
import { FaBoxOpen } from "react-icons/fa"; // Import icon for Application Developer
import { CiPen } from "react-icons/ci"; // Import icon for Digital Art Creator
import { MdComputer } from "react-icons/md"; // Import icon for Web Designer
import CompanyLogo from "../../assets/company-logos.png"; // Import company logo image
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations

// Define animation variants for the skills section
const skillsAnimation = (delay) => ({
    hidden: {
        opacity: 0, // Initial state: hidden and opacity 0
        y: 50, // Move 50px downwards
    },
    show: {
        opacity: 1, // Visible state: opacity 1
        y: 0, // Move back to original position
        transition: {
            duration: 0.4, // Animation duration
            delay: delay, // Animation delay based on input
        },
    },
});

// Array of skills to be displayed
const skills = [
    {
        id: 1,
        title: "Application Developer",
        icon: <FaBoxOpen className="text-4xl"/>, // Icon for Application Developer
        delay: 0.2, // Animation delay
    },
    {
        id: 2,
        title: "Digital Art Creator",
        icon: <CiPen className="text-4xl"/>, // Icon for Digital Art Creator
        delay: 0.4, // Animation delay
    },
    {
        id: 3,
        title: "Web Designer",
        icon: <MdComputer className="text-4xl"/>, // Icon for Web Designer
        delay: 0.6, // Animation delay
    }
]

const Skills = () => {
  return (
    <div className="bg-gray"> {/* Container with background color */}
        {/* Card section */ }
        <div className="container py-10 text-white space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center transform -translate-y-28"> {/* Grid layout for skills cards */}
                {skills.map((skill) => {
                    return (
                        <motion.div
                        variants={skillsAnimation(skill.delay)} // Apply animation variant based on skill delay
                        initial="hidden" // Initial state for animation
                        whileInView={"show"} // Animation state when in view
                         key={skill.id} className="flex items-center gap-6 bg-[#644757] px-7 py-12 max-w-[300px] hover:shadow-lg hover:bg-primary/80 hover:scale-105 duration-300 shadow-lg"> {/* Card container for each skill */}
                            {skill.icon} {/* Skill icon */}
                            <div className="space-y-3"> {/* Container for text */}
                                <p className="text-3xl">{skill.title}</p> {/* Skill title */}
                                <p>{skill.description}</p> {/* Skill description (currently not used in the `skills` array) */}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
             {/* Company logo section */}
          <motion.div
           initial={{ opacity: 0 }} // Initial state for animation
           whileInView={{ opacity: 1 }} // Animation state when in view
           transition={{ duration: 1.2, delay: 0.7 }} // Animation duration and delay
           className="flex justify-center items-center"> {/* Center the company logo */}
            <img src={CompanyLogo} alt="List of companies the owner worked previously" /> {/* Display company logo */}
          </motion.div>
        </div>
    </div>
  )
}

export default Skills;
