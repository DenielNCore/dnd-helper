enum Lvl1 {
  Bless = 'Bless',
  Command = 'Command',
  CompelledDuel = 'CompelledDuel',
  CureWounds = 'CureWounds',
  DetectEvilAndGood = 'DetectEvilAndGood',
  DetectMagic = 'DetectMagic',
  DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  DivineFavor = 'DivineFavor',
  Heroism = 'Heroism',
  ProtectionFromEvilAndGood = 'ProtectionFromEvilAndGood',
  PurifyFoodAndDrink = 'PurifyFoodAndDrink',
  SearingSmite = 'SearingSmite',
  ShieldOfFaith = 'ShieldOfFaith',
  ThunderousSmite = 'ThunderousSmite',
  WrathfulSmite = 'WrathfulSmite',
}

enum Lvl2 {
  Aid = 'Aid',
  BrandingSmite = 'BrandingSmite',
  FindSteed = 'FindSteed',
  LesserRestoration = 'LesserRestoration',
  LocateObject = 'LocateObject',
  MagicWeapon = 'MagicWeapon',
  ProtectionFromPoison = 'ProtectionFromPoison',
  ZoneOfTruth = 'ZoneOfTruth',
}

enum Lvl3 {
  AuraOfVitality = 'AuraOfVitality',
  BlindingSmite = 'BlindingSmite',
  CreateFoodAndWater = 'CreateFoodAndWater',
  CrusadersMantle = 'CrusadersMantle',
  Daylight = 'Daylight',
  DispelMagic = 'DispelMagic',
  ElementalWeapon = 'ElementalWeapon',
  MagicCircle = 'MagicCircle',
  RemoveCurse = 'RemoveCurse',
  Revivify = 'Revivify',
}

enum Lvl4 {
  AuraOfLife = 'AuraOfLife',
  AuraOfPurity = 'AuraOfPurity',
  Banishment = 'Banishment',
  DeathWard = 'DeathWard',
  LocateCreature = 'LocateCreature',
  StaggeringSmite = 'StaggeringSmite',
}

enum Lvl5 {
  BanishingSmite = 'BanishingSmite',
  CircleOfPower = 'CircleOfPower',
  DestructiveSmite = 'DestructiveSmite',
  DispelEvilAndGood = 'DispelEvilAndGood',
  Geas = 'Geas',
  RaiseDead = 'RaiseDead',
}

const PaladinSpells = {
  ...Lvl1,
  ...Lvl2,
  ...Lvl3,
  ...Lvl4,
  ...Lvl5,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PaladinSpells = typeof PaladinSpells;

export { PaladinSpells, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5 };

export default { AllSpells: PaladinSpells, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5 };
