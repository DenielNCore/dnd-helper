enum Lvl1 {
  AbsorbElements = 'AbsorbElements', // Поглинання елементів
  BeastBond = 'BeastBond', // Зв’язок з твариною
}

enum Lvl3 {
  FlameArrows = 'FlameArrows', // Вогняні стріли
}

const RangerSpells = {
  ...Lvl1,
  ...Lvl3,
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare type RangerSpells = typeof RangerSpells;

export { RangerSpells, Lvl1, Lvl3 };

export default {
  AllSpells: RangerSpells,
  Lvl1,
  Lvl3,
};
