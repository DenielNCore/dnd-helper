enum Lvl0 {
  Druidcraft = 'Druidcraft',
  Guidance = 'Guidance',
  Mending = 'Mending',
  PoisonSpray = 'PoisonSpray',
  ProduceFlame = 'ProduceFlame',
  Resistance = 'Resistance',
  Shillelagh = 'Shillelagh',
  ThornWhip = 'ThornWhip',
}

enum Lvl1 {
  AnimalFriendship = 'AnimalFriendship',
  CharmPerson = 'CharmPerson',
  CreateOrDestroyWater = 'CreateOrDestroyWater',
  CureWounds = 'CureWounds',
  DetectMagic = 'DetectMagic',
  DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  Entangle = 'Entangle',
  FaerieFire = 'FaerieFire',
  FogCloud = 'FogCloud',
  Goodberry = 'Goodberry',
  HealingWord = 'HealingWord',
  Jump = 'Jump',
  Longstrider = 'Longstrider',
  PurifyFoodAndDrink = 'PurifyFoodAndDrink',
  SpeakWithAnimals = 'SpeakWithAnimals',
  Thunderwave = 'Thunderwave',
}

enum Lvl2 {
  AnimalMessenger = 'AnimalMessenger',
  Barkskin = 'Barkskin',
  BeastSense = 'BeastSense',
  Darkvision = 'Darkvision',
  EnhanceAbility = 'EnhanceAbility',
  FindTraps = 'FindTraps',
  FlameBlade = 'FlameBlade',
  FlamingSphere = 'FlamingSphere',
  GustOfWind = 'GustOfWind',
  HeatMetal = 'HeatMetal',
  HoldPerson = 'HoldPerson',
  LesserRestoration = 'LesserRestoration',
  LocateAnimalsOrPlants = 'LocateAnimalsOrPlants',
  LocateObject = 'LocateObject',
  Moonbeam = 'Moonbeam',
  PassWithoutTrace = 'PassWithoutTrace',
  ProtectionFromPoison = 'ProtectionFromPoison',
  SpikeGrowth = 'SpikeGrowth',
}

enum Lvl3 {
  CallLightning = 'CallLightning',
  ConjureAnimals = 'ConjureAnimals',
  Daylight = 'Daylight',
  DispelMagic = 'DispelMagic',
  FeignDeath = 'FeignDeath',
  MeldIntoStone = 'MeldIntoStone',
  PlantGrowth = 'PlantGrowth',
  ProtectionFromEnergy = 'ProtectionFromEnergy',
  SleetStorm = 'SleetStorm',
  SpeakWithPlants = 'SpeakWithPlants',
  WaterBreathing = 'WaterBreathing',
  WaterWalk = 'WaterWalk',
  WindWall = 'WindWall',
}

enum Lvl4 {
  Blight = 'Blight',
  Confusion = 'Confusion',
  ConjureMinorElementals = 'ConjureMinorElementals',
  ConjureWoodlandBeings = 'ConjureWoodlandBeings',
  ControlWater = 'ControlWater',
  DominateBeast = 'DominateBeast',
  FreedomOfMovement = 'FreedomOfMovement',
  GiantInsect = 'GiantInsect',
  GraspingVine = 'GraspingVine',
  HallucinatoryTerrain = 'HallucinatoryTerrain',
  IceStorm = 'IceStorm',
  LocateCreature = 'LocateCreature',
  Polymorph = 'Polymorph',
  StoneShape = 'StoneShape',
  Stoneskin = 'Stoneskin',
  WallOfFire = 'WallOfFire',
}

enum Lvl5 {
  AntilifeShell = 'AntilifeShell',
  Awaken = 'Awaken',
  CommuneWithNature = 'CommuneWithNature',
  ConjureElemental = 'ConjureElemental',
  Contagion = 'Contagion',
  Geas = 'Geas',
  GreaterRestoration = 'GreaterRestoration',
  InsectPlague = 'InsectPlague',
  MassCureWounds = 'MassCureWounds',
  PlanarBinding = 'PlanarBinding',
  Reincarnate = 'Reincarnate',
  Scrying = 'Scrying',
  TreeStride = 'TreeStride',
  WallOfStone = 'WallOfStone',
}

enum Lvl6 {
  ConjureFey = 'ConjureFey',
  FindThePath = 'FindThePath',
  Heal = 'Heal',
  HeroesFeast = 'HeroesFeast',
  MoveEarth = 'MoveEarth',
  Sunbeam = 'Sunbeam',
  TransportViaPlants = 'TransportViaPlants',
  WallOfThorns = 'WallOfThorns',
  WindWalk = 'WindWalk',
}

enum Lvl7 {
  FireStorm = 'FireStorm',
  MirageArcane = 'MirageArcane',
  PlaneShift = 'PlaneShift',
  Regenerate = 'Regenerate',
  ReverseGravity = 'ReverseGravity',
}

enum Lvl8 {
  AnimalShapes = 'AnimalShapes',
  AntipathySympathy = 'AntipathySympathy',
  ControlWeather = 'ControlWeather',
  Earthquake = 'Earthquake',
  Feeblemind = 'Feeblemind',
  Sunburst = 'Sunburst',
  Tsunami = 'Tsunami',
}

enum Lvl9 {
  Foresight = 'Foresight',
  Shapechange = 'Shapechange',
  StormOfVengeance = 'StormOfVengeance',
  TrueResurrection = 'TrueResurrection',
}

const DruidSpells = {
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
export type DruidSpells = typeof DruidSpells;

export { DruidSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7, Lvl8, Lvl9 };
export default {
  AllSpells: DruidSpells,
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
