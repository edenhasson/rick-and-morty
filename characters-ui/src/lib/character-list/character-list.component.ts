import {
  Component,
  OnInit,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { Character, CharactersApiService } from '@rick-and-morty/characters-data-access';
import { FormsModule } from '@angular/forms';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'lib-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  standalone: true,
  imports: [FormsModule, CharacterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListComponent implements OnInit {
  charactersSignal = signal<Character[]>([]);
  selectedCharacterId = signal<number | null>(null);

  constructor(private apiService: CharactersApiService) {
    this.charactersSignal = this.apiService.characters$;
  }

  ngOnInit(): void {
    this.apiService.getCharacters();
  }

  loadMore(): void {
    this.apiService.getCharacters();
  }

  deleteCharacter(id: number) {
    this.apiService.deleteCharacter(id);
  }

  selectCharacter(character: Character) {
    this.selectedCharacterId.set(
      this.selectedCharacterId() === character.id ? null : character.id
    );
  }

  updateCharacter(updated: Character) {
    this.apiService.updateCharacter(updated.id, updated);
    this.selectedCharacterId.set(null);
  }

  cancelEdit(character: Character) {
    const characters = this.charactersSignal();
    const original = characters.find(c => c.id === character.id);
    if (original) {
      Object.assign(character, { ...original });
    }
    this.selectedCharacterId.set(null);
  }
}