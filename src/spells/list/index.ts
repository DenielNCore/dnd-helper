/* eslint-disable @typescript-eslint/no-redeclare */

import AllBasicSpells from '@/spells/list/basic';

const Spell = {
  ...AllBasicSpells.Spell,
};

const Lvl0 = {
  ...AllBasicSpells.Lvl0,
};

const Lvl1 = {
  ...AllBasicSpells.Lvl1,
};

const Lvl2 = {
  ...AllBasicSpells.Lvl2,
};

const Lvl3 = {
  ...AllBasicSpells.Lvl3,
};

const Lvl4 = {
  ...AllBasicSpells.Lvl4,
};

const Lvl5 = {
  ...AllBasicSpells.Lvl5,
};

const Lvl6 = {
  ...AllBasicSpells.Lvl6,
};

const Lvl7 = {
  ...AllBasicSpells.Lvl7,
};
const Lvl8 = {
  ...AllBasicSpells.Lvl8,
};
const Lvl9 = {
  ...AllBasicSpells.Lvl9,
};

const AllBardSpells = {
  ...AllBasicSpells.AllBardSpells,
};

const AllClericSpells = {
  ...AllBasicSpells.AllClericSpells,
};
const AllDruidSpells = {
  ...AllBasicSpells.AllDruidSpells,
};
const AllPaladinSpells = {
  ...AllBasicSpells.AllPaladinSpells,
};
const AllRangerSpells = {
  ...AllBasicSpells.AllRangerSpells,
};
const AllSorcererSpells = {
  ...AllBasicSpells.AllSorcererSpells,
};
const AllWarlockSpells = {
  ...AllBasicSpells.AllWarlockSpells,
};
const AllWizardSpells = {
  ...AllBasicSpells.AllWizardSpells,
};

declare type Spell = keyof typeof Spell;
declare type Lvl0 = keyof typeof Lvl0;
declare type Lvl1 = keyof typeof Lvl1;
declare type Lvl2 = keyof typeof Lvl2;
declare type Lvl3 = keyof typeof Lvl3;
declare type Lvl4 = keyof typeof Lvl4;
declare type Lvl5 = keyof typeof Lvl5;
declare type Lvl6 = keyof typeof Lvl6;
declare type Lvl7 = keyof typeof Lvl7;
declare type Lvl8 = keyof typeof Lvl8;
declare type Lvl9 = keyof typeof Lvl9;
declare type AllBardSpells = keyof typeof AllBardSpells;
declare type AllClericSpells = keyof typeof AllClericSpells;
declare type AllDruidSpells = keyof typeof AllDruidSpells;
declare type AllPaladinSpells = keyof typeof AllPaladinSpells;
declare type AllRangerSpells = keyof typeof AllRangerSpells;
declare type AllSorcererSpells = keyof typeof AllSorcererSpells;
declare type AllWarlockSpells = keyof typeof AllWarlockSpells;
declare type AllWizardSpells = keyof typeof AllWizardSpells;

const BasicSpells = AllBasicSpells.Spell;

export {
  BasicSpells,
  Spell,
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
  AllBardSpells,
  AllClericSpells,
  AllDruidSpells,
  AllPaladinSpells,
  AllRangerSpells,
  AllSorcererSpells,
  AllWarlockSpells,
  AllWizardSpells,
};

export default Spell;
