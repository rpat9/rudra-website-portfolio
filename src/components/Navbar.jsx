import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkModePreference);
    
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 py-4 transition-all duration-300 bg-[var(--color-bg)]`}>
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
        
        <a href="#" className="text-xl font-bold text-[var(--color-primary)]">
          Rudra Patel
        </a>

        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-primary)] font-bold hover:underline"
            >
              {link.name}
            </a>
          ))}
          
          
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-500  transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="text-[var(--color-primary)]" size={20} />
            ) : (
              <Moon className="text-[var(--color-primary)]" size={20} />
            )}
          </button>
        </div>

        
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-500  transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="text-[var(--color-primary)]" size={20} />
            ) : (
              <Moon className="text-[var(--color-primary)]" size={20} />
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn-primary btn-hover"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-[var(--button-text-color)] " size={24} />
            ) : (
              <Menu className="text-[var(--button-text-color)]" size={24} />
            )}
          </button>
        </div>

        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--color-bg)]  shadow-lg py-4 px-6 md:hidden opacity-80">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--color-primary)] hover:underline py-2 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}