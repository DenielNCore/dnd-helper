import Lvl0Spell from '@/spells/description/basic/lvl0';
import Lvl1Spell from '@/spells/description/basic/lvl1';
import Lvl2Spell from '@/spells/description/basic/lvl2';
import Lvl3Spell from '@/spells/description/basic/lvl3';
import Lvl4Spell from '@/spells/description/basic/lvl4';
import Lvl5Spell from '@/spells/description/basic/lvl5';
import Lvl6Spell from '@/spells/description/basic/lvl6';
import Lvl7Spell from '@/spells/description/basic/lvl7';
import Lvl8Spell from '@/spells/description/basic/lvl8';
import Lvl9Spell from '@/spells/description/basic/lvl9';
import { Spell } from '@/spells/list/basic';
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
