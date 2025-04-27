import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';

const NewsSection = () => {
  const newsItems = [
    {
      id: 'aerial-announcement',
      title: 'New Character "Aerial" Announced',
      summary: 'The wind-element resonator will be part of the upcoming 1.2 update',
      date: 'May 15, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'announcement'
    },
    {
      id: 'season-2-battle-pass',
      title: 'Season 2 Battle Pass Rewards Revealed',
      summary: 'Earn exclusive weapons, currency, and the limited "Lunar Echo" outfit',
      date: 'May 10, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'update'
    },
    {
      id: 'resonant-tides-event',
      title: 'Upcoming Event: "Resonant Tides"',
      summary: 'Participate in the limited-time event to earn special rewards and currency',
      date: 'May 5, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'event'
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Latest News" 
          subtitle="Stay up to date with the latest Wuthering Waves updates"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{news.author}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-teal transition-colors">
                {news.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {news.summary}
              </p>
              
              <Link 
                to={`/news/${news.id}`} 
                className="inline-flex items-center gap-1 text-teal hover:text-teal-light transition-colors text-sm group"
              >
                <span>Read more</span>
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;