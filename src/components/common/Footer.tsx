import React from 'react';
import { Link } from 'react-router-dom';
import { Github as GitHub, Twitter, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-teal to-teal-light flex items-center justify-center">
                <span className="text-dark-blue font-bold text-lg">W</span>
              </div>
              <span className="text-white font-bold text-xl">WaveGuide</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate companion for your Wuthering Waves journey. 
              Explore characters, weapons, and strategies to enhance your gameplay experience.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-teal transition-colors"
                aria-label="Discord"
              >
                <Discord size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-teal transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/characters" className="text-gray-400 hover:text-teal transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/weapons" className="text-gray-400 hover:text-teal transition-colors">
                  Weapons
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-teal transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/guides/beginner" className="text-gray-400 hover:text-teal transition-colors">
                  Getting Started
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                  Official Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                  Patch Notes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} WaveGuide. Not affiliated with official Wuthering Waves.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;