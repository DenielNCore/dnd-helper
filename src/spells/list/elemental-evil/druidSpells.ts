enum Lvl0 {
  CreateBonfire = 'CreateBonfire', // Створити вогнище
  ControlFlames = 'ControlFlames', // Контроль полум’я
  Frostbite = 'Frostbite', // Обмороження
  Gust = 'Gust', // Порив
  MagicStone = 'MagicStone', // Магічний камінь
  MoldEarth = 'MoldEarth', // Формувати землю
  ShapeWater = 'ShapeWater', // Формувати воду
  Thunderclap = 'Thunderclap', // Громовий хлопок
}
enum Lvl1 {
  AbsorbElements = 'AbsorbElements', // Поглинання елементів
  BeastBond = 'BeastBond', // Зв’язок з твариною
  IceKnife = 'IceKnife', // Лідяний ніж
  EarthTremor = 'EarthTremor', // Землетрус
}

enum Lvl2 {
  DustDevil = 'DustDevil', // Пиловий диявол
  Earthbind = 'Earthbind', // Землев’яз
  Skywrite = 'Skywrite', // Напис у небі
  WardingWind = 'WardingWind', // Вітер захисту
}

enum Lvl3 {
  EruptingEarth = 'EruptingEarth', // Виверження землі
  FlameArrows = 'FlameArrows', // Вогняні стріли
  TidalWave = 'TidalWave', // Припливна хвиля
  WallOfWater = 'WallOfWater', // Стіна води
}

enum Lvl4 {
  ElementalBane = 'ElementalBane', // Елементальне прокляття
  WaterySphere = 'WaterySphere', // Водяна сфера
}

enum Lvl5 {
  ControlWinds = 'ControlWinds', // Контроль вітрів
  Maelstrom = 'Maelstrom', // Водоворот
  TransmuteRock = 'TransmuteRock', // Трансмутація каменю
}

enum Lvl6 {
  BonesOfTheEarth = 'BonesOfTheEarth', // Кістки землі
  InvestitureOfFlame = 'InvestitureOfFlame', // Вкладення вогню
  InvestitureOfIce = 'InvestitureOfIce', // Вкладення льоду
  InvestitureOfStone = 'InvestitureOfStone', // Вкладення каменю
  InvestitureOfWind = 'InvestitureOfWind', // Вкладення вітру
  PrimordialWard = 'PrimordialWard', // Первісний захист
}

enum Lvl7 {
  Whirlwind = 'Whirlwind', // Вихор
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
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type DruidSpells = typeof DruidSpells;

export { DruidSpells, Lvl0, Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, Lvl6, Lvl7 };

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
};
