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
    this.test();
  }

  test() {
    this.pokemonService.getAllPokemons().subscribe(
      x =>  {
        console.log(x);
        this.pokeArray = x;
      }
    );
    console.log('---------------- ' + this.pokeArray);
  }

  pokemonChoosen(id: number) {
    console.log(this.pokeArray[id]);

  }
}
