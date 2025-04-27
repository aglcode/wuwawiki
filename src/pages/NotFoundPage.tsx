import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block p-4 rounded-full bg-navy/70 border border-teal/30">
              <div className="text-6xl">🔍</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              The resonance has faded from this page. It might have been moved or never existed.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal hover:bg-teal-light text-dark-blue font-medium rounded-md transition-colors"
            >
              <Home size={18} />
              <span>Return Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;