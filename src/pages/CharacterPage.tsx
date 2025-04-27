import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import CharacterCard from '../components/ui/CharacterCard';
import { characters } from '../data/characters';

const CharacterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [elementFilter, setElementFilter] = useState('');
  const [weaponFilter, setWeaponFilter] = useState('');
  
  // Get unique elements and weapon types
  const elements = [...new Set(characters.map(char => char.element))];
  const weaponTypes = [...new Set(characters.map(char => char.weaponType))];
  
  // Filter characters based on search and filters
  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesElement = elementFilter === '' || character.element === elementFilter;
    const matchesWeapon = weaponFilter === '' || character.weaponType === weaponFilter;
    
    return matchesSearch && matchesElement && matchesWeapon;
  });
  
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Characters" 
            subtitle="Explore all playable resonators in Wuthering Waves"
          />
          
          {/* Search and Filters */}
          <div className="glass-card mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search characters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-navy border border-gray-700 rounded-md focus:outline-none focus:border-teal text-white"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1 ml-1">Element</label>
                  <div className="relative">
                    <select
                      value={elementFilter}
                      onChange={(e) => setElementFilter(e.target.value)}
                      className="w-48 pl-10 pr-4 py-2.5 bg-navy border border-gray-700 rounded-md focus:outline-none focus:border-teal text-white appearance-none"
                    >
                      <option value="">All Elements</option>
                      {elements.map(element => (
                        <option key={element} value={element} className="capitalize">
                          {element}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1 ml-1">Weapon</label>
                  <div className="relative">
                    <select
                      value={weaponFilter}
                      onChange={(e) => setWeaponFilter(e.target.value)}
                      className="w-48 pl-10 pr-4 py-2.5 bg-navy border border-gray-700 rounded-md focus:outline-none focus:border-teal text-white appearance-none"
                    >
                      <option value="">All Weapons</option>
                      {weaponTypes.map(weaponType => (
                        <option key={weaponType} value={weaponType} className="capitalize">
                          {weaponType}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Character Grid */}
          {filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCharacters.map((character, index) => (
                <motion.div
                  key={character.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No characters found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CharacterPage;