enum Lvl0 {
  CreateBonfire = 'CreateBonfire', // Створити вогнище
  Frostbite = 'Frostbite', // Обмороження
  MagicStone = 'MagicStone', // Магічний камінь
  Thunderclap = 'Thunderclap', // Громовий хлопок
}

enum Lvl2 {
  Earthbind = 'Earthbind', // Землев’яз
}

enum Lvl4 {
  ElementalBane = 'ElementalBane', // Елементальне прокляття
}

enum Lvl6 {
  InvestitureOfFlame = 'InvestitureOfFlame', // Вкладення вогню
  InvestitureOfIce = 'InvestitureOfIce', // Вкладення льоду
  InvestitureOfStone = 'InvestitureOfStone', // Вкладення каменю
  InvestitureOfWind = 'InvestitureOfWind', // Вкладення вітру
}

const WarlockSpells = {
  ...Lvl0,
  ...Lvl2,
  ...Lvl4,
  ...Lvl6,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type WarlockSpells = typeof WarlockSpells;

export { WarlockSpells, Lvl0, Lvl2, Lvl4, Lvl6 };

export default {
  AllSpells: WarlockSpells,
  Lvl0,
  Lvl2,
  Lvl4,
  Lvl6,
};
