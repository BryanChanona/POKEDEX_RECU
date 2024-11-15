import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Ipokemon } from '../../interfaces/pokemon.model';
import { PokemonService } from '../../services/poke.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatTableModule,MatIconModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: { name: string; url: string }[] = [];
  displayedColumns: string[] = ['name', 'url', 'favorite'];
  dataSource = this.pokemons; // Declara dataSource y asígnale el arreglo pokemons

  constructor(private serviceP: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.serviceP.getPokemonList().subscribe({
      next: (response) => {
        console.log(response);
        this.pokemons = response.results.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
        this.dataSource = this.pokemons; // Asigna la lista actualizada de pokemons a dataSource
      },
      error: (err) => console.error('Error al cargar Pokémon', err)
    });
  }

  isFavorite(pokemon: Ipokemon): boolean {
    return this.serviceP.isFavorite(pokemon); // Usar el método del servicio
  }
  toggleFavorite(pokemon: Ipokemon): void {
    this.serviceP.toggleFavorite(pokemon); // Usar el método del servicio
  }
}
