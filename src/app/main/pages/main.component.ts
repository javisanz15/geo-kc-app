import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public form: FormGroup;
  public chartData: any;
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
    })
  }

  public retrieveChartData(name ?: string) {
    if(name) {
      this.mainService.getMaps(name).subscribe(data => this.chartData = data);
    } else {
      this.mainService.getMaps(this.form.get('toggle').value).subscribe(data => this.chartData = data);
    }
  }

}
