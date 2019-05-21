import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../Pokemon';
import {interval} from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemon1: Pokemon;
  pokemon2: Pokemon;
  secondsCounter = interval(1000);

  ngOnInit() {
    this.pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 2, 20);
    this.pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 3, 21);
  }

  fight() {
    this.secondsCounter.subscribe(n =>
    this.pokemonService.goTOFight(this.pokemon1, this.pokemon2));
  }

}
