// chart.component.ts
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular'; // Import HighchartsChartModule

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Cherries']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4]
      },
      {
        name: 'John',
        data: [5, 7, 3]
      }
    ] as Highcharts.SeriesOptionsType[]
  };
}



