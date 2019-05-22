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
  message: Message;
  messages: Message[];
  isWinner = false;
  today = new Date();

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

  fight() {
    this.inter = setInterval(() => {
      if (this.pokemon1.getLife() <= 0 || this.pokemon2.getLife() <= 0) {
        if (this.pokemon1.getLife() > this.pokemon2.getLife()) {
          this.message = new Message('le gagnant est ' + this.pokemon1.getName(), 'green');
        } else {
          this.message = new Message('le gagnant est ' + this.pokemon2.getName(), 'green');
        }
        this.isWinner = true;
        this.messageService.addMessage(this.message);
        clearInterval(this.inter);
      } else {
        this.pokemonService.goTOFight(this.pokemon1, this.pokemon2, this.attacker, this.inter);
        if (this.attacker === this.pokemon1) {
          this.message = new Message(this.attacker.getName() + ' attack il enleve ' +
            this.attacker.getPower() + ' hp a ' + this.pokemon2.getName(), 'yellow');
          this.messageService.addMessage(this.message);
          this.attacker = this.pokemon2;
        } else {
          this.message = new Message(this.attacker.getName() + ' attack il enleve ' +
            this.attacker.getPower() + ' hp a ' + this.pokemon1.getName(), 'blue');
          this.attacker = this.pokemon1;
          this.messageService.addMessage(this.message);
        }
        this.getDialog();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.inter);
  }

  getDialog() {
    this.messages = this.messageService.getAllMessage();
  }
}
