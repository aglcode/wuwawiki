import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface TeamCompositionProps {
  name: string;
  characters: Array<{
    name: string;
    element: string;
    role: string;
    image?: string;
  }>;
  description: string;
  index: number;
}

const TeamComposition: React.FC<TeamCompositionProps> = ({ name, characters, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-20 h-20 rounded-full bg-navy/70 border-2 border-neon-blue/30 flex items-center justify-center flex-shrink-0">
          <Users size={32} className="text-neon-blue" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {characters.map((char, i) => (
              <div key={i} className="flex items-center gap-3 bg-navy/50 rounded-lg p-3">
                {char.image ? (
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <Users size={24} className="text-neon-blue" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-white">{char.name}</p>
                  <p className="text-xs text-gray-400">{char.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamComposition;