export interface ISpell {
  name: string;
  lvl: number;
  school: string;
  description: string;
  distance: string;
  components: {
    c?: boolean;
    t?: boolean;
    m?: string;
  };
  duration: string;
  highLvl: {
    has: boolean;
    from?: number;
    description?: string;
    effect?: string;
  };
  concentration: boolean;
  targets: number;
  freeWay: boolean;
  self: boolean;
  area: string;
  saveThough: string;
  attack: string;
  ritual: boolean;
  actionType: string;
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
    distance: '30 метрів',
    components: {
      c: true,
      t: true,
      m: 'крихітна кулька з гуано кажана і сірки',
    },
    duration: 'Миттєва',
    highLvl: {
      has: true,
      from: 4,
      description:
        'Якщо ти виконуєш це заклинання, витрачаючи магічний слот 4 рівня або вищого, його ушкодження збільшуються на 1к6 за кожен рівень слота вище 3-го.',
      effect: '',
    },
    concentration: false,
    targets: 0,
    freeWay: true,
    self: false,
    area: 'сфера з радіусом 4 метри',
    saveThough: 'Вправності',
    attack: '',
    ritual: false,
    actionType: 'Дія',
    damageType: ['вогонь'],
  },
  [Spell.DetectMagic]: {
    name: 'ВИЯВЛЕННЯ МАГІЇ',
    lvl: 1,
    school: 'віщування (ритуал)',
    description:
      'Доки заклинання триває, ти відчуваєш присутність магії в межах 6 метрів від тебе. Якщо ти відчув за рахунок цього заклинання присутність магії, ти можеш використати свій вчинок, щоб побачити слабку ауру навколо видимої істоти або предмета, що несе на собі магію, а також дізнатися шко- лу цієї магії, якщо вона є. Це заклинання пронизує більшу частину бар’єрів, але блокується 30 сантиметрами каменю, 3 сантиметрами зви- чайного металу, тонким листом свинцю або 1 метром дере- ва або землі.',
    distance: 'На себе',
    components: {
      c: true,
      t: true,
      m: 'Т',
    },
    duration: 'До 10 хвилин',
    highLvl: {
      has: false,
    },
    concentration: true,
    targets: 0,
    freeWay: false,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: true,
    actionType: '1 вчинок',
    damageType: [],
  },

  [Spell.Bless]: {
    name: 'БЛАГОСЛОВЕННЯ',
    lvl: 1,
    school: 'причарування',
    description:
      'Ти благословляєш не більше трьох істот на твій вибір в межах дистанції. Кожен раз, коли до закінчення ефекту заклинання ціль здійснює кидок атаки або кидок рятунку, вона може кинути додатково к4 і додати число, яке випало, до результату того кидка.',
    distance: '6 метрів',
    components: {
      c: true,
      t: true,
      m: 'крапля святої води',
    },
    duration: 'До 1 хвилини',
    highLvl: {
      has: true,
      from: 2,
      description:
        'Ти можеш обрати цілями по одній додатковій істоті за кожен рівень витраченого слота вище 1-го.',
      effect: '',
    },
    concentration: true,
    targets: 3,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: 'Дія',
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
    duration: 'До 1 хвилини',
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    targets: 0,
    freeWay: true,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: 'Бонусний вчинок',
    damageType: [],
  },
  [Spell.HeroesFeast]: {
    name: 'БЕНКЕТ ГЕРОЇВ',
    lvl: 6,
    school: 'виклик',
    description:
      'Ти організовуєш шикарний бенкет, який включає чудову їжу та напої. Бенкет триває 1 годину, і зникає після закінчення цього строку, але позитивні ефекти не вступають в силу, доки цей час не пройде. У бенкеті можуть брати участь до дванадцяти істот.',
    distance: '6 метрів',
    components: {
      c: true,
      t: true,
      m: 'інкрустована дорогоцінними каменями чаша, вартістю мінімум 1000 зм, яка поглинається заклинанням',
    },
    duration: 'Миттєва',
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: false,
    targets: 12,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: 'Виклик',
    damageType: [],
  },

  [Spell.AuraOfLife]: {
    name: 'АУРА ЖИТТЯ',
    lvl: 4,
    school: 'огородження',
    description:
      'Від тебе виходить аура, яка захищає життя, з радіусом 6 метрів. Доки заклинання триває, аура пересувається разом з тобою, залишаючись з центром на тобі. Всі неворожі істоти в аурі (включаючи тебе) отримують опір до ушкоджень некротичною енергією, і максимум їхнього здоров’я не може зменшуватися. Крім того, неворожі живі істоти, які починають хід в цій аурі з 0 здоров’я, відновлюють собі по 1 здоров’я.',
    distance: 'На себе',
    components: {
      c: true,
      t: false,
      m: '',
    },
    duration: 'До 10 хвилин',
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    targets: 0,
    freeWay: true,
    self: true,
    area: '6-метровий радіус',
    saveThough: '',
    attack: '',
    ritual: false,
    actionType: 'Дія',
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
    duration: '1 година',
    highLvl: {
      has: false,
      description: '',
      effect: '',
    },
    concentration: true,
    targets: 1,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: true,
    actionType: 'Дія',
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
  [Class.Bard]: [Spell.Fireball, Spell.Bless, Spell.AuraOfLife],
  [Class.Wizard]: [
    Spell.Fireball,
    Spell.Bless,
    Spell.AuraOfLife,
    Spell.FeignDeath,
    Spell.DivineFavor,
  ],
  [Class.Paladin]: [Spell.HeroesFeast, Spell.DetectMagic],
};

export default { Spell, spells, Class, ClassSpells };

export { Spell, spells, Class, ClassSpells };
