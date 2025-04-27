import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import { guides } from '../data/guides';

const GuideDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const guide = guides.find(g => g.id === id);
  
  if (!guide) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Guide not found.</p>
              <Link to="/guides" className="text-teal hover:text-teal-light mt-4 inline-block">
                Back to Guides
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }
  
  // Category colors
  const categoryColors = {
    beginner: 'bg-teal text-dark-blue',
    advanced: 'bg-electric-blue text-white',
    systems: 'bg-accent text-dark-blue',
    events: 'bg-purple-500 text-white',
  };

  const categoryColor = categoryColors[guide.category as keyof typeof categoryColors] || categoryColors.beginner;
  
  return (
    <PageTransition>
      <div className="pt-16 min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src={guide.image} 
              alt={guide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-dark-blue/20"></div>
          </div>
          
          {/* Navigation */}
          <div className="container mx-auto px-4 pt-20 relative z-10">
            <Link 
              to="/guides"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Guides</span>
            </Link>
          </div>
          
          {/* Guide Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColor} mb-4 capitalize`}>
                  {guide.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {guide.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  {guide.author && (
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{guide.author}</span>
                    </div>
                  )}
                  
                  {guide.date && (
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(guide.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{guide.readTime} read</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-xl text-gray-300 mb-12">
                  {guide.description}
                </p>
                
                {guide.sections?.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p className="text-gray-300">{section.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default GuideDetailPage;