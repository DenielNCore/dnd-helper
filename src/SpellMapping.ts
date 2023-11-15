import { Class, MagicSchool } from '@/SpellList';

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

export default { SchoolsMap, ClassesMap };

export { SchoolsMap, ClassesMap };
