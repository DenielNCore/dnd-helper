import Stats from '@/types/stats';

export enum DamageType {
  Acid = 'Acid',
  Bludgeoning = 'Bludgeoning',
  Cold = 'Cold',
  Fire = 'Fire',
  Force = 'Force',
  Lightning = 'Lightning',
  Necrotic = 'Necrotic',
  Piercing = 'Piercing',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Radiant = 'Radiant',
  Slashing = 'Slashing',
  Thunder = 'Thunder',
}

export enum Action {
  Action = 'Action',
  BonusAction = 'BonusAction',
  Reaction = 'Reaction',
  LongTerm = 'LongTerm',
}

export enum MagicSchool {
  Abjuration = 'Abjuration', // огородження
  Conjuration = 'Conjuration', // виклик
  Divination = 'Divination', // віщування
  Enchantment = 'Enchantment', // причарування
  Evocation = 'Evocation', // втілення
  Illusion = 'Illusion', // ілюзія
  Necromancy = 'Necromancy', // некромантія
  Transmutation = 'Transmutation', // видозміна
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

export type LvlType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

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

export enum Source {
  BasicRules = 'BasicRules',
  ElementalEvilPlayersCompanion = 'ElementalEvilPlayersCompanion',
}

export interface ISpell {
  name: string;
  lvl: Lvl;

  school: MagicSchool;
  actionType: Action;
  castTime: number; // секунд
  duration: number | 'Доки не буде розсіяне або не спрацює' | 'Доки не розсіється або не спрацює'; // секунд, 1 раунд = 6 секунд

  distance: number | 'На себе' | 'Дотик'; // метрів

  reactionCondition?: string;
  target?: string;
  numberOfTargets: number;

  description: string | string[];
  components: {
    c?: boolean;
    t?: boolean;
    m?: string;
  };
  highLvl?: {
    has: boolean;
    from?: number;
    description?: string;
    effect?: string;
  };
  concentration: boolean;
  canEndEarlier: boolean;
  freeWay: boolean;
  self?: boolean;
  area?: string;
  saveThough?: Stats | string;
  attack?: string;
  ritual: boolean;

  damageType: string[];

  source: Source;
}

export default { Action, Class, Lvl, MagicSchool, Source };
