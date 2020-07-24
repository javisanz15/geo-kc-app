import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-chart-geo';
import { MatDialog } from '@angular/material/dialog';
import { GeoPopupComponent } from './geo-popup/geo-popup.component';
import { GeoChartService } from '../services/geo-chart.service';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {

  @Input() chartData: any;
  @Input() commute: string;
  public chart: any;
  public type: string = 'hood';
  constructor(
    public dialog: MatDialog,
    public geoChartService: GeoChartService,
  ) { }

  ngOnInit() {
    this.buildChart(this.type, this.commute);
  }

  public buildChart(type: string, commute: string) {
    this.chart = new Chart(document.getElementById('canvas'), {
      type: 'choropleth',
      data: {
        labels: this.chartData.features.map((d) => this.geoChartService.getLabel(type, d.properties.shid)),
        datasets: [
          {
            label: 'Countries',
            outline: this.chartData.features,
            data: this.chartData.features.map((d) => ({
              feature: d,
              value: this.geoChartService.getCommuteValue(this.commute, d),
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
        onClick: (evt) => this.goToAreaDetail(evt),
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
    this.type = type;
    this.chart.data = {
      labels: this.chartData.features.map((d) => this.geoChartService.getLabel(type, d.properties.shid)),
      datasets: [
        {
          label: 'Countries',
          outline: this.chartData.features,
          data: this.chartData.features.map((d) => ({
            feature: d,
            value: this.geoChartService.getCommuteValue(commute, d),
          })),
        },
      ],
    };
    this.chart.update();
  }

  public goToAreaDetail(evt: any) {
    const element = this.chart.getElementAtEvent(evt)[0].feature.properties;
    this.dialog.open(GeoPopupComponent, {
      height: '750px',
      width: '700px',
      data: {
        areaElement: element,
        type: this.type,
      }
    });
  }
}
