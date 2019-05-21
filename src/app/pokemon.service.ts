import { Injectable } from '@angular/core';
import {Pokemon} from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private poke1Faster: boolean;
  private i = 0;
  constructor() { }

  goTOFight(pokemon1: Pokemon, pokemon2: Pokemon): void {
    if (pokemon1.getLife() > 0 && pokemon2.getLife() > 0) {
      if (pokemon1 === pokemon1.compareSpeedOfPokemons(pokemon2) && this.i === 0) {
        this.poke1Faster = true;
      } else {
        this.poke1Faster = false;
      }
      if (this.poke1Faster === true) {
        pokemon1.attack(pokemon2);
        this.poke1Faster = false;
      } else {
        pokemon2.attack(pokemon1);
        this.poke1Faster = true;
      }
      console.log(this.poke1Faster);
      console.log("pokemon1.life - " +pokemon1.getLife());
      console.log("pokemon2.life - " +pokemon2.getLife());
      this.i++;
    }
  }
}
