/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from "@angular/common";
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from 'src/app/main/pages/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;
  let routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect home when logo is pressed', () => {
    component.goHome();
    expect(location.path()).toBe('')
  });
});
