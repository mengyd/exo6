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

  pokemons: [Pokemon];
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  inter;
  ngOnInit() {
    this.pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 3, 2110);
    this.pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 2100);
    this.pokemons.push(this.pokemon1);
    this.pokemons.push(this.pokemon2);
  }

  fight() {
    this.inter = setInterval(() => { this.pokemonService.goTOFight(this.pokemon1, this.pokemon2); }, 1000);
  }
  pause() {
    clearInterval(this.inter);
  }
}
