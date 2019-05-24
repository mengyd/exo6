import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {AreaPokemonComponent} from './area-pokemon/area-pokemon.component';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PokemonComponent,
        AreaPokemonComponent,
      ],
      providers: [AppComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  }));

  test('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
/*
  test(`should have as title 'exo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('exo');
  }));

  test('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to exo!');
  }));*/
});

