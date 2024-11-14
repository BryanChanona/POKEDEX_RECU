import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ipokemon } from "../interfaces/pokemon.model";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

    constructor (private http: HttpClient){}

    getPokemonList(): Observable<Ipokemon>{
        return this.http.get<Ipokemon>(`${this.apiUrl}/?offset=0&limit=20`);  
    }
}