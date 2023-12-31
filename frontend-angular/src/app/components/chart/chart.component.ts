// chart.component.ts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular'; 
import { HttpClient } from '@angular/common/http';
import { FlashcardService } from '../../flashcard.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  
  //get the flashcards from the flashcard service
  flashcards: any[] = this.flashcardService.getFlashcards();
  constructor(private flashcardService: FlashcardService) {}

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Number of Flashcards'
    },
    xAxis: {
      categories: ['Flashcards']
    },
    yAxis: {
      title: {
        text: 'Number of Flashcards'
      }
    },
    series: [
      {
        type: 'bar',  // Add the type property
        name: 'Number of Flashcards',
        data: [this.flashcards.length]
      } as Highcharts.SeriesOptionsType
    ]
  };

  ngOnInit(): void {
    console.log('Flashcards:', this.flashcards);
    console.log('Chart Options:', this.chartOptions);
  }
}
