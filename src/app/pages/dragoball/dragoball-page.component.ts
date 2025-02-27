// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [
    //NgClass
  ],
  templateUrl: './dragoball-page.component.html',
})
export class DragoballPageComponent {

  name = signal('')
  power = signal(0)

  // addCharacter = computed(() => console.log(`${this.name()} - ${this.power()}`));
  addCharacter() {

    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // this.characters().push(newCharacter);

    this.characters.update(
      (list) => [...list, newCharacter]
    )
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 3, name: 'Yamcha', power: 500 },

  ]);

  /*   powerClasses = computed(() => {
      return {
        'text-danger': true
      }
    }) */

}
