import { Action, ISpell, Source, MagicSchool, DamageType } from '@/types/spell';
import { Spell } from '@/spells/list';
// import { Spell } from '@/spells/list/elemental-evil';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {};

// console.log('0 lvl spells: ', Object.keys(spells));

export default spells;
