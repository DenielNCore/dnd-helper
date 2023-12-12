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
  SnillocsSnowballSwarm = 'SnillocsSnowballSwarm', // Сніллока: сніжний шквал
  WardingWind = 'WardingWind', // Вітер захисту
}

enum Lvl3 {
  EruptingEarth = 'EruptingEarth', // Виверження землі
  FlameArrows = 'FlameArrows', // Вогняні стріли
  MelfsMinuteMeteors = 'MelfsMinuteMeteors', // Метеори Мелфа
  WallOfWater = 'WallOfWater', // Стіна води
}

enum Lvl4 {
  StormSphere = 'StormSphere', // Буревійна сфера
  VitriolicSphere = 'VitriolicSphere', // Кислотна сфера
  WaterySphere = 'WaterySphere', // Водяна сфера
}

enum Lvl5 {
  ControlWinds = 'ControlWinds', // Контроль вітрів
  Immolation = 'Immolation', // Віддання в полум’ї
}

enum Lvl6 {
  InvestitureOfFlame = 'InvestitureOfFlame', // Вкладення вогню
  InvestitureOfIce = 'InvestitureOfIce', // Вкладення льоду
  InvestitureOfStone = 'InvestitureOfStone', // Вкладення каменю
  InvestitureOfWind = 'InvestitureOfWind', // Вкладення вітру
}

enum Lvl8 {
  AbiDalzimsHorridWilting = 'AbiDalzimsHorridWilting', // Жахливе в’янення Абі-Далзіма
}

const SorcererSpells = {
  ...Lvl0,
  ...Lvl1,
  ...Lvl2,
  ...Lvl3,
  ...Lvl4,
  ...Lvl5,
  ...Lvl6,
  ...Lvl8,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type SorcererSpells = typeof SorcererSpells;

export { SorcererSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl8 };

export default {
  AllSpells: SorcererSpells,
  Lvl0,
  Lvl1,
  Lvl2,
  Lvl3,
  Lvl4,
  Lvl5,
  Lvl6,
  Lvl8,
};
