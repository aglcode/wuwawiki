import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sword, Shield, Zap } from 'lucide-react';

interface WeaponCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
  rarity: number;
  stats?: {
    atk: string;
    subStat?: {
      name: string;
      value: string;
    };
  };
  description: string;
}

const WeaponCard: React.FC<WeaponCardProps> = ({
  id,
  name,
  type,
  image,
  rarity,
  stats,
  description,
}) => {
  // Weapon type colors
  const typeColors = {
    sword: 'from-blue-600 to-cyan-400',
    claymore: 'from-red-600 to-orange-400',
    polearm: 'from-green-600 to-emerald-400',
    bow: 'from-purple-600 to-indigo-400',
    catalyst: 'from-fuchsia-600 to-purple-400',
  };

  const typeColor = typeColors[type as keyof typeof typeColors] || typeColors.sword;

  return (
    <Link to={`/weapons/${id}`}>
      <motion.div 
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="glass-card h-full overflow-hidden group"
      >
        <div className="relative w-full pt-[100%] bg-navy/70 rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 px-2 py-1 bg-navy/80 backdrop-blur-sm rounded text-xs text-white capitalize">
            {type}
          </div>
        </div>
        
        <div className={`w-12 h-1 rounded bg-gradient-to-r ${typeColor} mb-2`}></div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal transition-colors">{name}</h3>
        
        <div className="flex mb-3">
          {[...Array(rarity)].map((_, i) => (
            <span 
              key={i} 
              className="text-accent text-sm mr-0.5"
            >★</span>
          ))}
        </div>
        
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        {stats && (
          <div className="mt-2 pt-3 border-t border-gray-700/50 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="p-1.5 rounded-full bg-navy/70 border border-teal/20">
                <Sword size={14} className="text-teal" />
              </div>
              <div className="flex justify-between flex-1">
                <span className="text-gray-400">ATK</span>
                <span className="text-white">{stats.atk}</span>
              </div>
            </div>
            
            {stats.subStat && (
              <div className="flex items-center gap-2 text-sm">
                <div className="p-1.5 rounded-full bg-navy/70 border border-electric-blue/20">
                  {stats.subStat.name.includes('CRIT') ? (
                    <Zap size={14} className="text-electric-blue" />
                  ) : (
                    <Shield size={14} className="text-electric-blue" />
                  )}
                </div>
                <div className="flex justify-between flex-1">
                  <span className="text-gray-400">{stats.subStat.name}</span>
                  <span className="text-teal-light">{stats.subStat.value}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default WeaponCard;