import FireBall from '@/assets/fire-ball.png';
import { Spell } from '@/SpellList';

const getImgUrl = (name: string): string => {
  switch (Spell[name]) {
    case Spell.Fireball:
      return FireBall;

    default:
      return '';
  }
};

export default getImgUrl;
