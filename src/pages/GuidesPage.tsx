import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, Zap, BookOpen } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import GameGuideCard from '../components/ui/GameGuideCard';
import { guides } from '../data/guides';

const GuidesPage = () => {
  // Separate guides by category
  const beginnerGuides = guides.filter(guide => guide.category === 'beginner');
  const advancedGuides = guides.filter(guide => guide.category === 'advanced');
  const systemGuides = guides.filter(guide => guide.category === 'systems');
  
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Game Guides" 
            subtitle="Comprehensive guides to help you master Wuthering Waves"
          />
          
          {/* Featured Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-6 md:aspect-h-5 lg:aspect-h-4">
                <img 
                  src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Featured Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 w-full">
                <div className="inline-block px-3 py-1 bg-teal/20 backdrop-blur-sm text-teal-light text-sm font-medium rounded-full mb-4">
                  Featured Guide
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Getting Started in Wuthering Waves
                </h2>
                <p className="text-gray-300 max-w-3xl mb-6 hidden sm:block">
                  Everything you need to know to begin your journey as a Resonator. 
                  From understanding basic game mechanics to building your first team, this guide covers it all.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="px-6 py-3 bg-teal hover:bg-teal-light text-dark-blue font-medium rounded-md transition-colors">
                    Read Full Guide
                  </button>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm">20 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Beginner Guides */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-navy border border-teal/20">
                <BookOpen className="text-teal" size={20} />
              </div>
              <h2 className="text-2xl font-bold">Beginner Guides</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GameGuideCard
                    id={guide.id}
                    title={guide.title}
                    description={guide.description}
                    image={guide.image}
                    category={guide.category}
                    readTime={guide.readTime}
                  />
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Advanced Guides */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-navy border border-electric-blue/20">
                <BarChart className="text-electric-blue" size={20} />
              </div>
              <h2 className="text-2xl font-bold">Advanced Techniques</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GameGuideCard
                    id={guide.id}
                    title={guide.title}
                    description={guide.description}
                    image={guide.image}
                    category={guide.category}
                    readTime={guide.readTime}
                  />
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Game Systems */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-navy border border-accent/20">
                <Zap className="text-accent" size={20} />
              </div>
              <h2 className="text-2xl font-bold">Game Systems</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GameGuideCard
                    id={guide.id}
                    title={guide.title}
                    description={guide.description}
                    image={guide.image}
                    category={guide.category}
                    readTime={guide.readTime}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default GuidesPage;