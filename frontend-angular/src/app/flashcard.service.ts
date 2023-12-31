// src/app/flashcard.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcardsSubject = new BehaviorSubject<any[]>([]);
  flashcards$ = this.flashcardsSubject.asObservable();

  constructor() {
    this.addDefaultFlashcards();
  }

  private addDefaultFlashcards(): void {
    const defaultFlashcards = [
      { question: 'Is the sky blue?', answer: 'Yes', showAnswer: false },
    ];

    const currentFlashcards = this.flashcardsSubject.getValue();
    const newFlashcards = [...currentFlashcards, ...defaultFlashcards];
    this.flashcardsSubject.next(newFlashcards);
  }

  private saveFlashcards(flashcards: any[]): void {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }

  private loadFlashcards(): void {
    const storedFlashcards = localStorage.getItem('flashcards');
    const initialFlashcards = storedFlashcards ? JSON.parse(storedFlashcards) : [];
    this.flashcardsSubject.next(initialFlashcards);
  }

  getFlashcards(): any[] {
    this.loadFlashcards();
    return this.flashcardsSubject.getValue();
  }

  addFlashcard(flashcard: any): void {
    const currentFlashcards = this.getFlashcards();
    const newFlashcards = [...currentFlashcards, flashcard];
    this.flashcardsSubject.next(newFlashcards);
    // Save updated flashcards to localStorage
    this.saveFlashcards(newFlashcards);
  }

  updateFlashcards(flashcards: any[]): void {
    this.flashcardsSubject.next(flashcards);
    this.saveFlashcards(flashcards);
  }
}