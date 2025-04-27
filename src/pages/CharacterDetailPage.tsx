import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Shield, Sword, Wind, Users } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import WeaponRecommendation from '../components/ui/WeaponRecommendation';
import TeamComposition from '../components/ui/TeamComposition';
import { characters } from '../data/characters';

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // Find character by id
    const foundCharacter = characters.find(char => char.id === id);
    setCharacter(foundCharacter);
    
    // Scroll to top when character changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!character) {
    return (
      <PageTransition>
        <div className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Character not found.</p>
              <Link to="/characters" className="text-teal hover:text-teal-light mt-4 inline-block">
                Back to Characters
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }
  
  // Element colors
  const elementColors = {
    water: 'from-blue-600 to-cyan-400',
    fire: 'from-red-600 to-orange-400',
    wind: 'from-green-600 to-emerald-400',
    thunder: 'from-purple-600 to-indigo-400',
    quantum: 'from-fuchsia-600 to-purple-400',
    physical: 'from-gray-600 to-gray-400',
  };

  const elementColor = elementColors[character.element as keyof typeof elementColors] || elementColors.physical;
  
  return (
    <PageTransition>
      <div className="pt-16 min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src={character.splash || character.image} 
              alt={character.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-dark-blue/20"></div>
          </div>
          
          {/* Navigation */}
          <div className="container mx-auto px-4 pt-20 relative z-10">
            <Link 
              to="/characters"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Characters</span>
            </Link>
          </div>
          
          {/* Character Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-16 h-1.5 rounded bg-gradient-to-r ${elementColor} mb-4`}></div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {character.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-lg text-gray-300 capitalize flex items-center gap-1">
                    <Wind size={18} className="text-teal" />
                    {character.element}
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className="text-lg text-gray-300 capitalize flex items-center gap-1">
                    <Sword size={18} className="text-electric-blue" />
                    {character.weaponType}
                  </span>
                </div>
                
                <div className="flex">
                  {[...Array(character.rarity)].map((_, i) => (
                    <span key={i} className="text-accent text-xl mr-1">★</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Content Tabs */}
        <div className="bg-navy border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto hide-scrollbar">
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'overview' 
                    ? 'text-teal border-teal' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'weapons' 
                    ? 'text-teal border-teal' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('weapons')}
              >
                Best Weapons
              </button>
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'skills' 
                    ? 'text-teal border-teal' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'builds' 
                    ? 'text-teal border-teal' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('builds')}
              >
                Builds
              </button>
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'teams' 
                    ? 'text-neon-blue border-neon-blue' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('teams')}
              >
                Teams
              </button>
              <button
                className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                  activeTab === 'lore' 
                    ? 'text-teal border-teal' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                onClick={() => setActiveTab('lore')}
              >
                Lore
              </button>
            </div>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card"
                  >
                    <h2 className="text-2xl font-bold mb-4">Character Overview</h2>
                    <p className="text-gray-300 mb-4">
                      {character.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-navy/70 border border-teal/20">
                          <User size={20} className="text-teal" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Profile</h3>
                          <p className="text-sm text-gray-400">
                            Role: {character.role}
                          </p>
                          <p className="text-sm text-gray-400">
                            Region: {character.region}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-navy/70 border border-teal/20">
                          <Shield size={20} className="text-teal" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Combat Style</h3>
                          <p className="text-sm text-gray-400">
                            {character.combatStyle || "Utilizes fast attacks and elemental abilities to deal sustained damage while maintaining mobility."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-card"
                  >
                    <h2 className="text-2xl font-bold mb-4">Base Stats</h2>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">HP</span>
                          <span className="text-white">{character.stats?.hp || "12,420"}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-teal to-teal-light w-[75%] rounded-full"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">ATK</span>
                          <span className="text-white">{character.stats?.atk || "3,840"}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-electric-blue to-blue-400 w-[85%] rounded-full"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">DEF</span>
                          <span className="text-white">{character.stats?.def || "1,760"}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent to-accent-dark w-[60%] rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <h3 className="font-medium mb-3">Elemental Info</h3>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${elementColor}`}></div>
                          <span className="text-sm text-gray-300 capitalize">{character.element} Resonance</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          {character.elementDescription || `Harnesses the power of ${character.element} to enhance attacks and create powerful elemental reactions.`}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {activeTab === 'weapons' && (
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Best Weapons for {character.name}</h2>
                  <p className="text-gray-400 mb-8">
                    Discover the most effective weapons to maximize {character.name}'s potential in combat.
                  </p>
                  
                  <div className="space-y-6">
                    {character.bestWeapons?.map((weapon: any, index: number) => (
                      <WeaponRecommendation key={index} weapon={weapon} index={index} />
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
            
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Combat Skills</h2>
                  <p className="text-gray-400 mb-8">
                    Master {character.name}'s unique skillset to maximize their combat potential.
                  </p>
                  
                  <div className="space-y-6">
                    {character.skills ? (
                      character.skills.map((skill: any, index: number) => (
                        <div key={index} className="glass-card">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-20 h-20 rounded-full bg-navy/70 border-2 border-teal/30 flex items-center justify-center flex-shrink-0">
                              {skill.icon || <Wind size={32} className="text-teal" />}
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                              <div className="text-sm text-teal-light mb-3">{skill.type}</div>
                              <p className="text-gray-300">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-6">
                        <div className="glass-card">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-20 h-20 rounded-full bg-navy/70 border-2 border-teal/30 flex items-center justify-center flex-shrink-0">
                              <Wind size={32} className="text-teal" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">Basic Attack</h3>
                              <div className="text-sm text-teal-light mb-3">Normal Attack</div>
                              <p className="text-gray-300">
                                Performs a series of quick strikes, dealing {character.element} damage. 
                                The final hit of the combo deals increased damage and has a chance to apply an elemental effect.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-20 h-20 rounded-full bg-navy/70 border-2 border-teal/30 flex items-center justify-center flex-shrink-0">
                              <Wind size={32} className="text-electric-blue" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">Resonance Burst</h3>
                              <div className="text-sm text-teal-light mb-3">Special Ability</div>
                              <p className="text-gray-300">
                                Channels resonance energy to unleash a powerful {character.element} attack, 
                                dealing AoE damage to enemies in range and enhancing elemental reactions.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-20 h-20 rounded-full bg-navy/70 border-2 border-teal/30 flex items-center justify-center flex-shrink-0">
                              <Wind size={32} className="text-accent" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white mb-2">Union Engraving</h3>
                              
                              <div className="text-sm text-teal-light mb-3">Ultimate</div>
                              <p className="text-gray-300">
                                Activates the power of the Union Engraving, significantly boosting combat abilities 
                                for a short duration. During this state, all attacks are enhanced with additional {character.element} damage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
            
            {activeTab === 'builds' && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card"
                >
                  <h2 className="text-2xl font-bold mb-4">Recommended Builds</h2>
                  <p className="text-gray-300 mb-6">
                    Optimize {character.name}'s performance with these recommended builds and equipment setups.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-teal">Main DPS Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Recommended Weapons</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★★</span>
                              <span>Ethereal Blade</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★</span>
                              <span>Astral Enforcer</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★</span>
                              <span>Echo of Thunder</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Echo Chamber Sets</h4>
                          <div className="space-y-4 text-gray-300">
                            <div>
                              <p className="font-medium text-teal-light">Resonant Harmony (4pc)</p>
                              <p className="text-sm text-gray-400 mt-1">
                                Increases {character.element} damage by 15% and provides a 25% chance to extend elemental effects.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-teal-light">Elemental Surge (2pc)</p>
                              <p className="text-sm text-gray-400 mt-1">
                                Boosts elemental reaction damage by 20%.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Main Stats Priority</h4>
                          <div className="space-y-2 text-gray-300">
                            <p><span className="text-teal-light">Attack:</span> ATK%</p>
                            <p><span className="text-teal-light">Defense:</span> HP%, DEF%</p>
                            <p><span className="text-teal-light">Special:</span> {character.element} DMG%</p>
                            <p><span className="text-teal-light">Support:</span> Energy Recharge</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-electric-blue">Support Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Recommended Weapons</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★★</span>
                              <span>Unity Staff</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★</span>
                              <span>Harmonic Resonator</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-accent text-sm">★★★★</span>
                              <span>Elemental Conduit</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Echo Chamber Sets</h4>
                          <div className="space-y-4 text-gray-300">
                            <div>
                              <p className="font-medium text-electric-blue">Support Resonance (4pc)</p>
                              <p className="text-sm text-gray-400 mt-1">
                                Increases team elemental damage by 10% and provides healing based on ATK.
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-electric-blue">Energy Flux (2pc)</p>
                              <p className="text-sm text-gray-400 mt-1">
                                Increases Energy Recharge by 20%.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glass-card bg-opacity-50">
                          <h4 className="font-medium mb-3">Main Stats Priority</h4>
                          <div className="space-y-2 text-gray-300">
                            <p><span className="text-electric-blue">Attack:</span> Energy Recharge</p>
                            <p><span className="text-electric-blue">Defense:</span> HP%, DEF%</p>
                            <p><span className="text-electric-blue">Special:</span> Elemental Mastery</p>
                            <p><span className="text-electric-blue">Support:</span> Healing Bonus</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'teams' && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Recommended Team Compositions</h2>
                  <div className="space-y-6">
                    {character.bestTeams?.map((team, index) => (
                      <TeamComposition
                        key={index}
                        name={team.name}
                        characters={team.characters}
                        description={team.description}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
            
            {activeTab === 'lore' && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card"
                >
                  <h2 className="text-2xl font-bold mb-4">Character Lore</h2>
                  
                  <div className="prose prose-invert max-w-none">
                    <h3>Background</h3>
                    <p>
                      {character.lore?.background || 
                        `Born in the aftermath of the great cataclysm, ${character.name} grew up in a world forever changed by the Hollows. 
                        From an early age, they displayed an unusual affinity for resonance energy, drawing the attention of the Union.`}
                    </p>
                    
                    <h3 className="mt-6">Story</h3>
                    <p>
                      {character.lore?.story || 
                        `After years of training and honing their abilities, ${character.name} became one of the most skilled resonators in the Union's ranks. 
                        Their mastery over ${character.element} resonance made them a formidable force against the Hollow threat.
                        
                        However, during a mission to investigate a particularly dangerous Hollow outbreak, they discovered secrets that would change their understanding of the world forever.`}
                    </p>
                    
                    <h3 className="mt-6">Relationships</h3>
                    <p>
                      {character.lore?.relationships || 
                        `${character.name} maintains a complex network of allies and rivals within the Union. 
                        They are known for their loyalty to close companions and their unwavering dedication to protecting the innocent from Hollow threats.
                        
                        Despite their reserved nature, those who earn their trust find a steadfast ally who will never abandon them in times of need.`}
                    </p>
                    
                    <blockquote className="mt-8 border-l-4 border-teal pl-4 italic">
                      "{character.lore?.quote || `The resonance flows through all things. Listen closely, and you'll hear the whispers of a world trying to heal itself.`}"
                      <footer className="text-right text-gray-400 mt-2">— {character.name}</footer>
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CharacterDetailPage;