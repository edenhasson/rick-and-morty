import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '@rick-and-morty/characters-data-access';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-character-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  character = input.required<Character>();
  isSelected = input(false);
  selected = output<Character>();
  delete = output<number>();
  update = output<Character>();
  cancelEdit = output<Character>();

  selectCharacter() {
    this.selected.emit(this.character());
  }

  deleteCharacter(id: number) {
    this.delete.emit(id);
  }

  updateCharacter() {
    this.update.emit(this.character());
  }

  cancelEditCharacter() {
    this.cancelEdit.emit(this.character());
  }
}
