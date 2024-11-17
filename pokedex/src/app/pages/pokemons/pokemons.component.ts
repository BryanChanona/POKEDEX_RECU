import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { PokemonListComponent } from "../../components/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [HeaderComponent, PokemonListComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {

}
