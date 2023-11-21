enum MagicSchool {
  Abjuration = 'Abjuration',
  Conjuration = 'Conjuration',
  Divination = 'Divination',
  Enchantment = 'Enchantment',
  Evocation = 'Evocation',
  Illusion = 'Illusion',
  Necromancy = 'Necromancy',
  Transmutation = 'Transmutation',
}

enum Action {
  Action = 'Action',
  BonusAction = 'BonusAction',
  LongTerm = 'LongTerm',
}

export interface ISpell {
  name: string;
  lvl: number;

  school: string;
  // school: MagicSchool;
  actionType: Action;
  castTime: number; // секунд
  duration: number | 'Доки не буде розсіяне або не спрацює' | 'Доки не розсіється або не спрацює'; // секунд, 1 раунд = 6 секунд

  distance: number | 'На себе' | 'Дотик'; // метрів
  target: string;
  numberOfTargets: number;

  description: string;
  components: {
    c: boolean;
    t: boolean;
    m?: string;
  };
  highLvl: {
    has: boolean;
    from?: number;
    description?: string;
    effect?: string;
  };
  concentration: boolean;
  freeWay: boolean;
  self: boolean;
  area: string;
  saveThough: string;
  attack: string;
  ritual: boolean;

  damageType: string[];
}

enum Spell {
  AuraOfLife = 'AuraOfLife',
  FeignDeath = 'FeignDeath',
  HeroesFeast = 'HeroesFeast',
  DivineFavor = 'DivineFavor',
  Bless = 'Bless',
  Fireball = 'Fireball',
  DetectMagic = 'DetectMagic',
}

const spells: { [key: string]: ISpell } = {
  [Spell.Fireball]: {
    name: 'ВОГНЯНА КУЛЯ',
    lvl: 3,
    school: 'втілення',
    description:
      'Яскравий промінь вилітає із твого вказівного пальця в точку, обрану тобою в межах дистанції, де і відбувається вибух полум’я з гучним гуркотом. Всі істоти в межах сфери з радіусом 4 метри з центром в тій точці повинні зробити кидок рятунку Вправності. Ціль отримує 8к6 ушкоджень вогнем при провалі кидка рятунку, або половину цих ушкоджень при успіху. Цей вогонь огинає кути. Він запалює легкозаймисті предмети, які ніхто не тримає і не носить.',
    distance: 30,
    components: {
      c: true,
      t: true,
      m: 'крихітна кулька з гуано кажана і сірки',
    },
    castTime: 0,
    duration: 0,
    highLvl: {
      has: true,
      from: 4,
      description:
        'Якщо ти виконуєш це заклинання, витрачаючи магічний слот 4 рівня або вищого, його ушкодження збільшуються на 1к6 за кожен рівень слота вище 3-го.',
      effect: '',
    },
    concentration: false,
    target: 'точка в межах видимості',
    numberOfTargets: Infinity,
    freeWay: true,
    self: false,
    area: 'сфера з радіусом 4 метри',
    saveThough: 'Вправності',
    attack: '',
    ritual: false,
    actionType: Action.Action,
    damageType: ['вогонь'],
  },
  [Spell.DetectMagic]: {
    name: 'ВИЯВЛЕННЯ МАГІЇ',
    lvl: 1,
    school: 'віщування (ритуал)',
    description:
      'Доки заклинання триває, ти відчуваєш присутність магії в межах 6 метрів від тебе. Якщо ти відчув за рахунок цього заклинання присутність магії, ти можеш використати свій вчинок, щоб побачити слабку ауру навколо видимої істоти або предмета, що несе на собі магію, а також дізнатися шко- лу цієї магії, якщо вона є. Це заклинання пронизує більшу частину бар’єрів, але блокується 30 сантиметрами каменю, 3 сантиметрами зви- чайного металу, тонким листом свинцю або 1 метром дере- ва або землі.',
    distance: 6,
    target: 'На себе',
    components: {
      c: true,
      t: true,
    },
    castTime: 0,
    duration: 600,
    highLvl: {
      has: false,
    },
    concentration: true,
    numberOfTargets: 0,
    freeWay: false,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: true,
    actionType: Action.Action,
    damageType: [],
  },

  [Spell.Bless]: {
    name: 'БЛАГОСЛОВЕННЯ',
    lvl: 1,
    school: 'причарування',
    description:
      'Ти благословляєш не більше трьох істот на твій вибір в межах дистанції. Кожен раз, коли до закінчення ефекту заклинання ціль здійснює кидок атаки або кидок рятунку, вона може кинути додатково к4 і додати число, яке випало, до результату того кидка.',
    distance: 6,
    target: 'істоти',
    numberOfTargets: 3,
    components: {
      c: true,
      t: true,
      m: 'крапля святої води',
    },
    duration: 60,
    castTime: 0,
    concentration: true,
    highLvl: {
      has: true,
      from: 2,
      description:
        'Ти можеш обрати цілями по одній додатковій істоті за кожен рівень витраченого слота вище 1-го.',
      effect: '',
    },
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: Action.Action,
    damageType: [],
  },

  [Spell.DivineFavor]: {
    name: 'БОЖЕСТВЕННА ПІДТРИМКА',
    lvl: 1,
    school: 'втілення',
    description:
      'Твоя молитва наповнює тебе божественною енергією. Доки заклинання триває, твої атаки зброєю завдають при попаданні 1к4 додаткових ушкоджень.',
    distance: 'На себе',
    components: {
      c: true,
      t: true,
    },
    castTime: 0,
    duration: 60,
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    target: 'на себе',
    numberOfTargets: 1,
    freeWay: true,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: Action.BonusAction,
    damageType: [],
  },
  [Spell.HeroesFeast]: {
    name: 'БЕНКЕТ ГЕРОЇВ',
    lvl: 6,
    school: 'виклик',
    description:
      'Ти організовуєш шикарний бенкет, який включає чудову їжу та напої. Бенкет триває 1 годину, і зникає після закінчення цього строку, але позитивні ефекти не вступають в силу, доки цей час не пройде. У бенкеті можуть брати участь до дванадцяти істот.',
    distance: 6,
    components: {
      c: true,
      t: true,
      m: 'інкрустована дорогоцінними каменями чаша, вартістю мінімум 1000 зм, яка поглинається заклинанням',
    },
    castTime: 600,
    duration: 86400,
    numberOfTargets: 20,
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: false,
    target: 'істоти',
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: Action.LongTerm,
    damageType: [],
  },

  [Spell.AuraOfLife]: {
    name: 'АУРА ЖИТТЯ',
    lvl: 4,
    school: 'огородження',
    description:
      'Від тебе виходить аура, яка захищає життя, з радіусом 6 метрів. Доки заклинання триває, аура пересувається разом з тобою, залишаючись з центром на тобі. Всі неворожі істоти в аурі (включаючи тебе) отримують опір до ушкоджень некротичною енергією, і максимум їхнього здоров’я не може зменшуватися. Крім того, неворожі живі істоти, які починають хід в цій аурі з 0 здоров’я, відновлюють собі по 1 здоров’я.',
    distance: 6,
    components: {
      c: true,
      t: false,
      m: '',
    },
    castTime: 0,
    duration: 600,
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    target: 'на себе',
    numberOfTargets: Infinity,
    freeWay: true,
    self: true,
    area: '6-метровий радіус',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: Action.Action,
    damageType: [],
  },

  [Spell.FeignDeath]: {
    name: 'ВДАВАНА СМЕРТЬ',
    lvl: 3,
    school: 'некромантія',
    description:
      'Ти торкаєшся до згідної істоти та занурюєш її в каталептичний стан, який зовнішньо не відрізняється від смерті. Доки заклинання триває, або доки ти не торкнешся до цілі, витрачаючи вчинок, щоб зняти заклинання, ціль виглядає мертвою для будь-якого обстеження і заклинань, які визначають стан цілі. Ціль осліплена і недієздатна, а її швидкість дорівнює 0. Ціль отримує опір до всіх видів ушкоджень крім ушкоджень психічною енергією. Якщо ціль була хвора або отруєна, коли ти виконуєш це заклинання, або стає хворою або отруєною, перебуваючи під його дією, то хвороби і отрути не роблять ніякого ефекту, доки заклинання не скінчиться.',
    distance: 'Дотик',
    components: {
      c: true,
      t: true,
      m: 'щіпка цвинтарної землі',
    },
    duration: 3600,
    castTime: 0,
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    target: 'істота',
    numberOfTargets: 1,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: true,
    actionType: Action.Action,
    damageType: [],
  },
};

