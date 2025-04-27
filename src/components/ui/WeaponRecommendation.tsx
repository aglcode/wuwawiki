import React from 'react';
import { motion } from 'framer-motion';

interface WeaponRecommendationProps {
  weapon: {
    name: string;
    rarity: number;
    description: string;
    image?: string;
  };
  index: number;
}

const WeaponRecommendation: React.FC<WeaponRecommendationProps> = ({ weapon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="glass-card"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-20 h-20 rounded bg-navy/70 border border-gray-700 flex items-center justify-center flex-shrink-0">
          {weapon.image ? (
            <img src={weapon.image} alt={weapon.name} className="w-16 h-16 object-contain" />
          ) : (
            <div className="text-3xl">⚔️</div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">{weapon.name}</h3>
            <div className="flex">
              {[...Array(weapon.rarity)].map((_, i) => (
                <span key={i} className="text-accent text-sm">★</span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-300">{weapon.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeaponRecommendation;