import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ipokemon } from "../interfaces/pokemon.model";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon'
    private favorites: Ipokemon[] = []; // Arreglo para almacenar los favoritos

    constructor (private http: HttpClient){}

getPokemonList(): Observable<Ipokemon>{
        return this.http.get<Ipokemon>(`${this.apiUrl}/?offset=0&limit=20`);  
}

getPokemonDetails(name: string): Observable<Ipokemon>{
  return this.http.get<Ipokemon>(`${this.apiUrl}/${name}`)
}

isFavorite(pokemon: Ipokemon): boolean {
    return this.favorites.includes(pokemon);
  }

  toggleFavorite(pokemon: Ipokemon): void {
    const index = this.favorites.indexOf(pokemon);
    if (index > -1) {
      // Si ya es favorito, quitarlo
      this.favorites.splice(index, 1);
    } else {
      // Si no es favorito, agregarlo
      this.favorites.push(pokemon);
    }
  }

  getFavorites(): Ipokemon[] {
    return this.favorites;
  }
}