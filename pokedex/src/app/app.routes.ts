import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {path:'',component:PokemonListComponent},
    {path:'pokemon/:name', component: PokemonDetailComponent}
];
