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
  private num = 0;
  private idChoose1: number;
  private idChoose2: number;
  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder) { }
  pokeForm: FormGroup;
  private pokemons: Pokemon[] = [];

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

  // pokemonChoosen(id: number) {
  //   console.log(this.pokeArray[id]);
  // }

  pokemonChoosen(id: number) {
    if (this.num < 1) {
      this.idChoose1 = id;
      this.num++;
      console.log(this.idChoose1, this.num);
    } else if (this.num < 2) {
      this.idChoose2 = id;
      this.num++;
      console.log(this.idChoose2, this.num);
    }
  }

  choose2Pokemons() {
    this.pokemonService.pickPokemons(this.pokeArray[this.idChoose1], this.pokeArray[this.idChoose2]);
    // this.pokemons.push(this.pokeArray[this.idChoose1]);
    // this.pokemons.push(this.pokeArray[this.idChoose2]);
    console.log(this.pokeArray[this.idChoose1], this.pokeArray[this.idChoose2]);
  }

  poke() {
    console.log('lol');
  }



}
