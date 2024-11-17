import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { FavoritePokemonsComponent } from './components/Pokebola/favorite-components.component';

export const routes: Routes = [
    {path:'',component:PokemonsComponent},
    {path:'pokemon/:name', component: PokemonDetailComponent},
    {path:'favorites',component:FavoritePokemonsComponent}
];
