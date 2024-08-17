import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";

// Function to define animation variants for the blog posts
const blogsAnimation = (delay) => ({
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
        },
    },
});

// List of blog posts with metadata
const blogList = [
    {
        id: 1,
        title: "The Case of the Missing Semicolon: A Detective Story",
        date: "August 16th, 2024",
        img: "https://picsum.photos/200/300",
        delay: 0.2,    // Delay for the animation of this blog
    },
    {
        id: 2,
        title: "Debugging Nightmares: When the Code Fights Back",
        date: "August 15th, 2024",
        img: "https://picsum.photos/200/300",
        delay: 0.4,    // Delay for the animation of this blog
    },
    {
        id: 3,
        title: "Best Memes to Web Devs: Funny and Somehow Necessary",
        date: "August 12th, 2024",
        img: "https://picsum.photos/200/300",
        delay: 0.6,    // Delay for the animation of this blog
    }
];

// Main component for displaying the list of blogs
const Blogs = () => {
  return (
    <div className="bg-darkGray text-white py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <section className="space-y-7 lg:max-w-[380px]">
            {/* Animated Recent heading */}
            <motion.p
              variants={blogsAnimation(0.2)}
              initial="hidden"
              whileInView={"show"}
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Recent
            </motion.p>
            {/* Animated Insights & Reflections heading */}
            <motion.h1
              variants={blogsAnimation(0.4)}
              initial="hidden"
              whileInView={"show"}
              className="text-2xl lg:text-3xl">
              Insights & Reflections
            </motion.h1>
            {/* Animated introductory text */}
            <motion.p
              variants={blogsAnimation(0.6)}
              initial="hidden"
              whileInView={"show"}
              className="text-sm leading-6 opacity-70">
              Explore my thoughts on the latest trends, challenges, and innovations in the world of tech and design.
            </motion.p>
          </section>
          <section className="col-span-2 lg:px-20">
            {/* Blog Card Section */}
            {
                blogList.map((blog) => (
                    <motion.div
                      key={blog.id}   // Unique key for each list item
                      variants={blogsAnimation(blog.delay)}
                      initial="hidden"
                      whileInView={"show"}
                      className="flex justify-between items-center border-b-2 border-gray pb-4">
                        <p className="text-sm opacity-75">{blog.date}</p>
                        <p className="text-lg font-bold">{blog.title}</p>
                        <FaArrowRight className="text-xl text-primary"/>
                    </motion.div>
                ))
            }
          </section>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
