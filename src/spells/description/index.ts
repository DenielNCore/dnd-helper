import allBasicSpells, {
  Lvl0Spell as lvl0Basic,
  Lvl1Spell as lvl1Basic,
  Lvl2Spell as lvl2Basic,
} from '@/spells/description/basic';
import allElementalEvilSpells, {
  Lvl0Spell as lvl0ElementalEvil,
  Lvl1Spell as lvl1ElementalEvil,
  Lvl2Spell as lvl2ElementalEvil,
} from '@/spells/description/elemental-evil';
import { Spell } from '@/spells/list';
import { ISpell } from '@/types/spell';

const allSpells: Partial<Record<keyof typeof Spell, ISpell>> = {
  ...allBasicSpells,
  ...allElementalEvilSpells,
};
// console.log(lvl0Basic);

export default allSpells;
export {
  allBasicSpells,
  lvl0Basic,
  lvl1Basic,
  lvl2Basic,
  lvl0ElementalEvil,
  lvl1ElementalEvil,
  lvl2ElementalEvil,
};
