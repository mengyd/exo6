import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../Pokemon';
import {interval} from 'rxjs';
import {MessageService} from '../message.service';
import {Message} from '../Message';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  attacker: Pokemon;
  inter;
  counter;
  message: Message;
  messages: Message[];
  isWinner = false;
  today: number;
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(private pokemonService: PokemonService, private messageService: MessageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params): void => {
        console.log(params.fighter1);
        console.log(params.fighter2);
        this.pokemonService.getPokemon(String(Number(params.fighter1) + 1)).subscribe(
          pok => {
            console.log(pok);
            this.pokemons.push(pok);
            console.log(this.pokemons);
          }
        );
        this.pokemonService.getPokemon(String(Number(params.fighter2) + 1)).subscribe(
          pok => {
            console.log(pok);
            this.pokemons.push(pok);
          }
        );
      });


  }

  // allPokemons() {
  //   let i = 0;
  //   for (i ; i < 152; i++) {
  //     this.pokemonService.getPokemon(i.toString()).subscribe(test => {
  //       console.log(test);
  //       this.pokemons.push(test);
  //       this.pokeArray.push(test);
  //       // console.log(this.pokeArray[i]);
  //       console.log(this.pokeArray[i - 1]);
  //     });
  //   }
  // }

  test() {
    /*console.log(this.pokemonService.getPokemon(`${i}`));*/
  }

  countTime() {
    this.counter = setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

  fight() {
    this.pokemon2 = this.pokemons[0];
    this.pokemon1 = this.pokemons[1];
    this.attacker = this.pokemon1.compareSpeedOfPokemons(this.pokemon2);
    console.log(this.pokemon1);
    console.log(this.pokemon2);

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
