import React from 'react'; // Import React
import Navbar from './components/Navbar/Navbar'; // Import Navbar component
import Hero from './components/Hero/Hero'; // Import Hero component
import Contact from './components/Contact/Contact'; // Import Contact component
import Skills from './components/Skills/Skills'; // Import Skills component
import Projects from './components/Projects/Projects'; // Import Projects component
import Blogs from './components/Blogs/Blogs'; // Import Blogs component
import Footer from './components/Footer/Footer'; // Import Footer component

// Main application component
const App = () => {
  return (
    <main className="overflow-x-hidden"> {/* Main container for the application */}
      <Navbar/> {/* Render Navbar component at the top */}
      <Hero/> {/* Render Hero section */}
      <Contact/> {/* Render Contact section */}
      <Skills/> {/* Render Skills section */}
      <Projects/> {/* Render Projects section */}
      <Blogs/> {/* Render Blogs section */}
      <Footer/> {/* Render Footer component at the bottom */}
    </main>
  )
}

export default App; // Export the App component as default
