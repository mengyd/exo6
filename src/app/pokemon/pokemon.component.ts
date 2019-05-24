import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../Pokemon';
import {interval} from 'rxjs';
import {MessageService} from '../message.service';
import {Message} from '../Message';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private messageService: MessageService) {
  }

  pokemons: Pokemon[];
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  attacker: Pokemon;
  inter;
  counter;
  message: Message;
  messages: Message[];
  isWinner = false;
  today: number;

  ngOnInit() {
    this.allPokemons();
    this.pokemons = [];
    this.pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 3, 20);
    this.pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 15);
    this.attacker = this.pokemon1.compareSpeedOfPokemons(this.pokemon2);
    this.pokemons.push(this.pokemon1);
    this.pokemons.push(this.pokemon2);
  }

  allPokemons() {
    let i = 1;
    for (i ; i < 152; i++) {
      this.pokemonService.getPokemon(i.toString()).subscribe(test => {
        console.log(test);
      });
    }
  }

  countTime() {
    this.counter = setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

  fight() {
    const subscriber = this.pokemonService.fight(this.pokemon1, this.pokemon2, this.attacker).subscribe(
      message => {
        this.messageService.addMessage(message);
        this.messages = this.messageService.getAllMessage();
        if (message.getMessage() === 'Fin') {
          subscriber.unsubscribe();
        }
      }
    );
    this.getDialog();
  }

  pause() {
    this.pokemonService.pause();
  }

  getDialog() {
    this.messages = this.messageService.getAllMessage();
  }
}
