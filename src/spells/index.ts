import Lvl0Spell from '@/spells/lvl0';
import Lvl1Spell from '@/spells/lvl1';
import Lvl2Spell from '@/spells/lvl2';
import Lvl3Spell from '@/spells/lvl3';
import Lvl4Spell from '@/spells/lvl4';
import Lvl5Spell from '@/spells/lvl5';
import Lvl6Spell from '@/spells/lvl6';
import Lvl7Spell from '@/spells/lvl7';
import Lvl8Spell from '@/spells/lvl8';
import Lvl9Spell from '@/spells/lvl9';
import { Spell } from '@/types/spells';
import { ISpell } from '@/types/spell';

const allSpells: Partial<Record<keyof typeof Spell, ISpell>> = {
  ...Lvl0Spell,
  ...Lvl1Spell,
  ...Lvl2Spell,
  ...Lvl3Spell,
  ...Lvl4Spell,
  ...Lvl5Spell,
  ...Lvl6Spell,
  ...Lvl7Spell,
  ...Lvl8Spell,
  ...Lvl9Spell,
};

export { Lvl0Spell, Lvl1Spell, Lvl2Spell, allSpells };

export default allSpells;
