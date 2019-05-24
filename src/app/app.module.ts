import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AreaPokemonComponent } from './area-pokemon/area-pokemon.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PokemonService} from './pokemon.service';
import {MessageService} from './message.service';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AreaPokemonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterTestingModule
  ],
  providers: [
    PokemonService, MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
