import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MainService } from '../services/main.service';
import { GeoChartComponent } from 'src/app/geo-chart/pages/geo-chart.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public form: FormGroup;
  public chartData: any;
  @ViewChild(GeoChartComponent, {static: false}) geoChart: GeoChartComponent;
  public commutes = [
    {
      label: 'drive alone',
      value: 'drive_alone',
    },
    {
      label: 'drive carpool',
      value: 'drive_carpool',
    },
    {
      label: 'public transit',
      value: 'public_transit',
    },
    {
      label: 'walking',
      value: 'walk',
    },
  ]
  constructor(
    public fb: FormBuilder,
    public mainService: MainService,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.retrieveChartData('hood');
  }

  public buildForm() {
    this.form = this.fb.group({
      toggle: ['hood'],
      commutes: ['all'],
    })
  }

  public retrieveChartData(name ?: string) {
    if(name) {
      this.mainService.getMaps(name).subscribe(data => {
        this.chartData = data;
      });
    } else {
      this.mainService.getMaps(this.form.get('toggle').value).pipe(
        tap(data => this.chartData = data),
      ).subscribe(data => {
        this.geoChart.updateChart(this.form.get('toggle').value, data, this.form.get('commutes').value);
      });
    }
  }

}
