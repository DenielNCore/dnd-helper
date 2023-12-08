enum Lvl0 {
  AcidSplash = 'AcidSplash',
  BladeWard = 'BladeWard',
  ChillTouch = 'ChillTouch',
  DancingLights = 'DancingLights',
  FireBolt = 'FireBolt',
  Friends = 'Friends',
  Light = 'Light',
  MageHand = 'MageHand',
  Mending = 'Mending',
  Message = 'Message',
  MinorIllusion = 'MinorIllusion',
  PoisonSpray = 'PoisonSpray',
  Prestidigitation = 'Prestidigitation',
  RayOfFrost = 'RayOfFrost',
  ShockingGrasp = 'ShockingGrasp',
  TrueStrike = 'TrueStrike',
}

enum Lvl1 {
  BurningHands = 'BurningHands',
  CharmPerson = 'CharmPerson',
  ChromaticOrb = 'ChromaticOrb',
  ColorSpray = 'ColorSpray',
  ComprehendLanguages = 'ComprehendLanguages',
  DetectMagic = 'DetectMagic',
  DisguiseSelf = 'DisguiseSelf',
  ExpeditiousRetreat = 'ExpeditiousRetreat',
  FalseLife = 'FalseLife',
  FeatherFall = 'FeatherFall',
  FogCloud = 'FogCloud',
  Jump = 'Jump',
  MageArmor = 'MageArmor',
  MagicMissile = 'MagicMissile',
  RayOfSickness = 'RayOfSickness',
  Shield = 'Shield',
  SilentImage = 'SilentImage',
  Sleep = 'Sleep',
  Thunderwave = 'Thunderwave',
  WitchBolt = 'WitchBolt',
}

enum Lvl2 {
  AlterSelf = 'AlterSelf',
  BlindnessDeafness = 'BlindnessDeafness',
  Blur = 'Blur',
  CloudOfDaggers = 'CloudOfDaggers',
  CrownOfMadness = 'CrownOfMadness',
  Darkness = 'Darkness',
  Darkvision = 'Darkvision',
  DetectThoughts = 'DetectThoughts',
  EnhanceAbility = 'EnhanceAbility',
  EnlargeReduce = 'EnlargeReduce',
  GustOfWind = 'GustOfWind',
  HoldPerson = 'HoldPerson',
  Invisibility = 'Invisibility',
  Knock = 'Knock',
  Levitate = 'Levitate',
  MirrorImage = 'MirrorImage',
  MistyStep = 'MistyStep',
  PhantasmalForce = 'PhantasmalForce',
  ScorchingRay = 'ScorchingRay',
  SeeInvisibility = 'SeeInvisibility',
  Shatter = 'Shatter',
  SpiderClimb = 'SpiderClimb',
  Suggestion = 'Suggestion',
  Web = 'Web',
}

enum Lvl3 {
  Blink = 'Blink',
  Clairvoyance = 'Clairvoyance',
  Counterspell = 'Counterspell',
  DispelMagic = 'DispelMagic',
  Fear = 'Fear',
  Fireball = 'Fireball',
  Fly = 'Fly',
  GaseousForm = 'GaseousForm',
  Haste = 'Haste',
  HypnoticPattern = 'HypnoticPattern',
  LightningBolt = 'LightningBolt',
  MajorImage = 'MajorImage',
  ProtectionFromEnergy = 'ProtectionFromEnergy',
  SleetStorm = 'SleetStorm',
  Slow = 'Slow',
  StinkingCloud = 'StinkingCloud',
  Tongues = 'Tongues',
  WaterBreathing = 'WaterBreathing',
  WaterWalk = 'WaterWalk',
}

enum Lvl4 {
  Banishment = 'Banishment',
  Blight = 'Blight',
  Confusion = 'Confusion',
  DimensionDoor = 'DimensionDoor',
  DominateBeast = 'DominateBeast',
  EvardsBlackTentacles = 'EvardsBlackTentacles',
  FireShield = 'FireShield',
  GreaterInvisibility = 'GreaterInvisibility',
  IceStorm = 'IceStorm',
  Polymorph = 'Polymorph',
  Stoneskin = 'Stoneskin',
  WallOfFire = 'WallOfFire',
}

enum Lvl5 {
  AnimateObjects = 'AnimateObjects',
  Cloudkill = 'Cloudkill',
  ConeOfCold = 'ConeOfCold',
  Creation = 'Creation',
  DominatePerson = 'DominatePerson',
  HoldMonster = 'HoldMonster',
  InsectPlague = 'InsectPlague',
  Seeming = 'Seeming',
  Telekinesis = 'Telekinesis',
  TeleportationCircle = 'TeleportationCircle',
  WallOfStone = 'WallOfStone',
}

enum Lvl6 {
  ArcaneGate = 'ArcaneGate',
  ChainLightning = 'ChainLightning',
  CircleOfDeath = 'CircleOfDeath',
  Disintegrate = 'Disintegrate',
  Eyebite = 'Eyebite',
  GlobeOfInvulnerability = 'GlobeOfInvulnerability',
  MassSuggestion = 'MassSuggestion',
  MoveEarth = 'MoveEarth',
  Sunbeam = 'Sunbeam',
  TrueSeeing = 'TrueSeeing',
}

enum Lvl7 {
  DelayedBlastFireball = 'DelayedBlastFireball',
  Etherealness = 'Etherealness',
  FingerOfDeath = 'FingerOfDeath',
  FireStorm = 'FireStorm',
  PlaneShift = 'PlaneShift',
  PrismaticSpray = 'PrismaticSpray',
  ReverseGravity = 'ReverseGravity',
  Teleport = 'Teleport',
}

enum Lvl8 {
  DominateMonster = 'DominateMonster',
  Earthquake = 'Earthquake',
  IncendiaryCloud = 'IncendiaryCloud',
  PowerWordStun = 'PowerWordStun',
  Sunburst = 'Sunburst',
}

enum Lvl9 {
  Gate = 'Gate',
  MeteorSwarm = 'MeteorSwarm',
  PowerWordKill = 'PowerWordKill',
  TimeStop = 'TimeStop',
  Wish = 'Wish',
}

const SorcererSpells = {
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
export type SorcererSpells = typeof SorcererSpells;

export { SorcererSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7, Lvl8, Lvl9 };
export default {
  AllSpells: SorcererSpells,
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
