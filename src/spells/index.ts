import Lvl0Spell from '@/spells/lvl0';
import Lvl1Spell from '@/spells/lvl1';
import { Spell } from '@/types/spells';
import { ISpell } from '@/types/spell';

const allSpells: Partial<Record<keyof typeof Spell, ISpell>> = {
  ...Lvl0Spell,
  ...Lvl1Spell,
};

export { Lvl0Spell, Lvl1Spell, allSpells };

export default allSpells;
