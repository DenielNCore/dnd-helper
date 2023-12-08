/* eslint-disable @typescript-eslint/no-redeclare */
import AllBardSpells, { BardSpells } from '@/types/spells/bardSpells';
import AllClericSpells, { ClericSpells } from '@/types/spells/clericSpells';
import AllDruidSpells, { DruidSpells } from '@/types/spells/druidSpells';
import AllPaladinSpells, { PaladinSpells } from '@/types/spells/paladinSpells';
import AllRangerSpells, { RangerSpells } from '@/types/spells/rangerSpells';
import AllSorcererSpells, { SorcererSpells } from '@/types/spells/sorcererSpells';
import AllWarlockSpells, { WarlockSpells } from '@/types/spells/warlockSpells';
import AllWizardSpells, { WizardSpells } from '@/types/spells/wizardSpells';

const Lvl0 = {
  ...AllBardSpells.Lvl0,
  ...AllClericSpells.Lvl0,
  ...AllDruidSpells.Lvl0,
  ...AllSorcererSpells.Lvl0,
  ...AllWarlockSpells.Lvl0,
  ...AllWizardSpells.Lvl0,
};

const Lvl1 = {
  ...AllBardSpells.Lvl1,
  ...AllClericSpells.Lvl1,
  ...AllDruidSpells.Lvl1,
  ...AllPaladinSpells.Lvl1,
  ...AllRangerSpells.Lvl1,
  ...AllSorcererSpells.Lvl1,
  ...AllWarlockSpells.Lvl1,
  ...AllWizardSpells.Lvl1,
};

const Lvl2 = {
  ...AllBardSpells.Lvl2,
  ...AllClericSpells.Lvl2,
  ...AllDruidSpells.Lvl2,
  ...AllPaladinSpells.Lvl2,
  ...AllRangerSpells.Lvl2,
  ...AllSorcererSpells.Lvl2,
  ...AllWarlockSpells.Lvl2,
  ...AllWizardSpells.Lvl2,
};

const Lvl3 = {
  ...AllBardSpells.Lvl3,
  ...AllClericSpells.Lvl3,
  ...AllDruidSpells.Lvl3,
  ...AllPaladinSpells.Lvl3,
  ...AllRangerSpells.Lvl3,
  ...AllSorcererSpells.Lvl3,
  ...AllWarlockSpells.Lvl3,
  ...AllWizardSpells.Lvl3,
};

const Lvl4 = {
  ...AllBardSpells.Lvl4,
  ...AllClericSpells.Lvl4,
  ...AllDruidSpells.Lvl4,
  ...AllPaladinSpells.Lvl4,
  ...AllRangerSpells.Lvl4,
  ...AllSorcererSpells.Lvl4,
  ...AllWarlockSpells.Lvl4,
  ...AllWizardSpells.Lvl4,
};

const Lvl5 = {
  ...AllBardSpells.Lvl5,
  ...AllClericSpells.Lvl5,
  ...AllDruidSpells.Lvl5,
  ...AllPaladinSpells.Lvl5,
  ...AllRangerSpells.Lvl5,
  ...AllSorcererSpells.Lvl5,
  ...AllWarlockSpells.Lvl5,
  ...AllWizardSpells.Lvl5,
};

const Lvl6 = {
  ...AllBardSpells.Lvl6,
  ...AllClericSpells.Lvl6,
  ...AllDruidSpells.Lvl6,
  ...AllSorcererSpells.Lvl6,
  ...AllWarlockSpells.Lvl6,
  ...AllWizardSpells.Lvl6,
};

const Lvl7 = {
  ...AllBardSpells.Lvl7,
  ...AllClericSpells.Lvl7,
  ...AllDruidSpells.Lvl7,
  ...AllSorcererSpells.Lvl7,
  ...AllWarlockSpells.Lvl7,
  ...AllWizardSpells.Lvl7,
};

const Lvl8 = {
  ...AllBardSpells.Lvl8,
  ...AllClericSpells.Lvl8,
  ...AllDruidSpells.Lvl8,
  ...AllSorcererSpells.Lvl8,
  ...AllWarlockSpells.Lvl8,
  ...AllWizardSpells.Lvl8,
};

const Lvl9 = {
  ...AllBardSpells.Lvl9,
  ...AllClericSpells.Lvl9,
  ...AllDruidSpells.Lvl9,
  ...AllSorcererSpells.Lvl9,
  ...AllWarlockSpells.Lvl9,
  ...AllWizardSpells.Lvl9,
};

const AllSpells = {
  ...AllBardSpells,
  ...AllClericSpells,
  ...AllDruidSpells,
  ...AllPaladinSpells,
  ...AllRangerSpells,
  ...AllSorcererSpells,
  ...AllWarlockSpells,
  ...AllWizardSpells,
};

const Spell = {
  ...BardSpells,
  ...ClericSpells,
  ...DruidSpells,
  ...PaladinSpells,
  ...RangerSpells,
  ...SorcererSpells,
  ...WarlockSpells,
  ...WizardSpells,
};

declare type AllSpells = typeof AllSpells;
declare type Spell = keyof typeof Spell;
// export type Spell =
//   | BardSpells
//   | ClericSpells
//   | DruidSpells
//   | PaladinSpells
//   | RangerSpells
//   | SorcererSpells
//   | WarlockSpells
//   | WizardSpells;

declare type Lvl0 = typeof Lvl0;
declare type Lvl1 = typeof Lvl1;
declare type Lvl2 = typeof Lvl2;
declare type Lvl3 = typeof Lvl3;
declare type Lvl4 = typeof Lvl4;
declare type Lvl5 = typeof Lvl5;
declare type Lvl6 = typeof Lvl6;
declare type Lvl7 = typeof Lvl7;
declare type Lvl8 = typeof Lvl8;
declare type Lvl9 = typeof Lvl9;

export {
  Spell,
  AllSpells,
  AllBardSpells,
  AllClericSpells,
  AllDruidSpells,
  AllPaladinSpells,
  AllRangerSpells,
  AllSorcererSpells,
  AllWarlockSpells,
  AllWizardSpells,
  Lvl0,
  Lvl1,
  Lvl2,
  Lvl3,
  Lvl4,
  Lvl5,
  Lvl6,
  Lvl7,
  Lvl8,
  Lvl9,
};
export default {
  AllSpells,
  AllBardSpells,
  AllClericSpells,
  AllDruidSpells,
  AllPaladinSpells,
  AllRangerSpells,
  AllSorcererSpells,
  AllWarlockSpells,
  AllWizardSpells,
  Lvl0,
  Lvl1,
  Lvl2,
  Lvl3,
  Lvl4,
  Lvl5,
  Lvl6,
  Lvl7,
  Lvl8,
  Lvl9,
};
