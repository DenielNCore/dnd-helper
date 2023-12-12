import { Action, ISpell, Source, MagicSchool, DamageType } from '@/types/spell';
import Stats from '@/types/stats';
import { Spell, Lvl1 } from '@/spells/list/elemental-evil';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {
  [Spell.AbsorbElements]: {
    name: 'ПОГЛИНАННЯ ЕЛЕМЕНТІВ',
    lvl: 1,
    school: MagicSchool.Abjuration, // втілення
    actionType: Action.Reaction,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 1,
    distance: 0,
    self: true,
    target: '',
    numberOfTargets: 0,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    reactionCondition: 'коли ти отримуєш ушкодження від кисню, холоду, вогню, блискавки або грому',
    highLvl: {
      has: true,
      from: 2,
      description: 'збільшується на 1к6 за кожен рівень слота вище 1-го',
      effect: '1к6',
    },
    area: '', // 5-foot radius
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Заклинання поглинає частину надходящої енергії, зменшуючи її вплив на тебе і зберігаючи її для твого наступного ближнього удару. Ти маєш опір до типу ушкоджень, який викликав реакцію, до початку свого наступного ходу. Крім того, вперше, коли ти вдаряєш ближнім ударом на своєму наступному ходу, ціль отримує додаткові 1к6 ушкоджень від типу, що викликав реакцію, і заклинання закінчується.',
      'Якщо ти кидаєш це заклинання, використовуючи слот 2-го рівня або вище, додаткові ушкодження збільшуються на 1к6 за кожен рівень слота вище 1-го.',
    ],
  },
  /*
  *
Beast Bond
1st-level divination
Casting Time: 1 action
Range: Touch
Components: V, S, M (a bit of fur wrapped in a cloth) Duration: Concentration, up to 10 minutes
You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell
fails if the beast’s Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active,
the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.
* */

  [Spell.BeastBond]: {
    name: 'ЗВ’ЯЗОК З ТВАРИНОЮ',
    lvl: 1,
    school: MagicSchool.Divination, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 600,
    distance: 0,
    self: false,
    target: 'одна тварина, яку ти торкаєшся, яка дружня до тебе або спокушена тобою',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
      m: 'шматок шерсті, обгорнутий у тканину',
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: '', // 5-foot radius
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти створюєш телепатичний зв’язок з однією твариною, яку ти торкаєшся, яка дружня до тебе або спокушена тобою. Заклинання не вдається, якщо Інтелект тварини 4 або вище. Доки заклинання триває, зв’язок активний, поки ти і тварина знаходитесь у полі зору одне одного. Через зв’язок тварина може розуміти твої телепатичні повідомлення, і вона може телепатично передавати тобі прості емоції і концепції. Поки зв’язок активний, тварина отримує перевагу на кидки атаки проти будь-якої істоти на відстані 5 футів від тебе, яку ти бачиш.',
    ],
  },
  /*
  * Catapult
1st-level transmutation
Casting Time: 1 action Range: 150 feet Components: S Duration: Instantaneous
Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.
* */

  [Spell.Catapult]: {
    name: 'КАТАПУЛЬТА',
    lvl: 1,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 30,
    self: false,
    target: 'один предмет в межах дистанції, який важить від 1 до 5 фунтів',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 2,
      description:
        'максимальна вага предметів, які ти можеш вибрати цим заклинанням, збільшується на 5 фунтів, а ушкодження збільшується на 1к8 за кожен рівень слота вище 1-го',
      effect: '1к8',
    },
    area: '', // 5-foot radius
    saveThough: 'Ловкості', // Характеристика для кидка рятунку
    attack: 'Кидок атаки заклинання', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Bludgeoning],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш один предмет в межах дистанції, який важить від 1 до 5 фунтів і не носиться і не тримається. Предмет летить прямою лінією до 18 метрів у напрямку, який ти вибираєш, перш ніж впасти на землю, зупинившись раніше, якщо він вдариться об тверду поверхню. Якщо предмет вдарить істоту, ця істота повинна зробити кидок рятунку Ловкості. При провалі предмет вдаряє ціль і зупиняється. В обох випадках і предмет, і істота або тверда поверхня отримують 3к8 ушкоджень від дробової зброї.',
      'Якщо ти кидаєш це заклинання, використовуючи слот 2-го рівня або вище, максимальна вага предметів, які ти можеш вибрати цим заклинанням, збільшується на 5 фунтів, а ушкодження збільшується на 1к8 за кожен рівень слота вище 1-го.',
    ],
  },
  /*
  * Earth Tremor
1st-level evocation
Casting Time: 1 action Range: Self (10-foot radius) Components: V, S Duration: Instantaneous
You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
* */

  [Spell.EarthTremor]: {
    name: 'ЗЕМЛЕТРУС',
    lvl: 1,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 0,
    self: true,
    target: '',
    numberOfTargets: 0,
    components: {
      c: true, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 2,
      description: 'збільшується на 1к6 за кожен рівень слота вище 1-го',
      effect: '1к6',
    },
    area: '2 метр радіус', // 10-foot radius
    saveThough: 'Ловкості', // Характеристика для кидка рятунку
    attack: 'Кидок атаки заклинання', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Bludgeoning],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти викликаєш трус у землі у радіусі 1 метра. Кожна істота, крім тебе, в цій області повинна зробити кидок рятунку Ловкості. При провалі істота отримує 1к6 ушкоджень від дробової зброї і падає. Якщо земля в цій області є розпушеною землею або каменем, вона стає важкодоступною місцевістю, поки не буде очищена.',
      'Якщо ти кидаєш це заклинання, використовуючи слот 2-го рівня або вище, ушкодження збільшуються на 1к6 за кожен рівень слота вище 1-го.',
    ],
  },
  /*
  * Ice Knife
1st-level conjuration
Casting Time: 1 action
Range: 60 feet
Components: S, M (a drop of water or piece of ice) Duration: Instantaneous
You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.
* */

  [Spell.IceKnife]: {
    name: 'ЛЬОДЯНИЙ НІЖ',
    lvl: 1,
    school: MagicSchool.Conjuration, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 12,
    self: false,
    target: 'одна істота, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
      m: 'крапля води або шматок льоду',
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 2,
      description: 'збільшується на 1к6 за кожен рівень слота вище 1-го',
      effect: '1к6',
    },
    area: '2 метр радіус', // 10-foot radius
    saveThough: Stats.Dexterity, // Характеристика для кидка рятунку
    attack: 'Кидок атаки заклинання', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [DamageType.Piercing, DamageType.Cold],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти створюєш шматок льоду і кидаєш його в одну істоту, яку ти бачиш в межах дистанції. Зроби кидок атаки заклинанням на ціль. При попаданні ціль отримує 1к10 ушкоджень від проникаючої зброї. Незалежно від того, чи попав, чи промазав, шматок льоду потім вибухає. Ціль і кожна істота в межах 1 метр від точки вибуху льоду повинні пройти кидок рятунку Ловкості або отримати 2к6 ушкоджень від холоду.',
      'Якщо ти кидаєш це заклинання, використовуючи слот 2-го рівня або вище, ушкодження збільшуються на 1к6 за кожен рівень слота вище 1-го.',
    ],
  },
};

// console.log('1 lvl spells: ', Object.keys(Lvl1).sort());

export default spells;
