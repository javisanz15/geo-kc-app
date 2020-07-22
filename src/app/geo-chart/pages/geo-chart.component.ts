import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-chart-geo';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {

  @Input() chartData: any;
  @Input() commute: string;
  public chart: any;
  constructor() { }

  ngOnInit() {
    this.buildChart('hood', this.commute);
  }

  public buildChart(type: string, commute: string) {
    this.chart = new Chart(document.getElementById('canvas'), {
      type: 'choropleth',
      data: {
        labels: this.chartData.features.map((d) => this.getLabel(type, d.properties.shid)),
        datasets: [
          {
            label: 'Countries',
            outline: this.chartData.features,
            data: this.chartData.features.map((d) => ({
              feature: d,
              value: this.getCommuteValue(this.commute, d),
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
        tooltips: {
          bodyFontSize: 20,
          titleFontSize: 20,
        },
        scale: {
          projection: 'mercator',
        },
        geo: {
          colorScale: {
            display: true,
            legend: {
              fontSize: 30,
            }
          },
        },
      },
    });
  }

  public updateChart(type: string, data: any, commute: string) {
    this.chartData = data;
    this.commute = commute;
    this.chart.data = {
      labels: this.chartData.features.map((d) => this.getLabel(type, d.properties.shid)),
      datasets: [
        {
          label: 'Countries',
          outline: this.chartData.features,
          data: this.chartData.features.map((d) => ({
            feature: d,
            value: this.getCommuteValue(commute, d),
          })),
        },
      ],
    };
    this.chart.update();
  }

  public getLabel(type: string, shid: string): string {
    if(type === 'hood') {
      const result = shid.split('neighborhood:')[1];
      return this.changeUnderscore(result);
    } else {
      return shid.split('tract:')[1];
    }
  }

  private changeUnderscore(pre: string): string {
    const result = pre.replace('_', ' ');
    if(result.includes('_')) {
      return this.changeUnderscore(result);
    }

    return result;
  }

  private getCommuteValue(commute: string, d: any): number {
    console.log(commute);
    let result : number;
    if(commute === 'all') {
      console.log('d', d);
      result = d.properties["pop-commute-drive_alone"] +
      d.properties["pop-commute-drive_carpool"] +
      d.properties["pop-commute-public_transit"] +
      d.properties["pop-commute-walk"];
    } else {
      result = d.properties[`pop-commute-${commute}`];
    }
    return parseInt(result.toFixed(0));
  }
}
