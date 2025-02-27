import { Injectable, signal, effect } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragoballService {
  characters = signal<Character[]>(
    loadFromLocalStorage()
  );

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character])
  }

}
