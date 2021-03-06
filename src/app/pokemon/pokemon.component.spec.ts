import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from "@angular/router";

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      providers: [PokemonComponent, ActivatedRoute],
      imports: [HttpClientTestingModule, ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', async(() => {
    expect(component).toBeTruthy();
  }));
/*
  test('pause should call clearInterval', async(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    window.clearInterval = jest.fn();
    component.pause();
    expect(clearInterval).toHaveBeenCalledWith(component.inter);
  }));*/
});
