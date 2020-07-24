import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeoChartService } from '../../services/geo-chart.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-geo-popup',
  templateUrl: './geo-popup.component.html',
  styleUrls: ['./geo-popup.component.scss']
})
export class GeoPopupComponent implements OnInit {

  displayedColumns: string[] = ['commute', 'value'];
  public commutesTable: any[];
  public chart: Chart;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public geoChartService: GeoChartService,
  ) { }

  ngOnInit() {
    console.log('tt', this.data.areaElement);
    this.commutesTable = this.getCommutesTable();
    this.createChart(this.commutesTable);
  }

  public getCommutesTable(): any[] {
    const result = [];
    const keys = Object.keys(this.data.areaElement).filter(item => item.includes('commute'));
    keys.forEach(key => {
      const item = {
        commute: key.replace('pop-commute-','').replace('_',' '),
        value: this.data.areaElement[key].toFixed(0),
      }

      result.push(item);
    })

    return result;
  }

  public getAreaTitle(): string {
    const type = this.data.type;
    const areaName = this.data.areaElement.shid;
    return this.geoChartService.getLabel(type, areaName);
  }

  private createChart(commutes: any[]) {
    console.log('cc', commutes.map(item => item.commute));
    this.chart = new Chart(document.getElementById('popup'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: commutes.map(item => item.value),
          backgroundColor: [
						'#5972ff',
						'#3f51b5',
						'#313f8c',
						'#1f2859',
					],
        }],
        labels: commutes.map(item => item.commute),
      },
      options: {
				responsive: true,
				legend: {
					position: 'bottom',
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
  });
  }

}
