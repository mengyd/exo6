import { Injectable } from '@angular/core';
import {Pokemon} from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private poke1Faster: boolean;
  private i = 0;
  constructor() { }

  goTOFight(pokemon1: Pokemon, pokemon2: Pokemon, attacker: Pokemon): void {
    if (pokemon1.getLife() > 0 && pokemon2.getLife() > 0) {
      if (attacker === pokemon1) {
        attacker.attack(pokemon2);
      } else {
        attacker.attack(pokemon1);
      }
    }
  }
}
