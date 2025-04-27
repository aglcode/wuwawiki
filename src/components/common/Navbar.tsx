import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-teal to-teal-light flex items-center justify-center">
              <span className="text-dark-blue font-bold text-lg">W</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">WaveGuide</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 lg:px-4 py-2 transition-colors ${
                  isActive 
                    ? 'text-teal' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/characters" 
              className={({ isActive }) => 
                `px-3 lg:px-4 py-2 transition-colors ${
                  isActive 
                    ? 'text-teal' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Characters
            </NavLink>
            <NavLink 
              to="/weapons" 
              className={({ isActive }) => 
                `px-3 lg:px-4 py-2 transition-colors ${
                  isActive 
                    ? 'text-teal' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Weapons
            </NavLink>
            <NavLink 
              to="/guides" 
              className={({ isActive }) => 
                `px-3 lg:px-4 py-2 transition-colors ${
                  isActive 
                    ? 'text-teal' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Guides
            </NavLink>
            
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-teal text-dark-blue font-medium rounded-md hover:bg-teal-light transition-colors"
            >
              Join Discord
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-navy/95 backdrop-blur-md z-40 md:hidden"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-3 text-lg font-medium transition-colors ${
                    isActive 
                      ? 'text-teal' 
                      : 'text-gray-200 hover:text-white'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/characters" 
                className={({ isActive }) => 
                  `px-4 py-3 text-lg font-medium transition-colors ${
                    isActive 
                      ? 'text-teal' 
                      : 'text-gray-200 hover:text-white'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Characters
              </NavLink>
              <NavLink 
                to="/weapons" 
                className={({ isActive }) => 
                  `px-4 py-3 text-lg font-medium transition-colors ${
                    isActive 
                      ? 'text-teal' 
                      : 'text-gray-200 hover:text-white'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Weapons
              </NavLink>
              <NavLink 
                to="/guides" 
                className={({ isActive }) => 
                  `px-4 py-3 text-lg font-medium transition-colors ${
                    isActive 
                      ? 'text-teal' 
                      : 'text-gray-200 hover:text-white'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Guides
              </NavLink>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-teal text-dark-blue font-medium rounded-md text-center hover:bg-teal-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Discord
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;