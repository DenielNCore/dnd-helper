enum Lvl0 {
  Guidance = 'Guidance',
  Light = 'Light',
  Mending = 'Mending',
  Resistance = 'Resistance',
  SacredFlame = 'SacredFlame',
  SpareTheDying = 'SpareTheDying',
  Thaumaturgy = 'Thaumaturgy',
}

enum Lvl1 {
  Bane = 'Bane',
  Bless = 'Bless',
  Command = 'Command',
  CreateOrDestroyWater = 'CreateOrDestroyWater',
  CureWounds = 'CureWounds',
  DetectEvilAndGood = 'DetectEvilAndGood',
  DetectMagic = 'DetectMagic',
  DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  GuidingBolt = 'GuidingBolt',
  HealingWord = 'HealingWord',
  InflictWounds = 'InflictWounds',
  ProtectionFromEvilAndGood = 'ProtectionFromEvilAndGood',
  PurifyFoodAndDrink = 'PurifyFoodAndDrink',
  Sanctuary = 'Sanctuary',
  ShieldOfFaith = 'ShieldOfFaith',
}

enum Lvl2 {
  Aid = 'Aid',
  Augury = 'Augury',
  BlindnessDeafness = 'BlindnessDeafness',
  CalmEmotions = 'CalmEmotions',
  ContinualFlame = 'ContinualFlame',
  EnhanceAbility = 'EnhanceAbility',
  FindTraps = 'FindTraps',
  GentleRepose = 'GentleRepose',
  HoldPerson = 'HoldPerson',
  LesserRestoration = 'LesserRestoration',
  LocateObject = 'LocateObject',
  PrayerOfHealing = 'PrayerOfHealing',
  ProtectionFromPoison = 'ProtectionFromPoison',
  Silence = 'Silence',
  SpiritualWeapon = 'SpiritualWeapon',
  WardingBond = 'WardingBond',
  ZoneOfTruth = 'ZoneOfTruth',
}

enum Lvl3 {
  BeaconOfHope = 'BeaconOfHope',
  BestowCurse = 'BestowCurse',
  Clairvoyance = 'Clairvoyance',
  CreateFoodAndWater = 'CreateFoodAndWater',
  Daylight = 'Daylight',
  DispelMagic = 'DispelMagic',
  FeignDeath = 'FeignDeath',
  GlyphOfWarding = 'GlyphOfWarding',
  MagicCircle = 'MagicCircle',
  MassHealingWord = 'MassHealingWord',
  MeldIntoStone = 'MeldIntoStone',
  ProtectionFromEnergy = 'ProtectionFromEnergy',
  RemoveCurse = 'RemoveCurse',
  Revivify = 'Revivify',
  Sending = 'Sending',
  SpeakWithDead = 'SpeakWithDead',
  SpiritGuardians = 'SpiritGuardians',
  Tongues = 'Tongues',
  WaterWalk = 'WaterWalk',
}

enum Lvl4 {
  Banishment = 'Banishment',
  ControlWater = 'ControlWater',
  DeathWard = 'DeathWard',
  Divination = 'Divination',
  FreedomOfMovement = 'FreedomOfMovement',
  GuardianOfFaith = 'GuardianOfFaith',
  LocateCreature = 'LocateCreature',
  StoneShape = 'StoneShape',
}

enum Lvl5 {
  Commune = 'Commune',
  Contagion = 'Contagion',
  DispelEvilAndGood = 'DispelEvilAndGood',
  FlameStrike = 'FlameStrike',
  Geas = 'Geas',
  GreaterRestoration = 'GreaterRestoration',
  Hallow = 'Hallow',
  InsectPlague = 'InsectPlague',
  LegendLore = 'LegendLore',
  MassCureWounds = 'MassCureWounds',
  PlanarBinding = 'PlanarBinding',
  RaiseDead = 'RaiseDead',
  Scrying = 'Scrying',
}

enum Lvl6 {
  BladeBarrier = 'BladeBarrier',
  CreateUndead = 'CreateUndead',
  FindThePath = 'FindThePath',
  Harm = 'Harm',
  Heal = 'Heal',
  HeroesFeast = 'HeroesFeast',
  PlanarAlly = 'PlanarAlly',
  TrueSeeing = 'TrueSeeing',
  WordOfRecall = 'WordOfRecall',
}

enum Lvl7 {
  ConjureCelestial = 'ConjureCelestial',
  DivineWord = 'DivineWord',
  Etherealness = 'Etherealness',
  FireStorm = 'FireStorm',
  PlaneShift = 'PlaneShift',
  Regenerate = 'Regenerate',
  Resurrection = 'Resurrection',
  Symbol = 'Symbol',
}

enum Lvl8 {
  AntimagicField = 'AntimagicField',
  ControlWeather = 'ControlWeather',
  Earthquake = 'Earthquake',
  HolyAura = 'HolyAura',
}

enum Lvl9 {
  AstralProjection = 'AstralProjection',
  Gate = 'Gate',
  MassHeal = 'MassHeal',
  TrueResurrection = 'TrueResurrection',
}

const ClericSpells = {
  ...Lvl0,
  ...Lvl1,
  ...Lvl2,
  ...Lvl3,
  ...Lvl4,
  ...Lvl5,
  ...Lvl6,
  ...Lvl7,
  ...Lvl8,
  ...Lvl9,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ClericSpells = typeof ClericSpells;

export { ClericSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7, Lvl8, Lvl9 };

export default {
  AllSpells: ClericSpells,
  Lvl0,
  Lvl1,
  Lvl2,
  Lvl3,
  Lvl4,
  Lvl5,
  Lvl6,
  Lvl7,
  Lvl8,
  Lvl9,
};
