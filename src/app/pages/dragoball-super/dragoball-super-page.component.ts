// import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragoballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dagonball-super',
  templateUrl: './dragoball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragoballSuperPageComponent {
  public dragonballServices = inject(DragoballService);
}
