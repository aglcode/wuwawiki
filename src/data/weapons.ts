export const weapons = [
  {
    id: 'resonant-edge',
    name: 'Resonant Edge',
    type: 'sword',
    rarity: 5,
    image: 'https://images.pexels.com/photos/12752681/pexels-photo-12752681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '674',
      subStat: {
        name: 'CRIT DMG',
        value: '38.4%'
      }
    },
    description: 'A legendary blade that resonates with physical energy. Increases ATK by 20% and grants a 40% chance to deal additional physical damage with each strike.'
  },
  {
    id: 'phoenix-spear',
    name: 'Phoenix Spear',
    type: 'polearm',
    rarity: 5,
    image: 'https://images.pexels.com/photos/7897529/pexels-photo-7897529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '682',
      subStat: {
        name: 'Fire DMG',
        value: '25.0%'
      }
    },
    description: 'A fiery polearm that embodies the power of the phoenix. Increases Fire DMG by 25% and provides a stacking ATK buff (max 3 stacks) with each hit.'
  },
  {
    id: 'tidecaller',
    name: 'Tidecaller',
    type: 'catalyst',
    rarity: 5,
    image: 'https://images.pexels.com/photos/3418779/pexels-photo-3418779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '648',
      subStat: {
        name: 'Healing Bonus',
        value: '20.0%'
      }
    },
    description: 'A mystical catalyst infused with the power of the ocean. Increases healing effectiveness by 20% and grants a 15% HP shield when using ultimate abilities.'
  },
  {
    id: 'thundering-pulse',
    name: 'Thundering Pulse',
    type: 'bow',
    rarity: 5,
    image: 'https://images.pexels.com/photos/12751837/pexels-photo-12751837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '668',
      subStat: {
        name: 'CRIT Rate',
        value: '22.4%'
      }
    },
    description: 'A bow that channels the power of thunder. Increases ATK by 20% and provides a 12% Thunder DMG boost for each stack of energy (max 3 stacks).'
  },
  {
    id: 'tempest-cleaver',
    name: 'Tempest Cleaver',
    type: 'claymore',
    rarity: 5,
    image: 'https://images.pexels.com/photos/7241569/pexels-photo-7241569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '694',
      subStat: {
        name: 'Wind DMG',
        value: '22.0%'
      }
    },
    description: 'A massive blade that can create devastating whirlwinds. Increases Wind DMG by 22% and provides a 35% chance to create a damaging whirlwind when attacking.'
  },
  {
    id: 'quantum-codex',
    name: 'Quantum Codex',
    type: 'catalyst',
    rarity: 5,
    image: 'https://images.pexels.com/photos/3760905/pexels-photo-3760905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '656',
      subStat: {
        name: 'Quantum DMG',
        value: '24.0%'
      }
    },
    description: 'A mysterious catalyst that manipulates the fabric of reality. Increases Quantum DMG by 24% and creates a protective barrier that absorbs damage equal to 20% of the wielder\'s Max HP.'
  },
  {
    id: 'unity-blade',
    name: 'Unity Blade',
    type: 'sword',
    rarity: 4,
    image: 'https://images.pexels.com/photos/821742/pexels-photo-821742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '565',
      subStat: {
        name: 'CRIT Rate',
        value: '18.0%'
      }
    },
    description: 'A finely crafted sword made for the guardians of Union City. Boosts CRIT Rate by 18% and increases physical damage by 15% after using an ultimate ability.'
  },
  {
    id: 'dragons-fang',
    name: 'Dragon\'s Fang',
    type: 'polearm',
    rarity: 4,
    image: 'https://images.pexels.com/photos/7897452/pexels-photo-7897452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '578',
      subStat: {
        name: 'ATK Speed',
        value: '12.0%'
      }
    },
    description: 'A polearm designed to mimic the fang of a legendary dragon. Increases ATK Speed by 12% and provides 18% Fire DMG when HP is above 80%.'
  },
  {
    id: 'oceans-embrace',
    name: 'Ocean\'s Embrace',
    type: 'catalyst',
    rarity: 4,
    image: 'https://images.pexels.com/photos/675949/pexels-photo-675949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '546',
      subStat: {
        name: 'HP',
        value: '24.0%'
      }
    },
    description: 'A catalyst blessed by the spirits of the ocean. Increases Max HP by 24% and boosts healing based on the wielder\'s Max HP.'
  },
  {
    id: 'storm-bringer',
    name: 'Storm Bringer',
    type: 'bow',
    rarity: 4,
    image: 'https://images.pexels.com/photos/12751838/pexels-photo-12751838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '564',
      subStat: {
        name: 'CRIT DMG',
        value: '36.0%'
      }
    },
    description: 'A bow that channels the power of storms. Increases CRIT DMG by 36% and provides 15% ATK Speed after using an ultimate ability.'
  },
  {
    id: 'gale-blade',
    name: 'Gale Blade',
    type: 'claymore',
    rarity: 4,
    image: 'https://images.pexels.com/photos/7241573/pexels-photo-7241573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '588',
      subStat: {
        name: 'ATK',
        value: '16.0%'
      }
    },
    description: 'A claymore that can cut through the wind itself. Boosts ATK by 16% and increases movement speed by 10% after defeating an enemy.'
  },
  {
    id: 'reality-shifter',
    name: 'Reality Shifter',
    type: 'catalyst',
    rarity: 4,
    image: 'https://images.pexels.com/photos/1099122/pexels-photo-1099122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: {
      atk: '542',
      subStat: {
        name: 'Elemental Mastery',
        value: '96'
      }
    },
    description: 'A catalyst that can manipulate the perception of reality. Boosts Elemental Mastery by 96 and increases the duration of buffs by 20%.'
  }
];