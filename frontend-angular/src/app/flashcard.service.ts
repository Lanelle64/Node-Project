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
    this.loadFlashcards();
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
    return this.flashcardsSubject.getValue();
  }

  addFlashcard(flashcard: any): void {
    const currentFlashcards = this.getFlashcards();
    const newFlashcards = [...currentFlashcards, flashcard];
    this.flashcardsSubject.next(newFlashcards);
    this.saveFlashcards(newFlashcards);
  }

  updateFlashcards(flashcards: any[]): void {
    this.flashcardsSubject.next(flashcards);
    this.saveFlashcards(flashcards);
  }
}