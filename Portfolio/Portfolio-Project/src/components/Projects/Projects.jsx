import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState from React
import { FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight icon for the button
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations

// Define animation variants for the projects section
const projectsAnimation = (delay) => ({
    hidden: {
        opacity: 0, // Initial state: hidden and opacity 0
        y: 50, // Move 50px downwards
    },
    show: {
        opacity: 1, // Visible state: opacity 1
        y: 0, // Move back to original position
        transition: {
            duration: 0.4, // Animation duration
            delay: delay, // Animation delay
        },
    },
});

const Projects = () => {
    const [projects, setProjects] = useState([]); // State to store project data
    const [loading, setLoading] = useState(true); // State to manage loading status

    // Fetch project data when the component mounts
    useEffect(() => {
        fetch('http://localhost/Joanna/api.php') // API endpoint for fetching project data
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                setProjects(data); // Update projects state with fetched data
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log any errors
                setLoading(false); // Set loading to false in case of error
            });
    }, []); // Empty dependency array means this effect runs once after the initial render

    // Display loading message while data is being fetched
    if (loading) {
        return <div>Loading...</div>; // Simple loading message
    }

    return (
        <div className="bg-gray text-white py-14"> {/* Container with background color and padding */}
            <div className="container"> {/* Wrapper for content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6"> {/* Grid layout for projects */}
                    <section className="space-y-7 lg:max-w-[380px]"> {/* Section for introductory text */}
                        <motion.p
                            variants={projectsAnimation(0.2)} // Animation variant with a delay of 0.2s
                            initial="hidden" // Initial state for animation
                            whileInView="show" // Animation state when in view
                            className="text-sm opacity-50 tracking-widest font-serif translate-y-3">- Projects</motion.p> {/* Introductory text */}
                        <motion.h1
                            variants={projectsAnimation(0.4)} // Animation variant with a delay of 0.4s
                            initial="hidden" // Initial state for animation
                            whileInView="show" // Animation state when in view
                            className="text-2xl lg:text-3xl"> {/* Heading */}
                            Crafted with Passion, Driven by Innovation.
                        </motion.h1>
                        <motion.p
                            variants={projectsAnimation(0.6)} // Animation variant with a delay of 0.6s
                            initial="hidden" // Initial state for animation
                            whileInView="show" // Animation state when in view
                            className="text-sm leading-6 opacity-70"> {/* Description text */}
                            Each project is a unique journey, where creativity meets technology to deliver solutions that inspire and captivate. {" "}
                        </motion.p>
                        <motion.button
                            variants={projectsAnimation(0.8)} // Animation variant with a delay of 0.8s
                            initial="hidden" // Initial state for animation
                            whileInView="show" // Animation state when in view
                            className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group"> {/* Button for discovering work */}
                            Discover My Work {" "} <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" /> {/* Arrow icon */}
                        </motion.button>
                    </section>
                    {
                        projects.map((project, index) => (
                            // Map over projects and render each one
                            <motion.div
                                variants={projectsAnimation(index * 0.2)} // Animation variant with delay based on index
                                initial="hidden" // Initial state for animation
                                whileInView="show" // Animation state when in view
                                key={project.project_name} // Unique key for each project
                                className="space-y-4 px-4 mb-8 items-center justify-center"> {/* Project item container */}
                                <img src={`http://localhost/PHPFiles/${project.project_thumbnail}`} alt={project.project_name} className="w-full h-[240px] hover:scale-110 hover:shadow-lg duration-300" /> {/* Project thumbnail */}
                                <p className="text-2xl font-semibold">{project.project_name}</p> {/* Project name */}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
