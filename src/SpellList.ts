import { Action, Class, ISpell } from '@/types/spell';
import type Spell from '@/spells/list';
import {
  AllBardSpells,
  AllClericSpells,
  AllDruidSpells,
  AllPaladinSpells,
  AllRangerSpells,
  AllSorcererSpells,
  AllWarlockSpells,
  AllWizardSpells,
} from '@/spells/list';

const ClassSpells: { [key: string]: Array<Spell> } = {
  [Class.Artificer]: [],
  [Class.Bard]: [...(Object.keys(AllBardSpells) as Spell[])],
  [Class.Cleric]: [...(Object.keys(AllClericSpells) as Spell[])],
  [Class.Druid]: [...(Object.keys(AllDruidSpells) as Spell[])],
  [Class.Paladin]: [...(Object.keys(AllPaladinSpells) as Spell[])],
  [Class.Ranger]: [...(Object.keys(AllRangerSpells) as Spell[])],
  [Class.Sorcerer]: [...(Object.keys(AllSorcererSpells) as Spell[])],
  [Class.Warlock]: [...(Object.keys(AllWarlockSpells) as Spell[])],
  [Class.Wizard]: [...(Object.keys(AllWizardSpells) as Spell[])],
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
