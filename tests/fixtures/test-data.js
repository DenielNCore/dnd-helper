// Test data for DnD Helper application

export const testData = {
  // Application URLs
  urls: {
    base: process.env.BASE_URL || 'http://localhost:5199',
    dev: 'http://localhost:5199',
    prod: 'https://artemmasterjava.github.io/dnd-helper'
  },

  // Test timeouts
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 30000
  },

  // Viewport sizes
  viewports: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
  },

  // Sample spell data
  spells: {
    fireball: {
      name: 'Fireball',
      level: 3,
      school: 'Evocation',
      castingTime: '1 action',
      range: '150 feet',
      components: 'V, S, M',
      duration: 'Instantaneous'
    },
    magicMissile: {
      name: 'Magic Missile',
      level: 1,
      school: 'Evocation',
      castingTime: '1 action',
      range: '120 feet',
      components: 'V, S',
      duration: 'Instantaneous'
    }
  },

  // Sample skills data
  skills: {
    acrobatics: {
      name: 'Acrobatics',
      ability: 'Dexterity',
      description: 'Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation'
    },
    athletics: {
      name: 'Athletics',
      ability: 'Strength',
      description: 'Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming'
    }
  }
};

export const selectors = {
  // Navigation
  burgerButton: '.menu-btn',
  sideMenu: '[data-testid="side-menu"]',
  
  // Tabs
  mySpellsTab: '[data-testid="my-spells-tab"]',
  allSpellsTab: '[data-testid="all-spells-tab"]',
  skillsTab: '[data-testid="skills-tab"]',
  
  // Content areas
  mySpellsContent: '[data-testid="my-spells-content"]',
  allSpellsContent: '[data-testid="all-spells-content"]',
  skillsContent: '[data-testid="skills-content"]',
  
  // Spell cards
  spellCard: '.spell-card',
  spellName: '.spell-name, h3, .title',
  spellLevel: '.spell-level, .level',
  
  // Skills
  skillItem: '.skill-item, .skill, .skill-card',
  skillName: '.skill-name, .name, h3',
  skillModifier: '.skill-modifier, .modifier, .bonus',
  
  // Search
  searchInput: 'input[type="search"], input[placeholder*="search"], .search-input'
};
