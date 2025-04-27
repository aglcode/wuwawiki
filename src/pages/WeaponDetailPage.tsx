import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sword, Shield, Zap } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import { weapons } from '../data/weapons';

const WeaponDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const weapon = weapons.find(w => w.id === id);
  
  if (!weapon) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Weapon not found.</p>
              <Link to="/weapons" className="text-teal hover:text-teal-light mt-4 inline-block">
                Back to Weapons
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }
  
  // Weapon type colors
  const typeColors = {
    sword: 'from-blue-600 to-cyan-400',
    claymore: 'from-red-600 to-orange-400',
    polearm: 'from-green-600 to-emerald-400',
    bow: 'from-purple-600 to-indigo-400',
    catalyst: 'from-fuchsia-600 to-purple-400',
  };

  const typeColor = typeColors[weapon.type as keyof typeof typeColors] || typeColors.sword;
  
  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <Link 
            to="/weapons"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Weapons</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Weapon Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card aspect-square">
                <img 
                  src={weapon.image} 
                  alt={weapon.name} 
                  className="w-full h-full object-contain p-12"
                />
              </div>
            </motion.div>
            
            {/* Weapon Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card h-full">
                <div className={`w-16 h-1.5 rounded bg-gradient-to-r ${typeColor} mb-4`}></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold">{weapon.name}</h1>
                  <span className="px-2 py-1 bg-navy/80 rounded text-sm text-white capitalize">
                    {weapon.type}
                  </span>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(weapon.rarity)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-accent text-xl mr-0.5"
                    >★</span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8">{weapon.description}</p>
                
                {weapon.stats && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Base Stats</h2>
                    
                    <div className="flex items-center gap-4 p-4 glass-card bg-opacity-50">
                      <div className="p-3 rounded-full bg-navy/70 border border-teal/20">
                        <Sword size={24} className="text-teal" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Base ATK</div>
                        <div className="text-2xl font-semibold">{weapon.stats.atk}</div>
                      </div>
                    </div>
                    
                    {weapon.stats.subStat && (
                      <div className="flex items-center gap-4 p-4 glass-card bg-opacity-50">
                        <div className="p-3 rounded-full bg-navy/70 border border-electric-blue/20">
                          {weapon.stats.subStat.name.includes('CRIT') ? (
                            <Zap size={24} className="text-electric-blue" />
                          ) : (
                            <Shield size={24} className="text-electric-blue" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{weapon.stats.subStat.name}</div>
                          <div className="text-2xl font-semibold text-teal-light">
                            {weapon.stats.subStat.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {weapon.passive && (
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Passive Effect</h2>
                    <div className="glass-card bg-opacity-50">
                      <h3 className="text-lg font-medium text-teal-light mb-2">
                        {weapon.passive.name}
                      </h3>
                      <p className="text-gray-300">{weapon.passive.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WeaponDetailPage;