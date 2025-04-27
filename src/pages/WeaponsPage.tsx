import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import WeaponCard from '../components/ui/WeaponCard';
import { weapons } from '../data/weapons';

const WeaponsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState(0);
  
  // Get unique weapon types
  const weaponTypes = [...new Set(weapons.map(weapon => weapon.type))];
  
  // Filter weapons based on search and filters
  const filteredWeapons = weapons.filter(weapon => {
    const matchesSearch = weapon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === '' || weapon.type === typeFilter;
    const matchesRarity = rarityFilter === 0 || weapon.rarity === rarityFilter;
    
    return matchesSearch && matchesType && matchesRarity;
  });
  
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Weapons" 
            subtitle="Discover and compare all weapons in Wuthering Waves"
          />
          
          {/* Search and Filters */}
          <div className="glass-card mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search weapons..."
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
                  <label className="block text-sm text-gray-400 mb-1 ml-1">Type</label>
                  <div className="relative">
                    <select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="w-48 pl-10 pr-4 py-2.5 bg-navy border border-gray-700 rounded-md focus:outline-none focus:border-teal text-white appearance-none"
                    >
                      <option value="">All Types</option>
                      {weaponTypes.map(type => (
                        <option key={type} value={type} className="capitalize">
                          {type}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1 ml-1">Rarity</label>
                  <div className="relative">
                    <select
                      value={rarityFilter}
                      onChange={(e) => setRarityFilter(parseInt(e.target.value))}
                      className="w-48 pl-10 pr-4 py-2.5 bg-navy border border-gray-700 rounded-md focus:outline-none focus:border-teal text-white appearance-none"
                    >
                      <option value={0}>All Rarities</option>
                      <option value={5}>★★★★★</option>
                      <option value={4}>★★★★</option>
                      <option value={3}>★★★</option>
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Weapons Grid */}
          {filteredWeapons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredWeapons.map((weapon, index) => (
                <motion.div
                  key={weapon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <WeaponCard
                    id={weapon.id}
                    name={weapon.name}
                    type={weapon.type}
                    image={weapon.image}
                    rarity={weapon.rarity}
                    stats={weapon.stats}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No weapons found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default WeaponsPage;