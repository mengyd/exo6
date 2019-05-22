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

  ngOnInit() {
    this.pokemons = [];
    this.pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 3, 30);
    this.pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 20);
    this.attacker = this.pokemon1.compareSpeedOfPokemons(this.pokemon2);
    this.pokemons.push(this.pokemon1);
    this.pokemons.push(this.pokemon2);
  }

  fight() {
    this.inter = setInterval(() => {
      this.pokemonService.goTOFight(this.pokemon1, this.pokemon2, this.attacker);
      if (this.attacker === this.pokemon1) {
        this.message = new Message(this.attacker.getName() + ' attack il enleve ' +
          this.attacker.getPower() + ' hp a ' + this.pokemon2.getName(), 'yellow');
        this.messageService.addMessage(this.message);
        this.attacker = this.pokemon2;
      } else {
        console.log('dekdekoeffekofeokfekofekofe');
        this.message = new Message(this.attacker.getName() + ' attack il enleve ' +
          this.attacker.getPower() + ' hp a ' + this.pokemon1.getName(), 'blue');
        this.attacker = this.pokemon1;
        this.messageService.addMessage(this.message);
      }
      this.getDialog();
    }, 1000);
  }

  pause() {
    clearInterval(this.inter);
  }

  getDialog() {
    this.messages = this.messageService.getAllMessage();
  }
}
