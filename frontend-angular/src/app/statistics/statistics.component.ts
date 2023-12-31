import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  rowData: any[] = [];
  columnDefs = [
    { headerName: 'Card ID', field: 'id' },
    { headerName: 'Question', field: 'question' },
    { headerName: 'Answered', field: 'answered' },
    { headerName: 'Studied', field: 'studied' }
  ];
  
  private gridApi!: GridApi;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    this.flashcardService.flashcards$.subscribe((flashcards) => {
      this.rowData = flashcards.map((card, index) => ({
        id: index + 1,
        question: card.question,
        answered: card.showAnswer ? 'Yes' : 'No',
        studied: card.studied ? 'Yes' : 'No'
      }));
  
      console.log('Row Data:', this.rowData);
  
      this.gridApi?.setRowData(this.rowData);
    });
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
  }
}