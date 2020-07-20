import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {

  @Input() chartData: any;
  constructor() { }

  ngOnInit() {
    console.log('chartData', this.chartData);
  }

  public buildChart() {

    const chart = new Chart(document.getElementById('canvas'), {
      type: 'choropleth',
      data: {
        labels: this.chartData.map((d) => d.properties.shid),
        datasets: [
          {
            label: 'Countries',
            outline: this.chartData,
            data: this.chartData.map((d) => ({
              feature: d,
              value: Math.random(),
            })),
          },
        ],
      },
      options: {
        showOutline: false,
        showGraticule: false,
        legend: {
          display: false,
        },
        scale: {
          projection: 'equalEarth',
        },
        geo: {
          colorScale: {
            display: true,
          },
        },
      },
    });
  }
}
