import { Action, ISpell, Source, MagicSchool, DamageType } from '@/types/spell';
import { Spell, Lvl3 } from '@/spells/list/basic';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {};

// const l = Object.keys(Lvl3);
// const r = [];

// for (let i = 0; i < l.length; i += 1) {
//   if (!spells[l[i]]) r.push(l[i]);
// }
// console.log('3 lvl spells: ', r);
export default spells;
