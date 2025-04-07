import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { signal, output } from '@angular/core';
import { CharactersApiService } from '@rick-and-morty/characters-data-access';
import { Character } from '@rick-and-morty/characters-data-access'; // Import your Character model

@Component({
  selector: 'lib-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFormComponent implements OnInit {
  // Signal to hold the form's state
  characterSignal = signal<Character | null>(null);
  characterForm!: FormGroup;
  formSubmit = output<void>();
  cancelled = output<void>();

  constructor(private fb: FormBuilder, private apiService: CharactersApiService) {}

  ngOnInit() {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      status: ['', Validators.required],
      species: ['', Validators.required],
    });

    // Set the initial value of the signal if required
    this.characterSignal.set({
      id: Math.floor(Math.random() * 1000),
      name: '',
      image: '',
      status: '',
      species: ''
    });
  }

  onSubmit() {
    if (this.characterForm.valid) {
      const newCharacter = this.characterForm.value;
      this.apiService.createCharacter(newCharacter);
      this.formSubmit.emit();
    }
  }

  resetForm() {
    this.characterForm.reset();
    this.characterSignal.set({
      id: 0,
      name: '',
      image: '',
      status: '',
      species: ''
    });
    this.cancelled.emit();
  }
}
