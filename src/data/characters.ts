export const characters = [
  {
    id: 'rover',
    name: 'Rover',
    element: 'physical',
    weaponType: 'sword',
    rarity: 5,
    role: 'Main DPS',
    region: 'Union City',
    description: 'A mysterious wanderer with no memory of their past. Rover possesses exceptional combat abilities and an unusual connection to resonance energy that allows them to adapt to any situation.',
    image: 'https://images.pexels.com/photos/7520084/pexels-photo-7520084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    splash: 'https://images.pexels.com/photos/7520084/pexels-photo-7520084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '12,680',
      atk: '3,924',
      def: '1,842',
    },
    bestWeapons: [
      {
        name: 'Resonant Edge',
        rarity: 5,
        description: 'Rover\'s signature weapon. Increases ATK by 20% and grants a 40% chance to deal additional physical damage with each strike.',
      },
      {
        name: 'Unity Blade',
        rarity: 4,
        description: 'Boosts CRIT Rate by 18% and increases physical damage by 15% after using an ultimate ability.',
      },
      {
        name: 'Hollow Cutter',
        rarity: 4,
        description: 'Increases ATK by 12% and grants a 10% chance to ignore enemy DEF when attacking.',
      }
    ]
  },
  {
    id: 'jianxin',
    name: 'Jianxin',
    element: 'fire',
    weaponType: 'polearm',
    rarity: 5,
    role: 'Main DPS',
    region: 'Jinzhou',
    description: 'A disciplined martial artist from the ancient city of Jinzhou. Jianxin uses her mastery of fire resonance to overwhelm enemies with swift, devastating attacks.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '10,826',
      atk: '4,246',
      def: '1,536',
    },
    bestWeapons: [
      {
        name: 'Phoenix Spear',
        rarity: 5,
        description: 'Jianxin\'s signature weapon. Increases Fire DMG by 25% and provides a stacking ATK buff (max 3 stacks) with each hit.',
      },
      {
        name: 'Dragon\'s Fang',
        rarity: 4,
        description: 'Increases ATK Speed by 12% and provides 18% Fire DMG when HP is above 80%.',
      },
      {
        name: 'Ember Lance',
        rarity: 4,
        description: 'Boosts Elemental Mastery by 86 and increases the damage of elemental reactions by 15%.',
      }
    ]
  },
  {
    id: 'sanhua',
    name: 'Sanhua',
    element: 'water',
    weaponType: 'catalyst',
    rarity: 5,
    role: 'Support',
    region: 'Azure Shore',
    description: 'A mystical seer from the coastal region of Azure Shore. Sanhua wields powerful water resonance abilities that can both heal allies and control the flow of battle.',
    image: 'https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '11,742',
      atk: '3,568',
      def: '1,924',
    },
    bestWeapons: [
      {
        name: 'Tidecaller',
        rarity: 5,
        description: 'Sanhua\'s signature weapon. Increases healing effectiveness by 20% and grants a 15% HP shield when using ultimate abilities.',
      },
      {
        name: 'Ocean\'s Embrace',
        rarity: 4,
        description: 'Increases Max HP by 24% and boosts healing based on the wielder\'s Max HP.',
      },
      {
        name: 'Coral Scepter',
        rarity: 4,
        description: 'Provides 12% Energy Recharge and increases Water DMG by 15% after using a special ability.',
      }
    ]
  },
  {
    id: 'kallio',
    name: 'Kallio',
    element: 'thunder',
    weaponType: 'bow',
    rarity: 4,
    role: 'Sub DPS',
    region: 'Stormcrest',
    description: 'A skilled ranger from the mountainous Stormcrest region. Kallio harnesses the power of thunder resonance to deliver precise, devastating attacks from a distance.',
    image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '9,864',
      atk: '3,924',
      def: '1,626',
    },
    bestWeapons: [
      {
        name: 'Thundering Pulse',
        rarity: 5,
        description: 'Increases ATK by 20% and provides a 12% Thunder DMG boost for each stack of energy (max 3 stacks).',
      },
      {
        name: 'Storm Bringer',
        rarity: 4,
        description: 'Kallio\'s signature weapon. Increases CRIT DMG by 36% and provides 15% ATK Speed after using an ultimate ability.',
      },
      {
        name: 'Voltaic Bow',
        rarity: 4,
        description: 'Boosts Energy Recharge by 20% and increases Thunder DMG by 18% when energy is full.',
      }
    ]
  },
  {
    id: 'yinlin',
    name: 'Yinlin',
    element: 'wind',
    weaponType: 'claymore',
    rarity: 5,
    role: 'Main DPS',
    region: 'Eastern Peaks',
    description: 'A legendary warrior from the Eastern Peaks. Yinlin channels wind resonance through his massive blade, creating devastating whirlwinds that can tear through entire groups of enemies.',
    image: 'https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '12,468',
      atk: '4,158',
      def: '1,782',
    },
    bestWeapons: [
      {
        name: 'Tempest Cleaver',
        rarity: 5,
        description: 'Yinlin\'s signature weapon. Increases Wind DMG by 22% and provides a 35% chance to create a damaging whirlwind when attacking.',
      },
      {
        name: 'Gale Blade',
        rarity: 4,
        description: 'Boosts ATK by 16% and increases movement speed by 10% after defeating an enemy.',
      },
      {
        name: 'Mountain Carver',
        rarity: 4,
        description: 'Increases DEF by 18% and converts 24% of DEF to ATK when using special abilities.',
      }
    ]
  },
  {
    id: 'meilin',
    name: 'Meilin',
    element: 'quantum',
    weaponType: 'catalyst',
    rarity: 5,
    role: 'Support/DPS',
    region: 'Central Laboratory',
    description: 'A brilliant scientist from the Central Laboratory. Meilin manipulates quantum resonance energies to bend reality, creating powerful time-space distortions that can both protect allies and devastate enemies.',
    image: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '10,968',
      atk: '3,742',
      def: '1,682',
    },
    bestWeapons: [
      {
        name: 'Quantum Codex',
        rarity: 5,
        description: 'Meilin\'s signature weapon. Increases Quantum DMG by 24% and creates a protective barrier that absorbs damage equal to 20% of Meilin\'s Max HP.',
      },
      {
        name: 'Reality Shifter',
        rarity: 4,
        description: 'Boosts Elemental Mastery by 96 and increases the duration of buffs by 20%.',
      },
      {
        name: 'Probability Engine',
        rarity: 4,
        description: 'Increases Energy Recharge by 22% and provides a 15% chance to reset the cooldown of special abilities after use.',
      }
    ]
  },
  {
    id: 'shen',
    name: 'Shen',
    element: 'physical',
    weaponType: 'sword',
    rarity: 4,
    role: 'Sub DPS',
    region: 'Union City',
    description: 'A disciplined guardian of Union City. Shen combines precision swordplay with tactical brilliance, making him an excellent addition to any team composition.',
    image: 'https://images.pexels.com/photos/1699939/pexels-photo-1699939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '10,124',
      atk: '3,682',
      def: '1,942',
    },
    bestWeapons: [
      {
        name: 'Guardian\'s Blade',
        rarity: 4,
        description: 'Shen\'s signature weapon. Increases DEF by 25% and converts 15% of DEF to ATK.',
      },
      {
        name: 'Union Slicer',
        rarity: 4,
        description: 'Boosts CRIT Rate by 22% and increases ATK by 15% when HP is above 70%.',
      },
      {
        name: 'Discipline',
        rarity: 3,
        description: 'Increases Energy Recharge by 15% and provides a 10% Physical DMG boost after using special abilities.',
      }
    ]
  },
  {
    id: 'lihua',
    name: 'Lihua',
    element: 'fire',
    weaponType: 'bow',
    rarity: 4,
    role: 'Support',
    region: 'Jinzhou',
    description: 'A talented performer and archer from Jinzhou. Lihua\'s performances are enhanced by her fire resonance, allowing her to both entertain audiences and provide crucial support in battle.',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      hp: '9,846',
      atk: '3,486',
      def: '1,562',
    },
    bestWeapons: [
      {
        name: 'Performer\'s Bow',
        rarity: 4,
        description: 'Lihua\'s signature weapon. Increases ATK by 16% for all team members after Lihua uses her ultimate ability.',
      },
      {
        name: 'Flame Shooter',
        rarity: 4,
        description: 'Boosts Fire DMG by 18% and provides a 15% increase to the entire team\'s Elemental Mastery.',
      },
      {
        name: 'Harmony String',
        rarity: 3,
        description: 'Increases Energy Recharge by 20% and boosts the effectiveness of healing abilities by 15%.',
      }
    ]
  }
];