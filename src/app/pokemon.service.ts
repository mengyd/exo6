import { Injectable } from '@angular/core';
import {Pokemon} from './Pokemon';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private poke1Faster: boolean;
  private i = 0;

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: false
  };

  goTOFight(pokemon1: Pokemon, pokemon2: Pokemon, attacker: Pokemon, inter: any, counter: any): void {
    if (pokemon1.getLife() > 0 && pokemon2.getLife() > 0) {
      if (attacker === pokemon1) {
        attacker.attack(pokemon2);
      } else {
        attacker.attack(pokemon1);
      }
    } else {
      clearInterval(counter);
      clearInterval(inter);
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
