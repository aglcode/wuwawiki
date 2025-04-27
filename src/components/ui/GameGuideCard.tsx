import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Calendar, User } from 'lucide-react';

interface GameGuideCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  author?: string;
  date?: string;
}

const GameGuideCard: React.FC<GameGuideCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  readTime,
  author,
  date,
}) => {
  // Category colors
  const categoryColors = {
    beginner: 'bg-teal text-dark-blue',
    advanced: 'bg-electric-blue text-white',
    systems: 'bg-accent text-dark-blue',
    events: 'bg-purple-500 text-white',
  };

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.beginner;

  return (
    <div className="glass-card h-full overflow-hidden group">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/30 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor} capitalize`}>
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>
      
      <div className="mt-auto space-y-4">
        {(author || date) && (
          <div className="flex items-center gap-4 text-sm text-gray-400 pt-4 border-t border-gray-700/50">
            {author && (
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{author}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock size={14} />
            <span>{readTime} read</span>
          </div>
          
          <Link 
            to={`/guides/${id}`} 
            className="flex items-center gap-1 text-teal hover:text-teal-light transition-colors group-hover:gap-2"
          >
            <span className="text-sm">Read Guide</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameGuideCard;