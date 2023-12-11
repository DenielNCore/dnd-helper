import allBasicSpells, {
  Lvl0Spell as lvl0Basic,
  Lvl1Spell as lvl1Basic,
  Lvl2Spell as lvl2Basic,
} from '@/spells/description/basic';
import { Spell } from '@/types/spells';
import { ISpell } from '@/types/spell';

const allSpells: Partial<Record<keyof typeof Spell, ISpell>> = {
  ...allBasicSpells,
};
// console.log(lvl0Basic);

export default allSpells;
export { allBasicSpells, lvl0Basic, lvl1Basic, lvl2Basic };
