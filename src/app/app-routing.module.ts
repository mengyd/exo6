import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreaPokemonComponent} from './area-pokemon/area-pokemon.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'area', component: AreaPokemonComponent},
  {path: 'fight/:fighter1/:fighter2', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
