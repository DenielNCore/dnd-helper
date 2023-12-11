import { Action, ISpell, Source, MagicSchool, DamageType } from '@/types/spell';
import { Spell, Lvl9 } from '@/types/spells';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {};

// const l = Object.keys(Lvl9);
// const r = [];
//
// for (let i = 0; i < l.length; i += 1) {
//   if (!spells[l[i]]) r.push(l[i]);
// }
// console.log('9 lvl spells: ', r);
export default spells;
