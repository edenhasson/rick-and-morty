import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Character } from './model/Character.interface';

interface Response {
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private page = 1;
  characters$ = signal<Character[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch characters with pagination support
  getCharacters(): void {
    this.http.get<Response>(`${this.apiUrl}?page=${this.page}`).subscribe((response) => {
      const currentCharacters = this.characters$();
      const updatedCharacters = [...currentCharacters, ...response.results];
      this.characters$.set(updatedCharacters);
    });
    this.page++;
  }

  createCharacter(characterData: Character): void {
    const currentCharacters = this.characters$();
    this.characters$.set([...currentCharacters, characterData]);
  }

  updateCharacter(id: number, characterData: Character): void {
    this.characters$().find(character => character.id == id ? {...character, ...characterData} : character);
  }

  deleteCharacter(id: number): void {
    const updatedCharacters = this.characters$().filter(character => character.id !== id);
    this.characters$.set(updatedCharacters);
  }
}
