import { MagicSchool, Lvl, Action, Source } from '@/types/spell';
import { Class } from '@/types/character';

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
  // TODO: move to character mapping
  [Class.Artificer]: 'Артефактор',
  [Class.Bard]: 'Бард',
  [Class.Barbarian]: 'Варвар',
  [Class.Cleric]: 'Жрець',
  [Class.Druid]: 'Друід',
  [Class.Fighter]: 'Боєць',
  [Class.Monk]: 'Монах',
  [Class.Paladin]: 'Паладін',
  [Class.Ranger]: 'Слідопит',
  [Class.Rogue]: 'Спритник',
  [Class.Sorcerer]: 'Чародій',
  [Class.Warlock]: 'Чаклун',
  [Class.Wizard]: 'Чарівник',
};

const LvlMap = {
  [Lvl.Zero]: 'Замовляння',
  [Lvl.One]: '1-ий',
  [Lvl.Two]: '2-ий',
  // [Lvl.Three]: '3-ий',
  // [Lvl.Four]: '4-ий',
  // [Lvl.Five]: '5-ий',
  // [Lvl.Six]: '6-ий',
  // [Lvl.Seven]: '7-ий',
  // [Lvl.Eight]: '8-ий',
  // [Lvl.Nine]: '9-ий',
};

const ActionMap = {
  [Action.Action]: 'Дія',
  [Action.BonusAction]: 'Бонусна дія',
  [Action.LongTerm]: 'Довготривале',
  [Action.Reaction]: 'Реакція',
};
const SourceMap = {
  [Source.BasicRules]: 'Базові правила',
  [Source.ElementalEvilPlayersCompanion]: 'Елементальне зло',
};

export default { SchoolsMap, ClassesMap, LvlMap, ActionMap, SourceMap };

export { SchoolsMap, ClassesMap, LvlMap, ActionMap, SourceMap };
