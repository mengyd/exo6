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
        this.pokemonService.getPokemon(params.fighter1).subscribe(
          pok => {
            console.log(pok);
            this.pokemons.push(pok);
          }
        );
        this.pokemonService.getPokemon(params.fighter2).subscribe(
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
    this.pokemon2 = this.pokemons.pop();
    this.pokemon1 = this.pokemons.pop();
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
     /* if (this.pokemon1.getLife() <= 0 || this.pokemon2.getLife() <= 0) {
        if (this.pokemon1.getLife() > this.pokemon2.getLife()) {
          this.message = new Message('le gagnant est ' + this.pokemon1.getName(), 'green');
        } else {
          this.message = new Message('le gagnant est ' + this.pokemon2.getName(), 'green');
        }
        this.isWinner = true;
        this.messageService.addMessage(this.message);
        clearInterval(this.counter);
        clearInterval(this.inter);
      } else {
        this.pokemonService.goTOFight(this.pokemon1, this.pokemon2, this.attacker, this.inter, this.counter);
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
      }*/
  }

  pause() {
    clearInterval(this.inter);
    clearInterval(this.counter);
  }

  getDialog() {
    this.messages = this.messageService.getAllMessage();
  }
}
