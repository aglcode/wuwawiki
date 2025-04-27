import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageTransition from '../components/ui/PageTransition';
import FeaturedCharacters from '../components/sections/FeaturedCharacters';
import GameGuides from '../components/sections/GameGuides';
import NewsSection from '../components/sections/NewsSection';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Wuthering Waves Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="w-24 h-1.5 rounded bg-gradient-to-r from-teal to-teal-light mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Your Ultimate Guide to <span className="text-teal">Wuthering Waves</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore characters, weapons, and strategies to master your journey through the resonance-filled world
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/characters" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-teal hover:bg-teal-light text-dark-blue font-medium rounded-md transition-colors"
              >
                Explore Characters
                <ChevronRight size={18} />
              </Link>
              
              <Link 
                to="/guides" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-navy/50 text-white border border-teal rounded-md transition-colors"
              >
                View Guides
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-teal rounded-full" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Featured Characters Section */}
      <FeaturedCharacters />
      
      {/* Game Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="animated-gradient w-full h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="w-24 h-1.5 rounded bg-gradient-to-r from-electric-blue to-blue-400 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Master the Power of Resonance
              </h2>
              <p className="text-gray-300 mb-6">
                In the aftermath of a catastrophic event known as the "Hollow," the world has been 
                forever changed. Now, mysterious resonance energies flow through the lands, creating 
                both wonders and dangers as humanity struggles to adapt to this new reality.
              </p>
              <p className="text-gray-300 mb-8">
                As a Resonator of the Union, you wield the power to control these energies, battling 
                the monstrous threats that have emerged while uncovering the mysteries of a world in flux.
              </p>
              
              <Link 
                to="/guides/getting-started" 
                className="inline-flex items-center gap-2 text-teal hover:text-teal-light transition-colors"
              >
                <span>Learn game basics</span>
                <ChevronRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wuthering Waves Gameplay" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <NewsSection />
      
      {/* Game Guides */}
      <GameGuides />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Wuthering Waves World" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-dark-blue/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive guides and resources to master Wuthering Waves
            </p>
            
            <Link 
              to="/guides/beginner" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal hover:bg-teal-light text-dark-blue font-medium rounded-md transition-colors"
            >
              Start Now
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;