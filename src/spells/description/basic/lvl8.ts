import { Lvl2, Spell } from '@/spells/list/basic';
import { Action, ISpell, MagicSchool, Source } from '@/types/spell';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {};

// const l = Object.keys(Lvl2);
// const r = [];
//
// for (let i = 0; i < l.length; i += 1) {
//   if (!spells[l[i]]) r.push(l[i]);
// }
// console.log('8 lvl spells: ', r);
export default spells;
