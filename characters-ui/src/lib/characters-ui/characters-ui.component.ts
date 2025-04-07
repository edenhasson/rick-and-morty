import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { CharacterFormComponent } from '../character-form/character-form.component';

@Component({
  selector: 'lib-characters-ui',
  imports: [CommonModule, BannerComponent, CharacterListComponent, CharacterFormComponent],
  templateUrl: './characters-ui.component.html',
  styleUrl: './characters-ui.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersUiComponent {
  characterListComponent = viewChild.required(CharacterListComponent);
  showModal = false;

  onAddCharacter() {
    this.showModal = true;
  }

  onFormSubmit() {
    this.showModal = false;
  }
  onCancel() {
    this.showModal = false;
  }
  loadMore() {
    this.characterListComponent().loadMore(); // You can track current page if needed
  }
}
