/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoPopupComponent } from './geo-popup.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

describe('GeoPopupComponent', () => {
  let component: GeoPopupComponent;
  let fixture: ComponentFixture<GeoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPopupComponent ],
      imports: [
        MatDialogModule,
        MatTableModule,
        MatIconModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {
          areaElement: {
            "id": 935624,
            "shid": "country:us/state:mo/place:kansas_city/neighborhood:blue_vue_hills",
            "area": 2923431,
            "pop-commute-drive_alone": 910.355008787346,
            "pop-commute-drive_carpool": 71.6110134739309,
            "pop-commute-public_transit": 0,
            "pop-commute-walk": 0
          },
          type: 'hood',
        }},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
