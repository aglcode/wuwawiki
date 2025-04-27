import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import CharacterCard from '../ui/CharacterCard';
import SectionHeader from '../ui/SectionHeader';
import { characters } from '../../data/characters';

const FeaturedCharacters = () => {
  // Get only the first 4 characters
  const featuredCharacters = characters.slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-8">
          <SectionHeader 
            title="Featured Characters" 
            subtitle="Discover the unique resonators that will join your adventure"
          />
          
          <Link 
            to="/characters" 
            className="group flex items-center gap-2 text-teal hover:text-teal-light transition-colors mt-4 md:mt-0"
          >
            <span>View all characters</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCharacters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CharacterCard
                id={character.id}
                name={character.name}
                element={character.element}
                image={character.image}
                rarity={character.rarity}
                weaponType={character.weaponType}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCharacters;