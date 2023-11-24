import { MagicSchool, Lvl, Class, Action } from '@/types/spell';

const SchoolsMap = {
  [MagicSchool.Abjuration]: 'Огородження',
  [MagicSchool.Conjuration]: 'Виклик',
  [MagicSchool.Divination]: 'Віщуваня',
  [MagicSchool.Enchantment]: 'Причарування',
  [MagicSchool.Evocation]: 'Втілення',
  [MagicSchool.Illusion]: 'Ілюзія',
  [MagicSchool.Necromancy]: 'Некромантія',
  [MagicSchool.Transmutation]: 'Видозміна',
};
const ClassesMap = {
  [Class.Artificer]: 'Артефактор',
  [Class.Bard]: 'Бард',
  [Class.Cleric]: 'Жрець',
  [Class.Druid]: 'Друід',
  [Class.Paladin]: 'Паладін',
  [Class.Ranger]: 'Слідопит',
  [Class.Sorcerer]: 'Чародій',
  [Class.Warlock]: 'Чаклун',
  [Class.Wizard]: 'Чарівник',
};
const LvlMap = {
  [Lvl.Zero]: 'замовляння',
  [Lvl.One]: '1-ий',
  [Lvl.Two]: '2-ий',
  [Lvl.Three]: '3-ий',
  [Lvl.Four]: '4-ий',
  [Lvl.Five]: '5-ий',
  [Lvl.Six]: '6-ий',
  [Lvl.Seven]: '7-ий',
  [Lvl.Eight]: '8-ий',
  [Lvl.Nine]: '9-ий',
};

const ActionMap = {
  [Action.Action]: 'Дія',
  [Action.BonusAction]: 'Бонусна дія',
  [Action.LongTerm]: 'Довготривале',
};

export default { SchoolsMap, ClassesMap, LvlMap, ActionMap };

export { SchoolsMap, ClassesMap, LvlMap, ActionMap };
