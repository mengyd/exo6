import {async, TestBed} from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {Pokemon} from './Pokemon';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('PokemonService', () => {
  const pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 3, 20);
  const pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 15);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [PokemonService],
    imports: [HttpClientTestingModule]
  }));

  test('should be created', async (() => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  }));

  test('leviathan should be attacked', async (() => {
    const service: PokemonService = TestBed.get(PokemonService);
    service.goTOFight(pokemon1, pokemon2, pokemon1, 1000, 200);
    expect(pokemon2.getLife()).toBe(12);
  }));

  test('pikachu should be attacked', async (() => {
    const service: PokemonService = TestBed.get(PokemonService);
    service.goTOFight(pokemon1, pokemon2, pokemon2, 1000, 200);
    expect(pokemon1.getLife()).toBe(16);
  }));

  test('should called clearInterval', async(() => {
    const service: PokemonService = TestBed.get(PokemonService);
    const diedPokemon = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 0);
    window.clearInterval = jest.fn();
    service.goTOFight(pokemon1, diedPokemon, pokemon1, 1000, 200);
    expect(clearInterval).toHaveBeenCalledWith(1000);
  }));

  test('should return 1 pokemon', async(() => {
    const pokemonService = TestBed.get(PokemonService);
    const http = TestBed.get(HttpTestingController);
    // tslint:disable-next-line:max-line-length
    const mockedPokemon = {name: 'Pikachu', sprites: {front_default: 'image1'}, stats: [{base_stat: 10}, {base_stat: 20}, {base_stat: 30}, {base_stat: 40}, {base_stat: 50}, {base_stat: 60}]};

    pokemonService.getPokemon('Pikachu')
      .subscribe();
    http.expectOne('https://pokeapi.co/api/v2/pokemon/Pikachu').flush(mockedPokemon);
  }));

  // test('should return array of pokemons', async(() => {
  //   const pokemonService = TestBed.get(PokemonService);
  //   const http = TestBed.get(HttpTestingController);
  //   const mockedPokemons = [""
  //     {name: 'Pikachu', sprites: {front_default: 'image1'}, stats: [
  //       {base_stat: 10}, {base_stat: 20}, {base_stat: 30}, {base_stat: 40}, {base_stat: 50}, {base_stat: 60}
  //       ]
  //     },
  //     {name: 'Pikachu', sprites: {front_default: 'image1'},
  //       stats: [
  //         {base_stat: 10}, {base_stat: 20}, {base_stat: 30}, {base_stat: 40}, {base_stat: 50}, {base_stat: 60}
  //         ]
  //     }];
  // }));
});
