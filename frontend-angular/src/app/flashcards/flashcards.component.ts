import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashcardService } from '../flashcard.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  flashcards: any[] = [];

  constructor(private httpClient: HttpClient, private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3000/api/flashcards').subscribe(data => {
      this.flashcards = data;
      this.flashcardService.updateFlashcards(data);
    }
    );
  }

  toggleAnswer(card: any) {
    card.showAnswer = !card.showAnswer;
  }

  deleteFlashcard(flashcard: any): void {
    const updatedFlashcards = this.flashcards.filter((card) => card !== flashcard);
    this.flashcardService.updateFlashcards(updatedFlashcards);
  }
}