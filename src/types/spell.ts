export enum Spell {
  AuraOfLife = 'AuraOfLife',
  FeignDeath = 'FeignDeath',
  HeroesFeast = 'HeroesFeast',
  DivineFavor = 'DivineFavor',
  Bless = 'Bless',
  Fireball = 'Fireball',
  DetectMagic = 'DetectMagic',
}

export enum Action {
  Action = 'Action',
  BonusAction = 'BonusAction',
  LongTerm = 'LongTerm',
}

export enum MagicSchool {
  Abjuration = 'Abjuration',
  Conjuration = 'Conjuration',
  Divination = 'Divination',
  Enchantment = 'Enchantment',
  Evocation = 'Evocation',
  Illusion = 'Illusion',
  Necromancy = 'Necromancy',
  Transmutation = 'Transmutation',
}

export enum Lvl {
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
}

export enum Class {
  Artificer = 'Artificer',
  Bard = 'Bard',
  Cleric = 'Cleric',
  Druid = 'Druid',
  Paladin = 'Paladin',
  Ranger = 'Ranger',
  Sorcerer = 'Sorcerer',
  Warlock = 'Warlock',
  Wizard = 'Wizard',
}

export interface ISpell {
  name: string;
  lvl: Lvl;

  school: string;
  // school: MagicSchool;
  actionType: Action;
  castTime: number; // секунд
  duration: number | 'Доки не буде розсіяне або не спрацює' | 'Доки не розсіється або не спрацює'; // секунд, 1 раунд = 6 секунд

  distance: number | 'На себе' | 'Дотик'; // метрів
  target: string;
  numberOfTargets: number;

  description: string;
  components: {
    c: boolean;
    t: boolean;
    m?: string;
  };
  highLvl: {
    has: boolean;
    from?: number;
    description?: string;
    effect?: string;
  };
  concentration: boolean;
  freeWay: boolean;
  self: boolean;
  area: string;
  saveThough: string;
  attack: string;
  ritual: boolean;

  damageType: string[];
}

export default { Action, Class, Spell, Lvl, MagicSchool };
