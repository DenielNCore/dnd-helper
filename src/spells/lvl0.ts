import { Action, ISpell, Source, MagicSchool } from '@/types/spell';
import { Spell } from '@/types/spells';

const spells: { -readonly [key in keyof typeof Spell]?: ISpell } = {
  [Spell.BladeWard]: {
    name: 'ЗАХИСТ ВІД ЗБРОЇ',
    lvl: 0,
    school: MagicSchool.Abjuration, // огородження
    actionType: Action.Action,
    castTime: 0,
    duration: 6, // 1 раунд = 6 секунд
    distance: 'На себе',
    target: '',
    numberOfTargets: 0,
    description:
      'Ти протягуєш руку і малюєш в повітрі огороджуючий знак. До кінця твого наступного ходу ти отримуєш опір до дробильних, колотих та рубаних ушкоджень, заподіяних атаками зброєю.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
      from: 0,
      description: '',
      effect: '',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.DancingLights]: {
    name: 'ТАНЦЮЮЧІ ВОГНИКИ',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0,
    duration: 60,
    distance: 24,
    target: '',
    numberOfTargets: 0,
    description:
      'Ти створюєш не більше чотирьох вогників розміром з факел в межах дистанції, та робиш їх схожими на факели, ліхтарі або сфери світла, які ширяють у повітрі. Ти можеш також об’єднати чотири вогника в одну людиноподібну фігуру Середнього розміру, яка світиться. Яку б форму ти не вибрав, кожен вогник випромінює тьмяне світло в радіусі 2 метрів і ти можеш своїм бонусним вчинком в свій хід пересунути вогники на 12 метрів у нове місце в межах дистанції. Кожен вогник повинен знаходитися в межах 4 метрів від іншого вогника, створеного цим заклинанням, і вогник згасає, якщо опиняється поза межами дистанції заклинання.',
    components: {
      c: true,
      t: true,
      m: 'шматочок фосфору, гнилиця або світлячок',
    },
    highLvl: {
      has: false,
      from: 0,
      description: '',
      effect: '',
    },
    concentration: true,
    canEndEarlier: true,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.Friends]: {
    name: 'ПРИЯЗНЬ',
    lvl: 0,
    school: MagicSchool.Enchantment, // причарування
    actionType: Action.Action,
    castTime: 0, // 0 вчинок
    duration: 60,
    distance: 'На себе',
    target: '', // Я не бачу конкретної цілі, тому залишив порожнім
    numberOfTargets: 1, // Одна вибрана тобою істота
    description:
      'Доки заклинання триває, ти робиш з перевагою усі перевірки Харизми, спрямовані на одну вибрану тобою істоту, яка не ворожа по відношенню до тебе. Коли заклинання за- кінчується, істота розуміє, що ти впливав на її відношення за допомогою магії, і стає ворожою по відношенню до тебе. Істота, яка є схильною до насильства, може напасти на тебе. Інші можуть вимагати іншої відплати (вирішує Майстер), в залежності від відносин, які склалися між вами.',
    components: {
      c: true,
      t: false,
      m: 'невелика кількість гриму, що наноситься на обличчя при виконанні цього заклинання',
    },
    highLvl: {
      has: false,
    },
    concentration: true,
    canEndEarlier: true,
    freeWay: true, // Не вказано, тому залишив true
    self: true, // На себе
    area: '', // Я не бачу конкретної області, тому залишив порожнім
    saveThough: '', // Я не бачу конкретних обставин для "порятунку", тому залишив порожнім
    attack: '', // Я не бачу конкретних обставин для атаки, тому залишив порожнім
    ritual: false,
    damageType: [], // Я не бачу конкретного виду ушкоджень, тому залишив порожнім
    source: Source.BasicRules,
  },

  [Spell.Light]: {
    name: 'СВІТЛО',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 3600,
    distance: 'Дотик',
    target: 'один предмет (довжина не перевищує 2 метри)',
    numberOfTargets: 1, // Один предмет
    description:
      'Ти торкаєшся до одного предмета, довжина якого ні по одному з вимірів не перевищує 2 метри. Доки заклинання триває, предмет випускає яскраве світло в радіусі 4 метрів і тьмяне світло в межах ще 4 метрів. Світло може бути будь-якого обраного тобою кольору. Повне покриття предмета чимось непрозорим блокує це світло. Заклинання закінчується, якщо ти виконуєш його ще раз або закінчиш його своїм вчинком. Якщо ти націлився на предмет, який тримає або носить ворожа істота, ця істота повинна зроби- ти успішний кидок рятунку Вправності, щоб ухилитися від заклинання.',
    components: {
      c: true,
      t: false,
      m: 'світлячок або фосфоресцентний мох',
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true, // Не вказано, тому залишив true
    self: false, // Дотик
    area: '', // Інформація не вказана, залишив порожнім
    saveThough: 'Рятунок Вправності', // Якщо ворожа істота тримає або носить предмет
    attack: '', // Інформація не вказана, залишив порожнім
    ritual: false,
    damageType: [], // Інформація не вказана, залишив порожнім
    source: Source.BasicRules,
  },

  [Spell.MageHand]: {
    name: 'МАГІЧНА РУКА',
    lvl: 0,
    school: MagicSchool.Conjuration, // викликання
    actionType: Action.Action,
    castTime: 0,
    duration: 60, // 1 хвилина
    distance: 6, // метрів
    target: 'точка в межах дистанції',
    numberOfTargets: 1,
    description:
      'У точці, обраній вами в межах дистанції, з’являється при-марна літаюча рука. Рука існує всю тривалість заклинання або доки ви не відпустите її своїм вчинком. Рука зникає, якщо виявиться далі, ніж за 6 метрів від вас, або якщо ви повторно виконаєте це заклинання. Ви можете своїм вчинком контролювати руку. Ви можете за її допомогою маніпулювати предметами, відкривати незачинені двері і контейнери, класти предмети у відкриті контейнери та діставати їх звідти, або виливати вміст посудин. При кожному використанні руки ви можете пересунути її на 6 метрів. Рука не може здійснювати атаки, активувати магічні предмети і переносити більше 4 кілограм.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.Mending]: {
    name: 'РЕМОНТ',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.LongTerm,
    castTime: 60, // 1 хвилина
    duration: 0,
    distance: 'Дотик',
    target: 'предмет, до якого ви торкаєтеся',
    numberOfTargets: 1,
    description:
      'Це заклинання лагодить одне пошкодження або розрив на предметі, до якого ви торкаєтесь, наприклад, розірвана ланка ланцюга, дві половинки зламаного ключа, порваний плащ або дірявий бурдюк. Якщо пошкодження або розрив не більше 30 сантиметрів у довжину, ви ремонтуєте його, не залишаючи слідів. Це заклинання може фізично полагодити магічний предмет або конструкта, але не може відновити магію в таких предметах.',
    components: {
      c: true,
      t: true,
      m: 'два магнетита',
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.Message]: {
    name: 'ПОВІДОМЛЕННЯ',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 6,
    distance: 24, // 24 метри
    target: 'істота, що знаходиться в межах дистанції',
    numberOfTargets: 1,
    description:
      'Ти вказуєш пальцем на істоту, яка знаходиться в межах дистанції, і шепочеш послання. Ціль (і тільки ціль) чує його, і може відповісти шепотом, який почуєш лише ти. Ти можеш виконувати це заклинання крізь тверді перешкоди, якщо ти знайомий із ціллю та знаєш, що вона знаходиться за бар’єром. Магічна тиша, 30 сантиметрів каменю, 3 сантиметри звичайного металу, тонкий лист свинцю або 1 метр дерева блокують заклинання. Заклинання не зобов’язане йти по прямій лінії, і може огинати кути і проходити через отвори.',
    components: {
      c: true,
      t: true,
      m: 'шматочок мідного дроту',
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.MinorIllusion]: {
    name: 'НЕЗНАЧНА ІЛЮЗІЯ',
    lvl: 0,
    school: MagicSchool.Illusion, // ілюзія
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 60,
    distance: 6, // 6 метрів
    target: '',
    numberOfTargets: 0,
    description:
      'Ти створюєш звук або образ предмета в межах дистанції, який існує, доки заклинання триває. Ілюзія також закінчується, якщо ти відпустиш її своїм вчинком або виконаєш це заклинання ще раз. Якщо ти створюєш звук, його гучність може бути як шепотом, так і криком. Якщо ти створюєш образ предмета — наприклад, стілець, відбиток в болоті, або невелику скриню — він повинен поміщатися в куб з довжиною ребра 1 метр. Образ не може видавати звуки, світло, запах або інші сенсорні ефекти. Фізична взаємодія з образом предмета дає зрозуміти, що це ілюзія, тому що крізь нього все проходить наскрізь. Якщо істота своїм вчинком досліджує звук або образ, вона може зрозуміти, що це ілюзія, зробивши успішну перевірку Інтелекту (Обстеження) проти СК твоїх заклинань. Якщо істота розпізнає ілюзію, вона для неї стає прозорою.',
    components: {
      c: true,
      t: true,
      m: 'шматок овечої вовни',
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.Prestidigitation]: {
    name: 'ФІГЛЯРСТВО',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 3600,
    distance: 2, // 2 метри
    target: '',
    numberOfTargets: 0,
    description:
      'Це заклинання — невеликий магічний трюк, на якому практикуються початківці-заклинателі. Ти створюєш один з наступних магічних ефектів в межах дистанції:\n' +
      '• Ти створюєш миттєвий нешкідливий сенсорний ефект, такий як жмут іскор, легкий порив вітру, тиху мелодію, або незвичайний запах.\n' +
      '• Ти миттєво запалюєш або гасиш свічку, факел або невелике багаття.\n' +
      '• Ти миттєво чистиш або позбавляєш від бруду предмет, розмірами не більший від 30 × 30 × 30 см.\n' +
      '• На одну годину ти охолоджуєш, нагріваєш або надаєш запах неживій матерії з розміром не більшим від 30 × 30 × 30 см.\n' +
      '• Ти створюєш на поверхні або предметі маленьку кольорову мітку або символ, який існує 1 годину.\n' +
      '• Ти створюєш немагічну дрібничку або ілюзорний предмет, який поміщається в твою долоню, та існує до кінця твого наступного ходу.\n' +
      'Якщо ти виконуєш це заклинання кілька разів, ти можеш мати не більше трьох нетривалих ефектів одночасно, і можеш своїм вчинком закінчити один з цих ефектів передчасно.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: true,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.TrueStrike]: {
    name: 'ІСТИННИЙ УДАР',
    lvl: 0,
    school: MagicSchool.Divination, // віщування
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 6,
    distance: 6, // 6 метрів
    target: '',
    numberOfTargets: 0,
    description:
      'Ти витягуєш руку і вказуєш пальцем на ціль, яка знаходиться в межах дистанції. Твоя магія дає коротке розуміння захисту цілі. У своєму наступному ходу ти робиш з перевагою перший кидок атаки по цій цілі, за умови, що заклинання до того моменту не закінчиться.',
    components: {
      c: true,
      t: false,
    },
    highLvl: {
      has: false,
    },
    concentration: true,
    canEndEarlier: true,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.ViciousMockery]: {
    name: 'ЗЛИЙ НАСМІХ',
    lvl: 0,
    school: MagicSchool.Enchantment, // причарування
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 12, // 12 метрів
    target: '',
    numberOfTargets: 0,
    description:
      'Ти випускаєш на істоту, яку бачиш в межах дистанції, потік лайки і образ упереміш з тонкою магією. Якщо ціль чує тебе (при цьому вона також повинна тебе розуміти), вона повинна зробити успішний кидок рятунку Мудрості, інакше отримає 1к4 ушкоджень психічною енергією і отримує перешкоду на свій наступний кидок атаки, яку здійснить до кінця свого наступного ходу. Ушкодження від цього заклинання збільшуються на 1к4, коли ти досягаєш 5 рівня (2к4), 11 рівня (3к4) і 17 рівня (4к4).',
    components: {
      c: true,
      t: false,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: false,
    self: false,
    area: '',
    saveThough: 'Мудрості',
    attack: '',
    ritual: false,
    damageType: ['психічні'],
    source: Source.BasicRules,
  },

  [Spell.Guidance]: {
    name: 'ПОРАДА',
    lvl: 0,
    school: MagicSchool.Divination, // віщування
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 60,
    distance: 'Дотик',
    target: 'однієї згідної істоти',
    numberOfTargets: 1,
    description:
      'Ти торкаєшся до однієї згідної істоти. Один раз, доки заклинання триває, ціль може кинути к4 і додати число, яке випало, до однієї перевірки характеристики на свій вибір. Цей кубик можна кинути до або після здійснення перевірки. Після цього заклинання закінчується.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
    },
    concentration: true,
    canEndEarlier: true,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.Resistance]: {
    name: 'ОПІР',
    lvl: 0,
    school: MagicSchool.Abjuration, // огородження
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 60,
    distance: 'Дотик',
    target: 'однієї згідної істоти',
    numberOfTargets: 1,
    description:
      'Ти торкаєшся до однієї згідної істоти. Доки заклинання триває, ціль може один раз кинути к4 і додати число, яке випало, до одного кидка рятунку на свій вибір. Кубик можна кинути до або після кидка рятунку. Після цього заклинання закінчується.',
    components: {
      c: true,
      t: true,
      m: 'крихітний плащ',
    },
    highLvl: {
      has: false,
    },
    concentration: true,
    canEndEarlier: true,
    freeWay: false,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },

  [Spell.SacredFlame]: {
    name: 'СВЯТЕ ПОЛУМ’Я',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 12, // метрів
    target: 'істоту, яку ти бачиш в межах дистанції',
    numberOfTargets: 1,
    description:
      'Схоже на вогонь сяйво опускається на істоту, яку ти бачиш в межах дистанції. Ціль повинна зробити успішний кидок рятунку Вправності, інакше вона отримує 1к8 ушкоджень випромінюванням. Для цього кидка рятунку ціль не отримує переваг від укриття. На вищих рівнях: Ушкодження цього заклинання збільшуються на 1к8, коли ти досягаєш 5 рівня (2к8), 11 рівня (3к8) і 17 рівня (4к8).',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      from: 5,
      description: 'Ушкодження збільшуються на 1к8',
      effect: 'Коли досягаєш 5 рівня (2к8), 11 рівня (3к8) і 17 рівня (4к8).',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: 'Вправності',
    attack: '',
    ritual: false,
    damageType: ['випромінювання'],
    source: Source.BasicRules,
  },
  [Spell.SpareTheDying]: {
    name: 'ДОГЛЯД ЗА ПОРАНЕНИМ',
    lvl: 0,
    school: MagicSchool.Necromancy, // некромантія
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 'Дотик', // Дотик
    target: 'жива істота, у якої 0 здоров’я',
    numberOfTargets: 1,
    description:
      'Ти торкаєшся до живої істоти, у якої 0 здоров’я. Вона стає стабілізованою. Це заклинання не робить ніякого ефекту на нежить і конструктів.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.Thaumaturgy]: {
    name: 'ЧУДОТВОРСТВО',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 60,
    distance: 6, // 6 метрів
    target: '',
    numberOfTargets: 0,
    description:
      'Ти твориш невелике диво, знак надприродної сили. Ти створюєш один з наступних магічних ефектів в межах дистанції: голос стає голосніше, полум’я мерехтить, тремтіння в підлозі, звук з обраної точки, вікно або двері відкриваються або закриваються, або зміна вигляду і колору очей.',
    components: {
      c: true,
      t: false,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: true,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules,
  },
  [Spell.Druidcraft]: {
    name: 'РЕМЕСЛО ДРУЇДІВ',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 6, // 6 метрів
    target: '',
    numberOfTargets: 0,
    description:
      'Пошепки поспілкувавшись із духами природи, ти створюєш один з наступних ефектів в межах дистанції: прогноз погоди, розквітлу рослину, відчутний ефект (падаюче листя, порив вітру, звук тварини, запах скунса), або запалення/гашення світла.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: [],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.PoisonSpray]: {
    name: 'ОТРУЙНІ БРИЗКИ',
    lvl: 0,
    school: MagicSchool.Conjuration, // викликання
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 2, // 2 метри
    target: '',
    numberOfTargets: 0,
    description:
      'Ти простягаєш руку до істоти, яку бачиш в межах дистанції, і випускаєш з долоні клуби токсичного газу. Ця істота має зробити успішний кидок рятунку Статури, інакше вона отримає 1к12 ушкоджень отрутою.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'Ушкодження цього заклинання збільшуються на 1к12 за кожний додатковий рівень: 5-й (2к12), 11-й (3к12), 17-й (4к12).',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: 'Стійкість',
    attack: '',
    ritual: false,
    damageType: ['отрута'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.ProduceFlame]: {
    name: 'СТВОРЕННЯ ВОГНЮ',
    lvl: 0,
    school: MagicSchool.Conjuration, // викликання
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 600,
    distance: 0, // На себе
    target: '',
    numberOfTargets: 0,
    description:
      'У твоїй долоні з’являється мерехтливе полум’я. Воно залишається там, доки заклинання триває, і не шкодить ні тобі, ні твоєму спорядженню. Вогонь випускає яскраве світло в радіусі 2 метрів і тьмяне світло в межах ще 2 метрів. Заклинання закінчується, якщо ти закінчуєш його вчинком або виконуєш його ще раз. Ти можеш атакувати цим полум’ям, але це теж закінчить це заклинання. Коли ти виконуєш це заклинання, або іншим вчинком в одному з наступних ходів, ти можеш кинути полум’я в істоту, яка знаходиться в межах 6 метрів від тебе. Здійсни далекобійну атаку заклинанням. При попаданні ціль отримує 1к8 ушкоджень вогнем.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'Ушкодження цього заклинання збільшуються на 1к8 за кожний додатковий рівень: 5-й (2к8), 11-й (3к8), 17-й (4к8).',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: true,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: ['вогонь'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.Shillelagh]: {
    name: 'ДУБИНКА',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.BonusAction,
    castTime: 0, // 1 бонусний вчинок
    duration: 60,
    distance: 0, // Дотик
    target: '',
    numberOfTargets: 0,
    description:
      'Дерево кийка або бойового посоха, який ти тримаєш, наповнюється силою природи. Доки заклинання триває, ти можеш використовувати свою базову характеристику замість Сили для кидків рукопашної атаки і ушкоджень при використанні цієї зброї, а її кубик ушкоджень стає к8. Якщо зброя не була магічною, вона стає такою. Заклинання закінчується, якщо ти виконуєш його ще раз або упускаєш цю зброю з рук.',
    components: {
      c: true,
      t: true,
      m: 'омела, лист конюшини і койок або бойовий посох',
    },
    highLvl: {
      has: false,
      description: '',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: '',
    ritual: false,
    damageType: ['фізичні'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.ThornWhip]: {
    name: 'ТЕРНОВИЙ БАТІГ',
    lvl: 0,
    school: MagicSchool.Transmutation, // видозміна
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 6, // 6 метрів
    target: 'одна істота',
    numberOfTargets: 1,
    description:
      'Ти створюєш довгий, схожий на лозу батіг, покритий шипами, який б’є по твоїй команді істоту, котра знаходиться в межах дистанції. Здійсни рукопашну атаку заклинанням по цілі. Якщо атака попадає, істота отримує 1к6 колотих ушкоджень, і якщо розмір істоти не більше Великого, ти підтягуєш цю істоту на 2 метри ближче до себе.',
    components: {
      c: true,
      t: true,
      m: 'стеблина рослини з шипами',
    },
    highLvl: {
      has: false,
      description: '',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '',
    attack: 'рукопашна атака',
    ritual: false,
    damageType: ['колоті'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },

  [Spell.AcidSplash]: {
    name: 'КИСЛОТНІ БРИЗКИ',
    lvl: 0,
    school: MagicSchool.Conjuration, // викликання
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 12, // 12 метрів
    target: 'одна істота або дві істоти в межах 1 метра одна від одної',
    numberOfTargets: 1,
    description:
      'Ти кидаєш кислотну кульку. Вибери одну істоту, яку бачиш в межах дистанції або дві істоти, яких бачиш в межах дистанції, і які знаходяться в межах 1 метра одна від одної. Ціль повинна зробити успішний кидок рятунку Вправності, інакше вона отримує 1к6 ушкоджень кислотою.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
      description: '',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: 'Вправності',
    attack: 'кидок',
    ritual: false,
    damageType: ['кислота'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },

  [Spell.ChillTouch]: {
    name: 'КРИЖАНИЙ ДОТИК',
    lvl: 0,
    school: MagicSchool.Necromancy, // некромантія
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 6,
    distance: 24, // 24 метри
    target: 'істота в межах дистанції',
    numberOfTargets: 1,
    description:
      'Ти створюєш примарну руку скелета в просторі істоти, яка знаходиться в межах дистанції. Здійсни далекобійну атаку заклинанням по істоті, щоб огорнути її могильним холодом. При попаданні ціль отримує 1к8 ушкоджень некротичною енергією, і не може відновлювати здоров’я до початку твого наступного ходу. Увесь цей час рука тримається за ціль. Якщо ти попадаєш по нежиті, то вона замість цього до кінця твого наступного ходу робить по тобі кидки атак з перешкодою.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: false,
      description: '',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '', // Яка характеристика для кидка рятунку?
    attack: 'кидок',
    ritual: false,
    damageType: ['некротична енергія'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },

  [Spell.FireBolt]: {
    name: 'ВОГНЯНИЙ ЗАРЯД',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 24, // 24 метри
    target: 'істота або предмет в межах дистанції',
    numberOfTargets: 1,
    description:
      'Ти кидаєш згусток вогню в істоту або предмет в межах дистанції. Здійсни по цілі далекобійну атаку заклинанням. При попаданні ціль отримує 1к10 ушкоджень вогнем. Легкозаймисті предмети, по яких влучило це заклинання, спалюються, якщо їх ніхто не тримає і не носить.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'Ушкодження збільшуються на 1к10 на кожному рівні вище 1-го: 2к10 на 5-му рівні, 3к10 на 11-му рівні, 4к10 на 17-му рівні.',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '', // Яка характеристика для кидка рятунку?
    attack: 'далекобійна атака',
    ritual: false,
    damageType: ['вогонь'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.RayOfFrost]: {
    name: 'МОРОЗНИЙ ПРОМІНЬ',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 12, // 12 метрів
    target: 'істота в межах дистанції',
    numberOfTargets: 1,
    description:
      'Холодний синьо-білий промінь спрямовується до істоти, яка знаходиться в межах дистанції. Здійсни по цілі далекобійну атаку заклинанням. При попаданні вона отримує 1к8 ушкоджень холодом, а її швидкість до початку твого наступного ходу зменшується на 2 метри.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'Ушкодження від виконання цього заклинання збільшуються на 1к8 на кожному рівні вище 1-го: 2к8 на 5-му рівні, 3к8 на 11-му рівні, 4к8 на 17-му рівні.',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '', // Яка характеристика для кидка рятунку?
    attack: 'далекобійна атака',
    ritual: false,
    damageType: ['холод'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
  [Spell.ShockingGrasp]: {
    name: 'ЕЛЕКТРОШОК',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 'Дотик',
    target: 'істота, до якої торкаєшся',
    numberOfTargets: 1,
    description:
      'Блискавка зістрибує з твоєї руки і вдаряє істоту, до якої ти торкаєшся. Здійсни по цілі рукопашну атаку заклинанням. Ти робиш кидок атаки з перевагою, якщо ціль носить обладунок з металу. При попаданні ціль отримує 1к8 ушкоджень електрикою, і до початку твого наступного ходу не може здійснювати реакції.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'Ушкодження заклинання збільшуються на 1к8 на кожному рівні вище 1-го: 2к8 на 5-му рівні, 3к8 на 11-му рівні, 4к8 на 17-му рівні.',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '', // Яка характеристика для кидка рятунку?
    attack: 'рукопашна атака',
    ritual: false,
    damageType: ['електрика'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },

  [Spell.EldritchBlast]: {
    name: 'МІСТИЧНИЙ ЗАРЯД',
    lvl: 0,
    school: MagicSchool.Evocation, // втілення
    actionType: Action.Action,
    castTime: 0, // 1 вчинок
    duration: 0,
    distance: 24,
    target: 'істота в межах дистанції',
    numberOfTargets: 1,
    description:
      'По істоті, яка знаходиться в межах дистанції, спрямовується промінь тріскотливої енергії. Здійсни далекобійну атаку заклинанням по цілі. При попаданні ціль отримує 1к10 ушкоджень силовим полем.',
    components: {
      c: true,
      t: true,
    },
    highLvl: {
      has: true,
      description:
        'На вищих рівнях: Заклинання створює ще один промінь, коли ти досягаєш вищих рівнів: два промені на 5 рівні, три промені на 11 рівні і чотири промені на 17 рівні. Ти можеш направити промені в одну ціль або в різні цілі. Для кожного променя роби окремий кидок атаки.',
    },
    concentration: false,
    canEndEarlier: false,
    freeWay: true,
    self: false,
    area: '',
    saveThough: '', // Яка характеристика для кидка рятунку?
    attack: 'далекобійна атака',
    ritual: false,
    damageType: ['силове поле'],
    source: Source.BasicRules, // Поміти, що це додаткове заклинання, створене для вашої кампанії
  },
};

export default spells;
