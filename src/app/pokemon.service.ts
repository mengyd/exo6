import { Injectable } from '@angular/core';
import {Pokemon} from './Pokemon';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {forkJoin, interval, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Message} from './Message';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private poke1Faster: boolean;
  private i = 0;
  private isWinner: boolean = false;
  private source = interval(1000);

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: false
  };
  private message: Message;

  fight(pokemon1: Pokemon, pokemon2: Pokemon, attacker: Pokemon): Observable<Message> {
    return interval(1000).pipe(
      map(x => {
        if (this.isWinner === false) {
          if (pokemon1.getLife() <= 0 || pokemon2.getLife() <= 0) {
            if (pokemon1.getLife() > pokemon2.getLife()) {
              this.message = new Message('le gagnant est ' + pokemon1.getName(), 'green');
            } else {
              this.message = new Message('le gagnant est ' + pokemon2.getName(), 'green');
            }
            this.isWinner = true;
            return this.message;
            /*clearInterval(this.counter);
            clearInterval(this.inter);*/
          } else {
            this.goTOFight(pokemon1, pokemon2, attacker);
            if (attacker === pokemon1) {
              this.message = new Message(attacker.getName() + ' attack il enleve ' +
                attacker.getPower() + ' hp a ' + pokemon2.getName(), 'yellow');
              attacker = pokemon2;
              return this.message;
            } else {
              this.message = new Message(attacker.getName() + ' attack il enleve ' +
                attacker.getPower() + ' hp a ' + pokemon1.getName(), 'blue');
              attacker = pokemon1;
              return this.message;
            }
          }
          return this.message;
        } else {
          return this.message = new  Message('Fin', 'purple');
        }
      })
    );
  }

  goTOFight(pokemon1: Pokemon, pokemon2: Pokemon, attacker: Pokemon): void {
    if (pokemon1.getLife() > 0 && pokemon2.getLife() > 0) {
      if (attacker === pokemon1) {
        attacker.attack(pokemon2);
      } else {
        attacker.attack(pokemon1);
      }
    } else {
      this.isWinner = true;
    }
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((x: any) => {
          console.log(x);
          return new Pokemon(x.name, x.sprites.front_default, x.stats[0].base_stat, x.stats[4].base_stat, x.stats[5].base_stat);
        })
      );
  }

  getAllPokemons(): Observable<Pokemon[]> {
    const requests = Array<Observable<Pokemon>>();

    for (let i = 1; i < 152; i++) {
      requests.push(this.getPokemon(`${i}`));
    }

    return forkJoin(requests);
  }
}
