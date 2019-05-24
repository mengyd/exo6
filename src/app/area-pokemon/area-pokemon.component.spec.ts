import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AreaPokemonComponent } from './area-pokemon.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";

describe('AreaPokemonComponent', () => {
  let component: AreaPokemonComponent;
  let fixture: ComponentFixture<AreaPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPokemonComponent ],
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