enum Class {
  Artificer = 'Artificer',
  Bard = 'Bard',
  Cleric = 'Cleric',
  Druid = 'Druid',
  Paladin = 'Paladin',
  Ranger = 'Ranger',
  Sorcerer = 'Sorcerer',
  Warlock = 'Warlock',
  Wizard = 'Wizard',
}

const ClassSpells: { [key: string]: Array<Spell> } = {
  [Class.Artificer]: [],
  [Class.Bard]: [Spell.Fireball, Spell.Bless, Spell.AuraOfLife],
  [Class.Cleric]: [],
  [Class.Druid]: [Spell.Fireball],
  [Class.Paladin]: [Spell.Fireball, Spell.HeroesFeast, Spell.DetectMagic],
  [Class.Ranger]: [Spell.Fireball],
  [Class.Sorcerer]: [Spell.Fireball],
  [Class.Warlock]: [Spell.Fireball],
  [Class.Wizard]: [
    Spell.Fireball,
    Spell.Bless,
    Spell.AuraOfLife,
    Spell.FeignDeath,
    Spell.DivineFavor,
  ],
};

// const ClassSpellsMap: Map<Class, Array<Spell>> = new Map();
// ClassSpellsMap.set(Class.Artificer, []);
// ClassSpellsMap.set(Class.Bard, [Spell.Fireball, Spell.Bless, Spell.AuraOfLife]);
// ClassSpellsMap.set(Class.Cleric, []);
// ClassSpellsMap.set(Class.Druid, [Spell.Fireball]);
// ClassSpellsMap.set(Class.Paladin, [Spell.Fireball, Spell.HeroesFeast, Spell.DetectMagic]);
// ClassSpellsMap.set(Class.Ranger, [Spell.Fireball]);
// ClassSpellsMap.set(Class.Sorcerer, [Spell.Fireball]);
// ClassSpellsMap.set(Class.Warlock, [Spell.Fireball]);
// ClassSpellsMap.set(Class.Wizard, [
//   Spell.Fireball,
//   Spell.Bless,
//   Spell.AuraOfLife,
//   Spell.FeignDeath,
//   Spell.DivineFavor,
// ]);

const classList = [
  // Class.Artificer,
  Class.Bard,
  Class.Cleric,
  Class.Druid,
  Class.Paladin,
  Class.Ranger,
  Class.Sorcerer,
  Class.Warlock,
  Class.Wizard,
];

export default {
  Spell,
  spells,
  Class,
  ClassSpells,
  Action,
  MagicSchool,
  classList,
};

export { Spell, spells, Class, ClassSpells, Action, MagicSchool, classList };
