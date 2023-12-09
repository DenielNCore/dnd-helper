export enum Spell {
  none = '',

  // 0 all
  BladeWard = 'BladeWard',
  DancingLights = 'DancingLights',
  Friends = 'Friends',
  Light = 'Light',
  MageHand = 'MageHand',
  Mending = 'Mending',
  Message = 'Message',
  MinorIllusion = 'MinorIllusion',
  Prestidigitation = 'Prestidigitation',
  TrueStrike = 'TrueStrike',
  ViciousMockery = 'ViciousMockery',
  Guidance = 'Guidance',
  Resistance = 'Resistance',
  SacredFlame = 'SacredFlame',
  SpareTheDying = 'SpareTheDying',
  Thaumaturgy = 'Thaumaturgy',
  Druidcraft = 'Druidcraft',
  PoisonSpray = 'PoisonSpray',
  ProduceFlame = 'ProduceFlame',
  Shillelagh = 'Shillelagh',
  ThornWhip = 'ThornWhip',
  AcidSplash = 'AcidSplash',
  ChillTouch = 'ChillTouch',
  FireBolt = 'FireBolt',
  RayOfFrost = 'RayOfFrost',
  ShockingGrasp = 'ShockingGrasp',
  EldritchBlast = 'EldritchBlast',

  // 1
  // bard
  // AnimalFriendship = 'AnimalFriendship',
  // Bane = 'Bane',
  // CharmPerson = 'CharmPerson',
  // ComprehendLanguages = 'ComprehendLanguages',
  // CureWounds = 'CureWounds',
  // DetectMagic = 'DetectMagic',
  // DisguiseSelf = 'DisguiseSelf',
  // DissonantWhispers = 'DissonantWhispers',
  // FaerieFire = 'FaerieFire',
  // FeatherFall = 'FeatherFall',
  // HealingWord = 'HealingWord',
  // Heroism = 'Heroism',
  // Identify = 'Identify',
  // IllusoryScript = 'IllusoryScript',
  // Longstrider = 'Longstrider',
  // SilentImage = 'SilentImage',
  // Sleep = 'Sleep',
  // SpeakWithAnimals = 'SpeakWithAnimals',
  // TashaHideousLaughter = 'TashaHideousLaughter',
  // Thunderwave = 'Thunderwave',
  // UnseenServant = 'UnseenServant',
  //
  // // cleric
  // // Bane = 'Bane',
  // Bless = 'Bless',
  // Command = 'Command',
  // CreateOrDestroyWater = 'CreateOrDestroyWater',
  // // CureWounds = 'CureWounds',
  // DetectEvilAndGood = 'DetectEvilAndGood',
  // // DetectMagic = 'DetectMagic',
  // DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  // GuidingBolt = 'GuidingBolt',
  // // HealingWord = 'HealingWord',
  // InflictWounds = 'InflictWounds',
  // ProtectionFromEvilAndGood = 'ProtectionFromEvilAndGood',
  // PurifyFoodAndDrink = 'PurifyFoodAndDrink',
  // Sanctuary = 'Sanctuary',
  // ShieldOfFaith = 'ShieldOfFaith',
  //
  // // druid
  // AnimalFriendship = 'AnimalFriendship',
  // CharmPerson = 'CharmPerson',
  // CreateOrDestroyWater = 'CreateOrDestroyWater',
  // CureWounds = 'CureWounds',
  // DetectMagic = 'DetectMagic',
  // DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  // Entangle = 'Entangle',
  // FaerieFire = 'FaerieFire',
  // FogCloud = 'FogCloud',
  // Goodberry = 'Goodberry',
  // HealingWord = 'HealingWord',
  // Jump = 'Jump',
  // Longstrider = 'Longstrider',
  // PurifyFoodAndDrink = 'PurifyFoodAndDrink',
  // SpeakWithAnimals = 'SpeakWithAnimals',
  // Thunderwave = 'Thunderwave',

  // paladin

  // AuraOfLife = 'AuraOfLife',
  // FeignDeath = 'FeignDeath',
  // HeroesFeast = 'HeroesFeast',
  // DivineFavor = 'DivineFavor',
  // Bless = 'Bless',
  // Fireball = 'Fireball',
  // DetectMagic = 'DetectMagic',
}
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
  lvl: number;

  school: MagicSchool;
  actionType: Action;
  castTime: number; // секунд
  duration: number | 'Доки не буде розсіяне або не спрацює' | 'Доки не розсіється або не спрацює'; // секунд, 1 раунд = 6 секунд

  distance: number | 'На себе' | 'Дотик'; // метрів

  reactionCondition?: string;
  target?: string;
  numberOfTargets: number;

  description: string;
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
  saveThough?: string;
  attack?: string;
  ritual: boolean;

  damageType: string[];

  source: Source;
}

export default { Action, Class, Spell, Lvl, MagicSchool, Source };
