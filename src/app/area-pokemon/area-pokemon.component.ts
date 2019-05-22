import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../Pokemon';

@Component({
  selector: 'app-area-pokemon',
  templateUrl: './area-pokemon.component.html',
  styleUrls: ['./area-pokemon.component.css']
})
export class AreaPokemonComponent implements OnInit {

  private pokeArray: Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokeArray = [];
    this.allPokemons();
  }

  allPokemons() {
    let i = 1;
    for (i ; i < 152; i++) {
      this.pokemonService.getPokemon(i.toString()).subscribe(test => {
        this.pokeArray.push(new Pokemon(test.name, test.sprites.front_default,
          test.stats[0].base_stat, test.stats[4].base_stat, test.stats[5].base_stat));
      });
    }
    console.log('--------------------------- ' + this.pokeArray + ' --------------------------- ');
  }
}
