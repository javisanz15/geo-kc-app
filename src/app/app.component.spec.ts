import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/pages/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Routes } from '@angular/router';
import { MainComponent } from './main/pages/main.component';
import { Location } from "@angular/common";

describe('AppComponent', () => {

  let location: Location;
  let routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full'}
  ];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatButtonModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'geo-kc-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('geo-kc-app');
  });

});
