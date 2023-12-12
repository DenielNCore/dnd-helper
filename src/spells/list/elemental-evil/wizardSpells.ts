enum Lvl0 {
  CreateBonfire = 'CreateBonfire', // Створити вогнище
  ControlFlames = 'ControlFlames', // Контроль полум’я
  Frostbite = 'Frostbite', // Обмороження
  Gust = 'Gust', // Порив
  MoldEarth = 'MoldEarth', // Формувати землю
  ShapeWater = 'ShapeWater', // Формувати воду
  Thunderclap = 'Thunderclap', // Громовий хлопок
}
enum Lvl1 {
  AbsorbElements = 'AbsorbElements', // Поглинання елементів
  Catapult = 'Catapult', // Катапульта
  IceKnife = 'IceKnife', // Лідяний ніж
  EarthTremor = 'EarthTremor', // Землетрус
}

enum Lvl2 {
  AganazzarsScorcher = 'AganazzarsScorcher', // Палючий потік Аганаззара
  DustDevil = 'DustDevil', // Пиловий диявол
  Earthbind = 'Earthbind', // Землев’яз
  MaximiliansEarthenGrasp = 'MaximiliansEarthenGrasp', // Земна хватка Максиміліана
  Pyrotechnics = 'Pyrotechnics', // Піротехніка
  Skywrite = 'Skywrite', // Напис у небі
  SnillocsSnowballSwarm = 'SnillocsSnowballSwarm', // Сніллока: сніжний шквал
}

enum Lvl3 {
  EruptingEarth = 'EruptingEarth', // Виверження землі
  FlameArrows = 'FlameArrows', // Вогняні стріли
  MelfsMinuteMeteors = 'MelfsMinuteMeteors', // Метеори Мелфа
  TidalWave = 'TidalWave', // Припливна хвиля
  WallOfSand = 'WallOfSand', // Стіна піску
  WallOfWater = 'WallOfWater', // Стіна води
}

enum Lvl4 {
  ElementalBane = 'ElementalBane', // Елементальне прокляття
  StormSphere = 'StormSphere', // Буревійна сфера
  VitriolicSphere = 'VitriolicSphere', // Кислотна сфера
  WaterySphere = 'WaterySphere', // Водяна сфера
}

enum Lvl5 {
  ControlWinds = 'ControlWinds', // Контроль вітрів
  Immolation = 'Immolation', // Віддання в полум’ї
  TransmuteRock = 'TransmuteRock', // Трансмутація каменю
}

enum Lvl6 {
  InvestitureOfFlame = 'InvestitureOfFlame', // Вкладення вогню
  InvestitureOfIce = 'InvestitureOfIce', // Вкладення льоду
  InvestitureOfStone = 'InvestitureOfStone', // Вкладення каменю
  InvestitureOfWind = 'InvestitureOfWind', // Вкладення вітру
}

enum Lvl7 {
  Whirlwind = 'Whirlwind', // Вихор
}

enum Lvl8 {
  AbiDalzimsHorridWilting = 'AbiDalzimsHorridWilting', // Жахливе в’янення Абі-Далзіма
}

const WizardSpells = {
  ...Lvl0,
  ...Lvl1,
  ...Lvl2,
  ...Lvl3,
  ...Lvl4,
  ...Lvl5,
  ...Lvl6,
  ...Lvl7,
  ...Lvl8,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type WizardSpells = typeof WizardSpells;

export { WizardSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7, Lvl8 };

export default {
  AllSpells: WizardSpells,
  Lvl0,
  Lvl1,
  Lvl2,
  Lvl3,
  Lvl4,
  Lvl5,
  Lvl6,
  Lvl7,
  Lvl8,
};
