import {async, TestBed} from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {Pokemon} from './Pokemon';

describe('PokemonService', () => {
  const pokemon1 = new Pokemon('pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 10, 3, 20);
  const pokemon2 = new Pokemon('leviathan', 'https://www.pokebip.com/pokedex-images/artworks/130.png', 11, 4, 15);

  beforeEach(() => TestBed.configureTestingModule({}));

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
});
