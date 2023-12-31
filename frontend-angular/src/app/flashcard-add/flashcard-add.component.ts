// src/app/flashcard-add/flashcard-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcard-add',
  templateUrl: './flashcard-add.component.html',
  styleUrls: ['./flashcard-add.component.css']
})
export class FlashcardAddComponent {
  flashcardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private flashcardService: FlashcardService) {
    this.flashcardForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.flashcardForm.valid) {
      const newFlashcard = this.flashcardForm.value;
      this.flashcardService.addFlashcard(newFlashcard);
      this.flashcardForm.reset();
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}