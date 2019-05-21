import {Pokemon} from './entities/Pokemon';
export function turnOrder(poke1: Pokemon, poke2: Pokemon): Pokemon {
  if (poke1.getSpeed() > poke2.getSpeed()) {
    return poke1;
  }
  return poke2;
}

export function random100(): number {
  return Math.floor(Math.random() * 100);
}

export function died(poke: Pokemon): boolean {
  if (poke.getLife() > 0) {
    return false;
  }
  return true;
}
