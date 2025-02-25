import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    // Detect when local storage changes (e.g., from a theme switcher)
    window.addEventListener("storage", handleStorageChange);
    
    // Also detect theme changes dynamically
    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem("theme") || "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"], // Watches for class changes on <html>
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // Force re-render logo when theme changes
  const logo = theme === "dark" ? "/logo_w.png" : "/logo_bb.png";

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden 
      bg-white dark:bg-gray-900 transition-all"
      id="Hero"
    >
      {/* Profile Image with Subtle Floating Effect */}
      <motion.div
        key={theme} // This ensures re-rendering when theme changes
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <img src={logo} alt="Logo" className="w-32 h-32 rounded-full shadow-lg transition-all duration-300" />
      </motion.div>

      {/* Animated Title */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold text-black dark:text-white"
      >
        Welcome to <span className="text-yellow-500 dark:text-yellow-400">Digidit</span>
      </motion.h1>

      {/* Simple & Clean Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg text-black dark:text-gray-300 mt-3 max-w-2xl"
      >
        Video editing services for creators and brands.
        Whether it’s reels, YouTube videos, or business promos, we ensure quality and timely delivery.
      </motion.p>
    </section>
  );
};

export default Hero;
