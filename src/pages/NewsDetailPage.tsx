import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or data store
  const newsItems = [
    {
      id: 'aerial-announcement',
      title: 'New Character "Aerial" Announced',
      content: `The development team is excited to announce "Aerial", a new wind-element resonator joining the roster in the upcoming 1.2 update. This agile fighter specializes in aerial combat and mobility, bringing a fresh perspective to team compositions.

      Aerial's unique combat style allows her to maintain extended flight periods while dealing consistent damage to enemies. Her resonance abilities focus on wind manipulation, creating powerful updrafts and tornados that can control the battlefield.

      Key Features:
      - Unique flight-based combat system
      - Wind element resonance abilities
      - Special team synergies with other mobility-focused characters
      
      Players can look forward to adding Aerial to their teams when update 1.2 launches next month. Stay tuned for more detailed information about her abilities and optimal builds.`,
      date: 'May 15, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'announcement'
    },
    {
      id: 'season-2-battle-pass',
      title: 'Season 2 Battle Pass Rewards Revealed',
      content: `The Season 2 Battle Pass brings an exciting array of rewards for players to earn. Themed around "Lunar Echoes", this season offers unique cosmetics and valuable resources.

      Battle Pass Highlights:
      - Exclusive "Lunar Echo" outfit for Rover
      - New weapon skin series with lunar-themed effects
      - Premium currency rewards
      - Rare upgrade materials
      
      The Battle Pass will be available for purchase when Season 2 begins next week. Players can preview all rewards in-game starting today.`,
      date: 'May 10, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'update'
    },
    {
      id: 'resonant-tides-event',
      title: 'Upcoming Event: "Resonant Tides"',
      content: `Get ready for "Resonant Tides", a limited-time event that challenges players to master the flow of battle. This event introduces new mechanics and exciting rewards.

      Event Features:
      - New game mode: Tide Rush
      - Special event currency
      - Exclusive rewards including a 4-star weapon
      - Limited-time challenges
      
      The event begins next week and will run for two weeks. Make sure to participate daily to maximize your rewards!`,
      date: 'May 5, 2025',
      author: 'WaveGuide Team',
      image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'event'
    }
  ];

  const news = newsItems.find(item => item.id === id);

  if (!news) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">News article not found.</p>
              <Link to="/" className="text-teal hover:text-teal-light mt-4 inline-block">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-16 min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-dark-blue/20"></div>
          </div>
          
          {/* Navigation */}
          <div className="container mx-auto px-4 pt-20 relative z-10">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* Article Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-teal/20 backdrop-blur-sm text-teal-light text-sm font-medium rounded-full mb-4 capitalize">
                  {news.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {news.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{news.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{news.date}</span>
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
                {news.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewsDetailPage;