/* eslint-disable @typescript-eslint/no-redeclare */
import AllBardSpells, { BardSpells } from '@/spells/list/elemental-evil/bardSpells';
import AllDruidSpells, { DruidSpells } from '@/spells/list/elemental-evil/druidSpells';
import AllRangerSpells, { RangerSpells } from '@/spells/list/elemental-evil/rangerSpells';
import AllSorcererSpells, { SorcererSpells } from '@/spells/list/elemental-evil/sorcererSpells';
import AllWarlockSpells, { WarlockSpells } from '@/spells/list/elemental-evil/warlockSpells';
import AllWizardSpells, { WizardSpells } from '@/spells/list/elemental-evil/wizardSpells';

const Lvl0 = {
  ...AllBardSpells.Lvl0,
  ...AllDruidSpells.Lvl0,
  ...AllSorcererSpells.Lvl0,
  ...AllWarlockSpells.Lvl0,
  ...AllWizardSpells.Lvl0,
};

const Lvl1 = {
  ...AllBardSpells.Lvl1,
  ...AllDruidSpells.Lvl1,
  ...AllRangerSpells.Lvl1,
  ...AllSorcererSpells.Lvl1,
  ...AllWizardSpells.Lvl1,
};

const Lvl2 = {
  ...AllBardSpells.Lvl2,
  ...AllDruidSpells.Lvl2,
  ...AllSorcererSpells.Lvl2,
  ...AllWarlockSpells.Lvl2,
  ...AllWizardSpells.Lvl2,
};

const Lvl3 = {
  ...AllDruidSpells.Lvl3,
  ...AllRangerSpells.Lvl3,
  ...AllSorcererSpells.Lvl3,
  ...AllWizardSpells.Lvl3,
};

const Lvl4 = {
  ...AllDruidSpells.Lvl4,
  ...AllSorcererSpells.Lvl4,
  ...AllWarlockSpells.Lvl4,
  ...AllWizardSpells.Lvl4,
};

const Lvl5 = {
  ...AllDruidSpells.Lvl5,
  ...AllSorcererSpells.Lvl5,
  ...AllWizardSpells.Lvl5,
};

const Lvl6 = {
  ...AllDruidSpells.Lvl6,
  ...AllSorcererSpells.Lvl6,
  ...AllWarlockSpells.Lvl6,
  ...AllWizardSpells.Lvl6,
};

const Lvl7 = {
  ...AllDruidSpells.Lvl7,
  ...AllWizardSpells.Lvl7,
};

const Lvl8 = {
  ...AllSorcererSpells.Lvl8,
  ...AllWizardSpells.Lvl8,
};

const AllSpells = {
  ...AllBardSpells,
  ...AllDruidSpells,
  ...AllRangerSpells,
  ...AllSorcererSpells,
  ...AllWarlockSpells,
  ...AllWizardSpells,
};

const Spell = {
  ...BardSpells,
  ...DruidSpells,
  ...RangerSpells,
  ...SorcererSpells,
  ...WarlockSpells,
  ...WizardSpells,
};

declare type AllSpells = typeof AllSpells;
declare type Spell = keyof typeof Spell;

declare type Lvl0 = typeof Lvl0;
declare type Lvl1 = typeof Lvl1;
declare type Lvl2 = typeof Lvl2;
declare type Lvl3 = typeof Lvl3;
declare type Lvl4 = typeof Lvl4;
declare type Lvl5 = typeof Lvl5;
declare type Lvl6 = typeof Lvl6;
declare type Lvl7 = typeof Lvl7;
declare type Lvl8 = typeof Lvl8;
// declare type Lvl9 = typeof Lvl9;

export {
  Spell,
  AllSpells,
  AllBardSpells,
  AllDruidSpells,
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
};
export default {
  AllSpells,
  AllBardSpells,
  AllDruidSpells,
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
  Spell,
};
