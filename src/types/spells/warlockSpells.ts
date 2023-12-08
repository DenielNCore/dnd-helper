enum Lvl0 {
  BladeWard = 'BladeWard',
  ChillTouch = 'ChillTouch',
  EldritchBlast = 'EldritchBlast',
  Friends = 'Friends',
  MageHand = 'MageHand',
  MinorIllusion = 'MinorIllusion',
  PoisonSpray = 'PoisonSpray',
  Prestidigitation = 'Prestidigitation',
  TrueStrike = 'TrueStrike',
}

enum Lvl1 {
  ArmorOfAgathys = 'ArmorOfAgathys',
  ArmsOfHadar = 'ArmsOfHadar',
  CharmPerson = 'CharmPerson',
  ComprehendLanguages = 'ComprehendLanguages',
  ExpeditiousRetreat = 'ExpeditiousRetreat',
  HellishRebuke = 'HellishRebuke',
  Hex = 'Hex',
  IllusoryScript = 'IllusoryScript',
  ProtectionFromEvilAndGood = 'ProtectionFromEvilAndGood',
  UnseenServant = 'UnseenServant',
  WitchBolt = 'WitchBolt',
}

enum Lvl2 {
  CloudOfDarkness = 'CloudOfDarkness',
  CrownOfMadness = 'CrownOfMadness',
  Darkness = 'Darkness',
  Enthrall = 'Enthrall',
  HoldPerson = 'HoldPerson',
  Invisibility = 'Invisibility',
  MirrorImage = 'MirrorImage',
  MistyStep = 'MistyStep',
  RayOfEnfeeblement = 'RayOfEnfeeblement',
  Shatter = 'Shatter',
  SpiderClimb = 'SpiderClimb',
  Suggestion = 'Suggestion',
}

enum Lvl3 {
  Counterspell = 'Counterspell',
  DispelMagic = 'DispelMagic',
  Fear = 'Fear',
  Fly = 'Fly',
  GaseousForm = 'GaseousForm',
  HungerOfHadar = 'HungerOfHadar',
  HypnoticPattern = 'HypnoticPattern',
  MagicCircle = 'MagicCircle',
  MajorImage = 'MajorImage',
  RemoveCurse = 'RemoveCurse',
  Tongues = 'Tongues',
  VampiricTouch = 'VampiricTouch',
}

enum Lvl4 {
  Banishment = 'Banishment',
  Blight = 'Blight',
  DimensionDoor = 'DimensionDoor',
  HallucinatoryTerrain = 'HallucinatoryTerrain',
}

enum Lvl5 {
  ContactOtherPlane = 'ContactOtherPlane',
  Dream = 'Dream',
  HoldMonster = 'HoldMonster',
  Scrying = 'Scrying',
}

enum Lvl6 {
  ArcaneGate = 'ArcaneGate',
  CircleOfDeath = 'CircleOfDeath',
  ConjureFey = 'ConjureFey',
  CreateUndead = 'CreateUndead',
  Eyebite = 'Eyebite',
  FleshToStone = 'FleshToStone',
  MassSuggestion = 'MassSuggestion',
  TrueSeeing = 'TrueSeeing',
}

enum Lvl7 {
  Etherealness = 'Etherealness',
  FingerOfDeath = 'FingerOfDeath',
  Forcecage = 'Forcecage',
  PlaneShift = 'PlaneShift',
}

enum Lvl8 {
  Demiplane = 'Demiplane',
  DominateMonster = 'DominateMonster',
  Feeblemind = 'Feeblemind',
  Glibness = 'Glibness',
  PowerWordStun = 'PowerWordStun',
}

enum Lvl9 {
  AstralProjection = 'AstralProjection',
  Foresight = 'Foresight',
  Imprisonment = 'Imprisonment',
  PowerWordKill = 'PowerWordKill',
  TruePolymorph = 'TruePolymorph',
}

const WarlockSpells = {
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
export type WarlockSpells = typeof WarlockSpells;

export { WarlockSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7, Lvl8, Lvl9 };
export default {
  AllSpells: WarlockSpells,
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
