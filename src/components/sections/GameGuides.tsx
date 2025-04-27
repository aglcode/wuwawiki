import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import SectionHeader from '../ui/SectionHeader';
import GameGuideCard from '../ui/GameGuideCard';
import { guides } from '../../data/guides';

const GameGuides = () => {
  // Get only the first 3 guides
  const featuredGuides = guides.slice(0, 3);
  
  return (
    <section className="py-16 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-8">
          <SectionHeader 
            title="Game Guides" 
            subtitle="Master the game with our comprehensive guides"
          />
          
          <Link 
            to="/guides" 
            className="group flex items-center gap-2 text-teal hover:text-teal-light transition-colors mt-4 md:mt-0"
          >
            <span>View all guides</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default GameGuides;