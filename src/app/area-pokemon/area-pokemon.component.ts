import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../Pokemon';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-area-pokemon',
  templateUrl: './area-pokemon.component.html',
  styleUrls: ['./area-pokemon.component.css']
})
export class AreaPokemonComponent implements OnInit {

  private pokeArray: Pokemon[];
  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder) { }
  pokeForm: FormGroup;
  ngOnInit() {
    this.pokeArray = [];
    this.test();
    this.pokeForm  =  this.formBuilder.group({
      fighter1: ['', Validators.required],
      fighter2: ['', Validators.required]
    });
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

  poke(){
    console.log('lol');
  }
}
