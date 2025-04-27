import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CharacterCardProps {
  id: string;
  name: string;
  element: string;
  image: string;
  rarity: number;
  weaponType: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  element,
  image,
  rarity,
  weaponType,
}) => {
  // Element colors
  const elementColors = {
    water: 'from-blue-600 to-cyan-400',
    fire: 'from-red-600 to-orange-400',
    wind: 'from-green-600 to-emerald-400',
    thunder: 'from-purple-600 to-indigo-400',
    quantum: 'from-fuchsia-600 to-purple-400',
    physical: 'from-gray-600 to-gray-400',
  };

  const elementColor = elementColors[element as keyof typeof elementColors] || elementColors.physical;

  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative overflow-hidden rounded-lg h-96"
    >
      <Link to={`/characters/${id}`} className="block h-full">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className={`w-12 h-1 rounded bg-gradient-to-r ${elementColor} mb-2`}></div>
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-300 capitalize">{element}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="text-sm text-gray-300">{weaponType}</span>
            </div>
            
            <div className="flex">
              {[...Array(rarity)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-accent mr-0.5"
                >★</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CharacterCard;