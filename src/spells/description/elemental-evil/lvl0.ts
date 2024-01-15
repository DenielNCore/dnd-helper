import { Action, ISpell, Source, MagicSchool, DamageType, Lvl } from '@/types/spell';
import { Stats } from '@/types/character';
import { Spell, Lvl0 } from '@/spells/list/elemental-evil';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {
  /*
  * Control Flames
Transmutation cantrip
Casting Time: 1 action
Range: 60 feet
Components: S
Duration: Instantaneous or 1 hour (see below)
You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways: • You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.
• You instantaneously extinguish the flames within the cube.
• You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.
• You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.
If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.
* translate to ukranian */

  [Spell.ControlFlames]: {
    name: 'КОНТРОЛЬ НАД ВОГНЕМ',
    lvl: Lvl.Zero,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 60,
    self: false,
    target: 'немагічне полум’я, яке ти бачиш в межах дистанції і яке поміщається у куб 5 футів',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: 'куб', // 5-foot cube
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      "'Ти вибираєш немагічне полум’я, яке ти бачиш в межах дистанції і яке поміщається у куб 5 футів. Ти впливаєш на нього одним із наступних способів: ",
      '• Ти миттєво розширюєш полум’я на 5 футів у одному напрямку, якщо в новому місці є деревина або інше паливо.',
      '• Ти миттєво гасиш полум’я в межах куба. ',
      '• Ти подвоюєш або зменшуєш напівсвітло і тьму, яке створює полум’я, змінюєш його колір, або робиш і те, і інше. Зміни діють 1 годину. ',
      '• Ти створюєш прості форми - наприклад, вигляд істоти, неживого предмета або місця - у полум’ї і надаєш їм рух, як тобі подобається. Форми існують 1 годину. Якщо ти кидаєш це заклинання кілька разів, ти можеш мати до трьох його не миттєвих ефектів активними одночасно, і ти можеш зняти такий ефект вчинком.',
    ],
  },
  /*
  *  Create Bonfire
Conjuration cantrip
Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Concentration, up to 1 minute
You create a bonfire on ground that you can see within range. Until the spells ends, the bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire’s space for the first time on a turn or ends its turn there.
The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
* */

  [Spell.CreateBonfire]: {
    name: 'СТВОРЕННЯ БАГАТТЯ',
    lvl: Lvl.Zero,
    school: MagicSchool.Conjuration, // виклик
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 60,
    distance: 12, // 60 feet =  12 meters
    self: false,
    target: 'земля, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: true,
      from: 5,
      description: 'збільшується на 1к8 на 5, 11 і 17 рівнях',
      effect: '1к8',
    },
    area: 'куб', // 5-foot cube
    saveThough: 'Ловкості', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Fire],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти створюєш багаття на землі, яку ти бачиш в межах дистанції. Доки заклинання триває, бонфаєр заповнює куб 5 футів. Будь-яка істота в просторі бонфаєру, коли ти кидаєш заклинання, повинна пройти кидок рятунку Ловкості або отримує 1к8 ушкоджень від вогню. Істота також повинна зробити кидок рятунку, коли вона вперше потрапляє в простір бонфаєру або закінчує там свій хід.',
      ' Ушкодження заклинання збільшуються на 1к8 коли ти отримуєш 5 (2к8), 11 (3к8) і 17 рівні (4к8).',
    ],
  },
  /*
  * Frostbite
Evocation cantrip
Casting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous
You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.
The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
* */

  [Spell.Frostbite]: {
    name: 'ОБМОРОЖЕННЯ',
    lvl: Lvl.Zero,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 12, // 60 feet =  12 meters
    self: false,
    target: 'істота, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 5,
      description: 'збільшується на 1к6 на 5, 11 і 17 рівнях',
      effect: '1к6',
    },
    area: '', // 5-foot cube
    saveThough: Stats.Constitution, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Cold],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти викликаєш заморозки на одній істоті, яку ти бачиш в межах дистанції. Ціль повинна пройти кидок рятунку Конституції. При провалі ціль отримує 1к6 ушкоджень від холоду, і вона має перевагу на наступний кидок атаки зі зброї, який вона робить до кінця свого наступного ходу.',
      'Ушкодження заклинання збільшуються на 1к6 коли ти отримуєш 5 (2к6), 11 (3к6) і 17 рівні (4к6).',
    ],
  },
  /*
  *  Gust
Transmutation cantrip
Casting Time: 1 action Range: 30 feet Components: V, S Duration: Instantaneous
You seize the air and compel it to create one of the following effects at a point you can see within range:
• One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.
• You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn’t pushed with enough force to cause damage.
• You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.
* */

  [Spell.Gust]: {
    name: 'ПОРИВ',
    lvl: Lvl.Zero,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 6, // 30 feet / 5 =  6 meters
    self: false,
    target: 'точка, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: false,
    },
    area: '', // 5-foot cube
    saveThough: Stats.Strength, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти схоплюєш повітря і змушуєш його створити один із наступних ефектів у точці, яку ти бачиш в межах дистанції:',
      '• Одна середня або менша істота, яку ти вибираєш, повинна пройти кидок рятунку Сили або бути відштовхнута на 5 футів від тебе.',
      '• Ти створюєш маленький вибух повітря, який може рухати один предмет, який ніхто не тримає і не носить, і який важить не більше 5 фунтів. Предмет відштовхується на 10 футів від тебе. Це не вистачає сили, щоб завдати ушкоджень.',
      '• Ти створюєш безпечний сенсорний ефект, використовуючи повітря, наприклад, змушуєш шелестіти листя, вітер зачиняє ставні або твоє одягання тремтить від бризки.',
    ],
  },
  /*
  * Magic Stone
Transmutation cantrip
Casting Time: 1 bonus action Range: Touch
Components: V, S
Duration: 1 minute
You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If
someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker’s, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.
If you cast this spell again, the spell ends early on any pebbles still affected by it.
* */

  [Spell.MagicStone]: {
    name: 'МАГІЧНИЙ КАМІНЬ',
    lvl: Lvl.Zero,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.BonusAction,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 60,
    distance: 0,
    self: true,
    target: 'один, два або три камінці',
    numberOfTargets: 3,
    components: {
      c: true, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: '', // 5-foot cube
    saveThough: '', // Характеристика для кидка рятунку
    attack: 'Кидок атаки заклинання', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [DamageType.Bludgeoning],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти торкаєшся одного або трьох камінців і надаєш їм магії. Ти або хтось інший може зробити кидок атаки заклинанням на один з камінців, кинувши його або кинувши з пращі. Якщо камінь кидається, він має дальність 12 метрів. Якщо хтось інший атакує камінь, цей атакуючий додає до кидка атаки твій модифікатор характеристики заклинання, а не свій. При попаданні ціль отримує ушкодження від дробової зброї, рівне 1к6 + твій модифікатор характеристики заклинання. Незалежно від того, чи попав, чи промазав, заклинання закінчується на камені.',
      'Якщо ти кидаєш це заклинання знову, заклинання рано закінчується на будь-яких камінцях, які все ще під його впливом.',
    ],
  },
  /*
  *  Mold Earth
Transmutation cantrip
Casting Time: 1 action
Range: 30 feet
Components: S
Duration: Instantaneous or 1 hour (see below)
You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:
• If you target an area of loose earth, you can instan- taneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn’t have enough force to cause damage.
• You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shap- ing patterns. The changes last for 1 hour.
• If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.
If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.
* */

  [Spell.MoldEarth]: {
    name: 'ФОРМУВАННЯ ЗЕМЛІ',
    lvl: Lvl.Zero,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 3600,
    distance: 6, // 30 feet / 5 =  6 meters
    self: false,
    target:
      'частина землі або каменю, яку ти бачиш в межах дистанції і яка поміщається у куб 5 футів',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: 'куб 1 метр', // 5-foot cube
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш частину землі або каменю, яку ти бачиш в межах дистанції і яка поміщається у куб 1 метр. Ти впливаєш на неї одним із наступних способів:',
      '• Якщо ти вибираєш область з розпушеною землею, ти миттєво викопуєш її, пересуваєш по землі і відкладаєш на відстані до 1 метр. Цей рух не має достатньої сили, щоб завдати ушкоджень.',
      '• Ти змушуєш з’явитися на землі або камені форми, кольори або обидва, які утворюють слова, створюють зображення або формують візерунки. Зміни діють 1 годину.',
      '• Якщо земля або камінь, який ти вибираєш, знаходиться на землі, ти змушуєш його стати важкодоступною місцевістю. Альтернативно, ти можеш змусити землю стати нормальною місцевістю, якщо вона вже є важкодоступною. Ця зміна діє 1 годину.',
      'Якщо ти кидаєш це заклинання кілька разів, ти можеш мати не більше двох його не миттєвих ефектів активними одночасно, і ти можеш зняти такий ефект вчинком.',
    ],
  },
  /*
  * Shape Water
Transmutation cantrip
Casting Time: 1 action
Range: 30 feet
Components: S
Duration: Instantaneous or 1 hour (see below)
You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:
• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.
• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.
• You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.
• You freeze the water, provided that there are no crea- tures in it. The water unfreezes in 1 hour.
If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.
* */

  [Spell.ShapeWater]: {
    name: 'ФОРМУВАННЯ ВОДИ',
    lvl: Lvl.Zero,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 3600,
    distance: 6, // 30 feet / 5 =  6 meters
    self: false,
    target: 'частина води, яку ти бачиш в межах дистанції і яка поміщається у куб 5 футів',
    numberOfTargets: 1,
    components: {
      c: false, // verbal
      t: true, // somatic
    },
    ritual: false,
    concentration: false,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: 'куб 1 метр', // 5-foot cube
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш частину води, яку ти бачиш в межах дистанції і яка поміщається у куб 1 метр. Ти впливаєш на неї одним із наступних способів:',
      '• Ти миттєво пересуваєш або інакше змінюєш потік води, як ти направляєш, до 1 метра в будь-якому напрямку. Цей рух не має достатньої сили, щоб завдати ушкоджень.',
      '• Ти змушуєш воду утворити прості форми і анімувати їх за твоїм напрямом. Зміни діють 1 годину.',
      '• Ти змінюєш колір або непрозорість води. Вода повинна бути змінена таким же способом повністю. Зміни діють 1 годину.',
      '• Ти заморожуєш воду, якщо в ній немає істот. Вода розморожується через 1 годину.',
      'Якщо ти кидаєш це заклинання кілька разів, ти можеш мати не більше двох його не миттєвих ефектів активними одночасно, і ти можеш зняти такий ефект вчинком.',
    ],
  },
  /*
  * Thunderclap
Evocation cantrip
Casting Time: 1 action Range: Self (5-foot radius) Components: S Duration: Instantaneous
You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than
you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.
The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).
*
* translate to ukranian
* */

  [Spell.Thunderclap]: {
    name: 'ГРОМОВИЙ ХЛОПОК',
    lvl: Lvl.Zero,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 1,
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
    highLvl: {
      has: true,
      from: 5,
      description: 'збільшується на 1к6 на 5, 11 і 17 рівнях',
      effect: '1к6',
    },
    area: '1 метр радіус', // 5-foot radius
    saveThough: 'Конституції', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Thunder],
    source: Source.ElementalEvilPlayersCompanion,
    description:
      'Ти створюєш вибух грізного звуку, який можна почути на відстані 100 футів. Кожна істота, крім тебе, в межах 5 футів від тебе повинна зробити кидок рятунку Конституції. При провалі істота отримує 1к6 ушкоджень від грому. Ушкодження заклинання збільшуються на 1к6 за кожен рівень слота вище 2-го.',
  },
};

// console.log('0 lvl spells: ', Object.keys(Lvl0).sort());

export default spells;
