import { Injectable } from '@angular/core';
import {Pokemon} from './Pokemon';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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

  goTOFight(pokemon1: Pokemon, pokemon2: Pokemon, attacker: Pokemon, inter: any): void {
    if (pokemon1.getLife() > 0 && pokemon2.getLife() > 0) {
      if (attacker === pokemon1) {
        attacker.attack(pokemon2);
      } else {
        attacker.attack(pokemon1);
      }
    } else {
      clearInterval(inter);
    }
  }

  getPokemon(name: string): Observable<any> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map(json => json)
      );
  }

  getAllPokemons(): Observable<any[]> {
    const requests = Array<Observable<any>>();

    for (let i = 1; i < 152; i++) {
      requests.push(this.getPokemon(`${i}`));
    }

    return forkJoin(requests);
  }
}
