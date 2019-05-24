import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AreaPokemonComponent } from './area-pokemon.component';
<<<<<<< HEAD:src/app/area-pokemon/area-pokemon.component.spec.ts
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
=======
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
>>>>>>> 953c8944573996547b39c465803f2429b3b3e1c6:src/app/area-pokemon/area-pokemon.component.spec.ts

describe('AreaPokemonComponent', () => {
  let component: AreaPokemonComponent;
  let fixture: ComponentFixture<AreaPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/area-pokemon/area-pokemon.component.spec.ts
      declarations: [ AreaPokemonComponent ],
=======
      declarations: [ AreaPokemonComponent],
>>>>>>> 953c8944573996547b39c465803f2429b3b3e1c6:src/app/area-pokemon/area-pokemon.component.spec.ts
      providers: [AreaPokemonComponent, FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
