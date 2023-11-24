import { Spell } from '@/types/spell';
import FireBall from '@/assets/fire-ball.png';

const getImgUrl = (name: string): string => {
  switch (Spell[name]) {
    case Spell.Fireball:
      return FireBall;

    default:
      return '';
  }
};

export default getImgUrl;
