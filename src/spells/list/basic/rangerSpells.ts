enum Lvl1 {
  Alarm = 'Alarm', // Сигнал
  AnimalFriendship = 'AnimalFriendship', // Дружба з тваринами
  CureWounds = 'CureWounds',
  DetectMagic = 'DetectMagic',
  DetectPoisonAndDisease = 'DetectPoisonAndDisease',
  EnsnaringStrike = 'EnsnaringStrike', // Пастка
  FogCloud = 'FogCloud', // Туманна хмара
  Goodberry = 'Goodberry', // Смачна ягода
  HailOfThorns = 'HailOfThorns', // Град шипів
  HunterMark = 'HunterMark', // Мисливська мітка
  Jump = 'Jump', // Стрибок
  Longstrider = 'Longstrider', // Довгоногість
  SpeakWithAnimals = 'SpeakWithAnimals', // Розмова з тваринами
}

enum Lvl2 {
  AnimalMessenger = 'AnimalMessenger', // Поштова тварина
  Barkskin = 'Barkskin', // Кора
  BeastSense = 'BeastSense', // Відчуття тварини
  CordonOfArrows = 'CordonOfArrows', // Ланцюг стріл
  Darkvision = 'Darkvision', // Темновидіння
  EnlargeReduce = 'EnlargeReduce', // Збільшення/Зменшення
  FindTraps = 'FindTraps', // Пошук пасток
  LesserRestoration = 'LesserRestoration', // Мале відновлення
  LocateAnimalsOrPlants = 'LocateAnimalsOrPlants', // Пошук тварин або рослин
  LocateObject = 'LocateObject', //
  PassWithoutTrace = 'PassWithoutTrace', // Прохід без слідів
  ProtectionFromPoison = 'ProtectionFromPoison', // Захист від отрути
  Silence = 'Silence',
  SpikeGrowth = 'SpikeGrowth',
}

enum Lvl3 {
  ConjureAnimals = 'ConjureAnimals',
  ConjureBarrage = 'ConjureBarrage',
  Daylight = 'Daylight',
  LightningArrow = 'LightningArrow',
  Nondetection = 'Nondetection',
  PlantGrowth = 'PlantGrowth',
  ProtectionFromEnergy = 'ProtectionFromEnergy',
  SpeakWithPlants = 'SpeakWithPlants',
  WaterBreathing = 'WaterBreathing',
  WaterWalk = 'WaterWalk',
  WindWall = 'WindWall',
}

enum Lvl4 {
  ConjureWoodlandBeings = 'ConjureWoodlandBeings',
  FreedomOfMovement = 'FreedomOfMovement',
  GraspingVine = 'GraspingVine',
  LocateCreature = 'LocateCreature',
  Stoneskin = 'Stoneskin',
}

enum Lvl5 {
  CommuneWithNature = 'CommuneWithNature',
  ConjureVolley = 'ConjureVolley',
  SwiftQuiver = 'SwiftQuiver',
  TreeStride = 'TreeStride',
}

const RangerSpells = {
  ...Lvl1,
  ...Lvl2,
  ...Lvl3,
  ...Lvl4,
  ...Lvl5,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RangerSpells = typeof RangerSpells;

export { RangerSpells, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5 };

export default { AllSpells: RangerSpells, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5 };
