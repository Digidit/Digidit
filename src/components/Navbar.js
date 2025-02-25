import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Set logo based on theme
  const logo = theme === "dark" ?  "/logo_w.png" : "/logo_bb.png" ;

  // Toggle Dark Mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Website Name */}
        <div className="flex items-center space-x-2 cursor-pointer"> 
  <img src={logo} alt="Logo" className="w-10 h-10 transition-all duration-300" onClick={() => scrollToSection("Hero")}/>
  <span className="text-xl font-bold text-gray-800 dark:text-white" >
    <button onClick={() => scrollToSection("Hero")}>Digidit</button>
  </span>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
                <button onClick={() => {scrollToSection("Projects");setDropdownOpen(!dropdownOpen)}} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" >
                  Video Editing
                </button>
                <button onClick={() => {scrollToSection("Projects");setDropdownOpen(!dropdownOpen)}} className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  Graphic Design
                </button>
              </div>
            )}
          </div>
          <button onClick={() => scrollToSection("AboutMe")} className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            About Me
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </button>
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 mt-2 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2">
            <button
              className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="pl-4">
                <button onClick={() => scrollToSection("projects.videoEditing")} className="block py-1 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  Video Editing
                </button>
                <button onClick={() => scrollToSection("projects.graphicDesign")} className="block py-1 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  Graphic Design
                </button>
              </div>
            )}
            <button onClick={() => scrollToSection("aboutMe")} className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              About Me
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              Contact
            </button>
            {/* Theme Toggle for Mobile */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
