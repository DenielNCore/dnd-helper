enum Lvl0 {
  Thunderclap = 'Thunderclap',
}
enum Lvl1 {
  EarthTremor = 'EarthTremor', // Землетрус
}

enum Lvl2 {
  Pyrotechnics = 'Pyrotechnics', // Пиротехника
  Skywrite = 'Skywrite', // Небесная надпись
  WardingWind = 'WardingWind', // Ветер защиты
}

const BardSpells = {
  ...Lvl0,
  ...Lvl1,
  ...Lvl2,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type BardSpells = typeof BardSpells;

export { BardSpells, Lvl0, Lvl1, Lvl2 };

export default {
  AllSpells: BardSpells,
  Lvl0,
  Lvl1,
  Lvl2,
};
