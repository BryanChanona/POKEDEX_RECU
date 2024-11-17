import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/poke.service';
import { IpokemonSummary } from '../../interfaces/pokemon.model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { PokemonNameTransformPipe } from '../../pipes/pokemon-name-transform.pipe';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-components.component.html',
  standalone:true,
  imports: [MatTableModule, HeaderComponent, PokemonNameTransformPipe],
  styleUrls: ['./favorite-components.component.scss']
})
export class FavoritePokemonsComponent implements OnInit {
  favorites: IpokemonSummary[] = [];

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites(); // Suponiendo que implementas esta lógica
  }

  navigateToDetails(pokemonName: string): void {
    this.router.navigate(['/pokemon', pokemonName]); // Navega a la ruta de detalles del Pokémon
  }
}
