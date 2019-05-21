import { Injectable } from '@angular/core';
import {Pokemon} from './entities/Pokemon';
import {died, turnOrder} from './functions';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() {
  }

  battle(poke1: Pokemon, poke2: Pokemon): void {
    console.log(poke1.getName() + ' VS ' + poke2.getName());
    console.log('**************************')

    let end = false;

    while (end !== true) {
      if (turnOrder(poke1, poke2).getName() === poke1.getName()) {
        poke1.attack(poke2);
        if (died(poke2)) {
          end = true;
          console.log(poke1.getName() + ' has won!');
          break;
        }

        console.log('>>>');

        poke2.attack(poke1);
        if (died(poke1)) {
          end = true;
          console.log(poke2.getName() + ' has won!');
        }
      } else {
        poke2.attack(poke1);
        if (died(poke1)) {
          end = true;
          console.log(poke2.getName() + ' has won!');
          break;
        }

        console.log('>>>');

        poke1.attack(poke2);
        if (died(poke2)) {
          end = true;
          console.log(poke1.getName() + ' has won!');
        }
      }

      console.log("---------------------------");
    }

  }
}
