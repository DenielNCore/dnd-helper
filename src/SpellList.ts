import { Action, Class, ISpell } from '@/types/spell';
import type { Spell } from '@/types/spells';
import {
  AllBardSpells,
  AllClericSpells,
  AllDruidSpells,
  AllPaladinSpells,
  AllRangerSpells,
  AllSorcererSpells,
  AllWarlockSpells,
  AllWizardSpells,
} from '@/types/spells';

const ClassSpells: { [key: string]: Array<Spell> } = {
  [Class.Artificer]: [],
  [Class.Bard]: [...(Object.keys(AllBardSpells.AllSpells) as Spell[])],
  [Class.Cleric]: [...(Object.keys(AllClericSpells.AllSpells) as Spell[])],
  [Class.Druid]: [...(Object.keys(AllDruidSpells.AllSpells) as Spell[])],
  [Class.Paladin]: [...(Object.keys(AllPaladinSpells.AllSpells) as Spell[])],
  [Class.Ranger]: [...(Object.keys(AllRangerSpells.AllSpells) as Spell[])],
  [Class.Sorcerer]: [...(Object.keys(AllSorcererSpells.AllSpells) as Spell[])],
  [Class.Warlock]: [...(Object.keys(AllWarlockSpells.AllSpells) as Spell[])],
  [Class.Wizard]: [...(Object.keys(AllWizardSpells.AllSpells) as Spell[])],
};

const classList = [
  // Class.Artificer,
  Class.Bard,
  Class.Cleric,
  Class.Druid,
  Class.Paladin,
  Class.Ranger,
  Class.Sorcerer,
  Class.Warlock,
  Class.Wizard,
];

export default {
  ClassSpells,
  classList,
};

export { ClassSpells, classList };
