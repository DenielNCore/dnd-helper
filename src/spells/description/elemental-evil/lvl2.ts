import { Action, ISpell, Source, MagicSchool, DamageType, Lvl } from '@/types/spell';
import Stats from '@/types/stats';
import { Spell, Lvl2 } from '@/spells/list/elemental-evil';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {
  /*
  * Aganazzar’s Scorcher
2nd-level evocation
Casting Time: 1 action
Range: 30 feet
Components: V, S, M (a red dragon’s scale) Duration: Instantaneous
A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
* */

  [Spell.AganazzarsScorcher]: {
    name: 'СПАЛЮВАЧ АГАНАЗАРА',
    lvl: Lvl.Two,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 6,
    self: true,
    target: '',
    numberOfTargets: 0,
    components: {
      c: true, // verbal
      t: true, // somatic
      m: 'червона луска дракона',
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 3,
      description: 'збільшується на 1к8 за кожен рівень слота вище 2-го',
      effect: '1к8',
    },
    area: 'лінія 6 метрів на 1 метр', // 5-foot radius
    saveThough: Stats.Dexterity, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [DamageType.Fire],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Лінія ревучого полум’я довжиною 6 метрів і шириною 1 метр виходить з тебе в обраному тобою напрямку. Кожна істота в лінії повинна зробити кидок рятунку Ловкості. Істота отримує 3к8 ушкоджень від вогню при провалі, або половину цього ушкодження при успішному кидку.',
      'Якщо ти кидаєш це заклинання використовуючи як мінімум 3 рівень слота, ушкодження збільшуються на 1к8 за кожен рівень слота вище 2-го.',
    ],
  },
  /*
  * Dust Devil
2nd-level conjuration
Casting Time: 1 action
Range: 60 feet
Components: V, S, M (a pinch of dust) Duration: Concentration, up to 1 minute
Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell’s duration.
Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isn’t pushed.
As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
* */

  [Spell.DustDevil]: {
    name: 'ПИЛОВИЙ ДИВ',
    lvl: Lvl.Two,
    school: MagicSchool.Conjuration, // виклик
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 60,
    distance: 12,
    self: false,
    target: 'вільний простір 1 метр',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
      m: 'щіпка пилу',
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: true,
      from: 3,
      description: 'збільшується на 1к8 за кожен рівень слота вище 2-го',
      effect: '1к8',
    },
    area: 'куб 1 метр', // 5-foot radius
    saveThough: Stats.Strength, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [DamageType.Bludgeoning],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш вільний простір 1 метр, який ти бачиш в межах дистанції. Елементальна сила, яка нагадує пиловий див, з’являється в кубі і триває протягом тривалості заклинання.',
      'Будь-яка істота, яка закінчує свій хід в межах 1 метра від пилового дива, повинна зробити кидок рятунку Сили. При провалі істота отримує 1к8 ушкоджень від дробової зброї і відштовхується на 2 метри. При успішному кидку істота отримує половину цього ушкодження і не відштовхується.',
      'Як бонусна дія, ти можеш перемістити пиловий див до 6 метрів у будь-якому напрямку. Якщо пиловий див рухається по піску, пилу, розсипаній землі або дрібному гравію, він засмоктує матеріал і утворює хмару з областю радіусом 2 метра, яка триває до початку твого наступного ходу. Хмара сильно затемнює свою область.',
      'Якщо ти кидаєш це заклинання використовуючи як мінімум 3 рівень слота, ушкодження збільшуються на 1к8 за кожен рівень слота вище 2-го.',
    ],
  },
  /*
  * Earthbind
2nd-level transmutation
Casting Time: 1 action
Range: 300 feet
Components: V
Duration: Concentration, up to 1 minute
Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its
flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.
* */

  [Spell.Earthbind]: {
    name: 'ПРИВ’ЯЗУВАННЯ ДО ЗЕМЛІ',
    lvl: Lvl.Two,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 60,
    distance: 60,
    self: false,
    target: 'одна істота, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: false, // somatic
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: '', // 5-foot radius
    saveThough: Stats.Strength, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш одну істоту, яку ти бачиш в межах дистанції. Жовті смужки магічної енергії обвивають істоту. Ціль повинна пройти кидок рятунку Сили або її швидкість польоту (якщо вона є) зменшується до 0 до тривалості заклинання. Літаюча істота, яка постраждала від цього заклинання, спускається на 12 метрів за раунд, поки не дістане землі або заклинання не закінчиться.',
    ],
  },
  /*
  * Maximilian’s Earthen Grasp
2nd-level transmutation
Casting Time: 1 action
Range: 30 feet
Components: V, S, M (a miniature hand sculpted
from clay)
Duration: Concentration, up to 1 minute
You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches
for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell’s duration.
As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.
To break out, the restrained target can make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.
As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.
* */

  [Spell.MaximiliansEarthenGrasp]: {
    name: 'ЗЕМЛЯНА СТИСКА МАКСИМІЛІАНА',
    lvl: Lvl.Two,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 60,
    distance: 6,
    self: false,
    target: 'вільний простір 1 метр',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
      m: 'мініатюрна глиняна рука',
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: 'куб 1 метр', // 5-foot radius
    saveThough: Stats.Strength, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [DamageType.Bludgeoning],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш вільний простір 1 метр, який ти бачиш в межах дистанції. Там з’являється середня рука зі згущеної землі і дотикається до однієї істоти, яку ти бачиш в межах 1 метра від неї. Ціль повинна пройти кидок рятунку Сили. При провалі ціль отримує 2к6 ушкоджень від дробової зброї і обмежена до тривалості заклинання.',
      'Як дію, ти можеш змусити руку стиснути обмежену ціль, яка повинна зробити кидок рятунку Сили. Ціль отримує 2к6 ушкоджень від дробової зброї при провалі, або половину цього ушкодження при успішному кидку.',
      'Щоб вибратися, обмежена ціль може зробити перевірку Сили проти твого СК заклинання. При успіху ціль вибирається і більше не обмежена рукою.',
      'Як дію, ти можеш змусити руку дотикатися іншої істоти або переміститися в інший вільний простір в межах дистанції. Рука відпускає обмежену ціль, якщо ти робиш будь-яку з цих дій.',
    ],
  },
  /*
  * Pyrotechnics
2nd-level transmutation
Casting Time: 1 action Range: 60 feet Components: V, S Duration: Instantaneous
Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.
Fireworks. The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.
Smoke. Thick black smoke spreads out from the target in a 20-foot radius, moving around corners.
The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.
* */

  [Spell.Pyrotechnics]: {
    name: 'ПІРОТЕХНІКА',
    lvl: Lvl.Two,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 12,
    self: false,
    target: 'вогонь в межах куба 1 метр',
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
    area: 'куб 1 метр', // 5-foot radius
    saveThough: Stats.Constitution, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: false,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти вибираєш вогонь в межах куба 1 метр, який ти бачиш в межах дистанції. Ти можеш затушити вогонь в цій області і створити піротехніку або дим.',
      'Піротехніка. Ціль вибухає з осліплюючим демонстрацією кольорів. Кожна істота в межах 2 метри від цілі повинна пройти кидок рятунку Конституції або стати осліпленою до кінця твого наступного ходу.',
      'Дим. Густий чорний дим розповсюджується з цілі в радіусі 4 метрів, рухаючись по кутах. Область диму сильно затемнюється. Дим триває 1 хвилину або поки сильний вітер не розсіє його.',
    ],
  },
  /*
  *  Skywrite
2nd-level transmutation (ritual)
Casting Time: 1 action
Range: Sight
Components: V, S
Duration: Concentration, up to 1 hour
You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell’s duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.
* */

  [Spell.Skywrite]: {
    name: 'НАПИС В НЕБІ',
    lvl: Lvl.Two,
    school: MagicSchool.Transmutation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 3600,
    distance: 0,
    self: false,
    target: 'видима частина неба',
    numberOfTargets: 1,
    components: {
      c: true, // verbal
      t: true, // somatic
    },
    ritual: true,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: '', // 5-foot radius
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Ти створюєш до десяти слів у частині неба, яку ти бачиш. Слова здаються зробленими з хмар і залишаються на місці до тривалості заклинання. Слова розсіюються, коли заклинання закінчується. Сильний вітер може розсіяти хмари і завершити заклинання раніше.',
    ],
  },
  /*
  * Snilloc’s Snowball Swarm
2nd-level evocation
Casting Time: 1 action
Range: 90 feet
Components: V, S, M (a piece of ice or a small white
rock chip)
Duration: Instantaneous
A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.
* */

  [Spell.SnillocsSnowballSwarm]: {
    name: 'СНІЖНА ЗАСІПКА СНІЛЛОКА',
    lvl: Lvl.Two,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 0,
    distance: 18,
    self: false,
    target: 'точка в межах 1 метра',
    numberOfTargets: 0,
    components: {
      c: true, // verbal
      t: true, // somatic
      m: 'шматок льоду або невеликий білий камінь',
    },
    ritual: false,
    concentration: false,
    canEndEarlier: false,
    highLvl: {
      has: true,
      from: 3,
      description: 'збільшується на 1к6 за кожен рівень слота вище 2-го',
      effect: '1к6',
    },
    area: 'куб 1 метр', // 5-foot radius
    saveThough: Stats.Dexterity, // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [DamageType.Cold],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'З точки, яку ти вибираєш в межах дистанції, виринає засіпка магічних сніжок. Кожна істота в кубі 1 метр від цієї точки повинна зробити кидок рятунку Ловкості. При провалі істота отримує 3к6 ушкоджень від холоду, або половину цього ушкодження при успішному кидку.',
      'Якщо ти кидаєш це заклинання використовуючи як мінімум 3 рівень слота, ушкодження збільшуються на 1к6 за кожен рівень слота вище 2-го.',
    ],
  },
  /*
  * Warding Wind
2nd-level evocation
Casting Time: 1 action
Range: Self
Components: V
Duration: Concentration, up to 10 minutes
A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell’s duration.
The wind has the following effects:
• It deafens you and other creatures in its area.
• It extinguishes unprotected flames in its area that are
torch-sized or smaller.
• The area is difficult terrain for creatures
other than you.
• The attack rolls of ranged weapon attacks have disad-
vantage if they pass in or out of the wind.
• It hedges out vapor, gas, and fog that can be dispersed
by strong wind.
* */

  [Spell.WardingWind]: {
    name: 'ВІТРИЛО ОХОРОНИ',
    lvl: Lvl.Two,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.BonusAction,
    castTime: 0, // 1 вчинок === 0 секунд
    duration: 600,
    distance: 0,
    self: true,
    target: '',
    numberOfTargets: 0,
    components: {
      c: true, // verbal
      t: false, // somatic
    },
    ritual: false,
    concentration: true,
    canEndEarlier: true,
    highLvl: {
      has: false,
    },
    area: 'куб 2 метри', // 5-foot radius
    saveThough: '', // Характеристика для кидка рятунку
    attack: '', // Заклинання не вимагає кидка атаки
    freeWay: true,
    damageType: [],
    source: Source.ElementalEvilPlayersCompanion,
    description: [
      'Навколо тебе в радіусі 2 метрів дме сильний вітер (20 миль за годину), який рухається разом з тобою, залишаючись у центрі на тобі. Вітер триває протягом тривалості заклинання.',
      'Вітер має наступні ефекти:',
      '• Він оглушає тебе і інших істот у своїй області.',
      '• Він гасить незахищені полум’я в своїй області, які мають розмір факела або менше.',
      '• Область є ускладненою місцевістю для істот, крім тебе.',
      '• Кидки атак дальнобійної зброї мають перевагу, якщо вони проходять в або з вітру.',
      '• Він обмежує пару, газ і туман, які можуть бути розсіяні сильним вітром.',
    ],
  },
};

// console.log('2 lvl spells: ', Object.keys(Lvl2).sort());

export default spells;
