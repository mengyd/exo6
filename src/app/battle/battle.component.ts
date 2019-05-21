import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../entities/Pokemon';
import {PokemonComponent} from '../pokemon/pokemon.component';
import {BattleService} from '../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  pokemon1 = new Pokemon('Pikachu', 70, 80, 20, 100, 40, '../../assets/img/pikachu.jpg');
  pokemon2 = new Pokemon('Meowth', 70, 80, 20, 100, 40, '../../assets/img/meowth.jpg');

  constructor(private battleServie: BattleService) {
  }

  ngOnInit() {
    this.battleServie.battle(this.pokemon1, this.pokemon2);
  }

}
