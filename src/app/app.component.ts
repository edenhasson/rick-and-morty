import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharactersUiComponent } from '@rick-and-morty/characters-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CharactersUiComponent],
  template: `
    <lib-characters-ui/>
  `,
})
export class AppComponent {
  onCharacterCreated(character: any) {
    console.log('Character created:', character);
    // You could refresh the list here or update local state
  }
}