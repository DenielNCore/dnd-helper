import { Spell } from '@/types/spell';
import { ClassSpells } from '@/SpellList';
import { ClassesMap } from '@/SpellMapping';

type StringIndexType = 0 | 1 | 2;
const getStringIndex = (amount: number, before: boolean): StringIndexType => {
  let result: StringIndexType;

  if (amount === 1) result = 0;
  else if (amount < 5) result = 1;
  else if (amount < 21) result = 2;
  else if (amount === 21) result = 0;
  else if (amount < 25) result = 1;
  else if (amount < 31) result = 2;
  else if (amount === 31) result = 0;
  else if (amount < 35) result = 1;
  else if (amount < 41) result = 2;
  else if (amount === 41) result = 0;
  else if (amount < 45) result = 1;
  else if (amount < 51) result = 2;
  else if (amount === 51) result = 0;
  else if (amount < 55) result = 1;
  else result = 2;

  if (!before) return result;

  if (result === 0) return 1;
  if (result === 1) return 2;
  return result;
};

const convertTimeToText = (
  seconds: number | 'Доки не буде розсіяне або не спрацює' | 'Доки не розсіється або не спрацює',
  before: boolean = false,
  namings = {
    sec: ['секунда', 'секунди', 'секунд'],
    min: ['хвилина', 'хвилини', 'хвилин'],
    hour: ['година', 'години', 'годин'],
  },
): string => {
  if (typeof seconds === 'string') return seconds;

  if (!seconds) return 'Миттєва';

  let time = '';

  const hourCont = Math.floor(seconds / 60 / 60);
  const minuteCont = Math.floor((seconds - hourCont * 60 * 60) / 60);
  const secondCont = Math.floor(seconds - hourCont * 60 * 60 - minuteCont * 60);

  if (seconds < 60) {
    const si = getStringIndex(secondCont, before);
    time = `${secondCont} ${namings.sec[si]}`;
  } else if (seconds < 60 * 60) {
    const mi = getStringIndex(minuteCont, before);

    if (secondCont) {
      const si = getStringIndex(minuteCont, before);
      time = `${minuteCont} ${namings.min[mi]} ${secondCont} ${namings.sec[si]}`;
    } else {
      time = `${minuteCont} ${namings.min[mi]}`;
    }
  } else {
    const hi = getStringIndex(hourCont, before);
    time = `${hourCont} ${namings.hour[hi]}`;

    if (secondCont || minuteCont) console.warn(`No integer number of hours${seconds}`);
  }

  if (before) return `До ${time}`;
  return time;
};

const convertDistanceToText = (distance: number | 'На себе' | 'Дотик') => {
  if (typeof distance === 'string') return distance;

  if (distance >= 1000) return `${distance / 1000} кіломатрів`;

  return `${distance} метрів`;
};

const getClassList = (spellId: Spell) => {
  const classList = Object.entries(ClassSpells)
    .map(([className, list]) => {
      return list.includes(spellId) ? ClassesMap[className] : null;
    })
    .filter(el => el)
    .join(', ');

  if (classList.length > 50) {
    return classList
      .split(', ')
      .map((name: string) => {
        return name.slice(0, 6);
      })
      .join(', ');
  }
  if (classList.length > 60) {
    return classList
      .split(', ')
      .map((name: string) => {
        return name.slice(0, 4);
      })
      .join(', ');
  }
  return classList;
};

export default { convertTimeToText, convertDistanceToText, getClassList };
export { convertTimeToText, convertDistanceToText, getClassList };
