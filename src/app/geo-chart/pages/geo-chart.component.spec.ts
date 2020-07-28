/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoChartComponent } from './geo-chart.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { GeoPopupComponent } from './geo-popup/geo-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

describe('GeoChartComponent', () => {
  let component: GeoChartComponent;
  let fixture: ComponentFixture<GeoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GeoChartComponent,
        GeoPopupComponent,
      ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
      ],
      providers: [
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoChartComponent);
    component = fixture.componentInstance;
    component.commute = 'all'
    component.chartData = {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": {
          "id": 935624,
          "shid": "country:us/state:mo/place:kansas_city/neighborhood:blue_vue_hills22",
          "area": 2923431,
          "pop-commute-drive_alone": 432.355008787346,
          "pop-commute-drive_carpool": 5432.6110134739309,
          "pop-commute-public_transit": 23332,
          "pop-commute-walk": 4333
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-94.4159888785519, 39.0263622595943],
              [-94.4165248416212, 39.0168170416242],
              [-94.4164174726838, 39.0159977512312],
              [-94.4156972687773, 39.0144797821839],
              [-94.4155629569502, 39.0137787844092],
              [-94.4163281304255, 39.0101569847075],
              [-94.4175374852291, 39.0100431293875],
              [-94.4307532344861, 39.0106646386239],
              [-94.4304675726152, 39.016283797273],
              [-94.4291617836665, 39.0162152816037],
              [-94.4284146263, 39.0158415354734],
              [-94.4264553172369, 39.0154409240267],
              [-94.4261298661406, 39.0154743535059],
              [-94.4259540918283, 39.0156850860823],
              [-94.4258052118379, 39.018368430887],
              [-94.4292320018078, 39.0184960782916],
              [-94.4296295439872, 39.0182541164378],
              [-94.4296294830801, 39.0179397542215],
              [-94.4304021948905, 39.0178143356017],
              [-94.4299929180151, 39.0264959288005],
              [-94.4253490688185, 39.0263075877278],
              [-94.4249468277462, 39.0352299698759],
              [-94.4156972109882, 39.0348026081],
              [-94.4157901062166, 39.0331504307382],
              [-94.4156380360738, 39.0323410491283],
              [-94.4140908399186, 39.0298625439126],
              [-94.4138494495926, 39.0290271192387],
              [-94.4141026107811, 39.0282519981415],
              [-94.4154641637599, 39.0271112140965],
              [-94.4159888785519, 39.0263622595943]
            ]
          ]
        }
      }]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when getArea is called', () => {
    const result = {
      "id": 935624,
      "shid": "country:us/state:mo/place:kansas_city/neighborhood:blue_vue_hills22",
      "area": 2923431,
      "pop-commute-drive_alone": 432.355008787346,
      "pop-commute-drive_carpool": 5432.6110134739309,
      "pop-commute-public_transit": 23332,
      "pop-commute-walk": 4333
    };
    component.goToAreaDetail(null);
    expect(component.element).toEqual(result);
  });

  it('should update chart', () => {
    const features = {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": {
          "id": 935624,
          "shid": "country:us/state:mo/place:kansas_city/neighborhood:blue_vue_hills22",
          "area": 2923431,
          "pop-commute-drive_alone": 432.355008787346,
          "pop-commute-drive_carpool": 5432.6110134739309,
          "pop-commute-public_transit": 23332,
          "pop-commute-walk": 4333
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-94.4159888785519, 39.0263622595943],
              [-94.4165248416212, 39.0168170416242],
              [-94.4164174726838, 39.0159977512312],
              [-94.4156972687773, 39.0144797821839],
              [-94.4155629569502, 39.0137787844092],
              [-94.4163281304255, 39.0101569847075],
              [-94.4175374852291, 39.0100431293875],
              [-94.4307532344861, 39.0106646386239],
              [-94.4304675726152, 39.016283797273],
              [-94.4291617836665, 39.0162152816037],
              [-94.4284146263, 39.0158415354734],
              [-94.4264553172369, 39.0154409240267],
              [-94.4261298661406, 39.0154743535059],
              [-94.4259540918283, 39.0156850860823],
              [-94.4258052118379, 39.018368430887],
              [-94.4292320018078, 39.0184960782916],
              [-94.4296295439872, 39.0182541164378],
              [-94.4296294830801, 39.0179397542215],
              [-94.4304021948905, 39.0178143356017],
              [-94.4299929180151, 39.0264959288005],
              [-94.4253490688185, 39.0263075877278],
              [-94.4249468277462, 39.0352299698759],
              [-94.4156972109882, 39.0348026081],
              [-94.4157901062166, 39.0331504307382],
              [-94.4156380360738, 39.0323410491283],
              [-94.4140908399186, 39.0298625439126],
              [-94.4138494495926, 39.0290271192387],
              [-94.4141026107811, 39.0282519981415],
              [-94.4154641637599, 39.0271112140965],
              [-94.4159888785519, 39.0263622595943]
            ]
          ]
        }
      }]
    };
    component.updateChart('hood', features, 'walk');
    expect(component.chart.data.datasets[0].outline).toBe(features.features); 
  });
});
