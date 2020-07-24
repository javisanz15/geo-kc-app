import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/pages/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/pages/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GeoChartComponent } from './geo-chart/pages/geo-chart.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { GeoPopupComponent } from './geo-chart/pages/geo-popup/geo-popup.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HeaderComponent,
      GeoChartComponent,
      GeoPopupComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatButtonToggleModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule,
      MatDialogModule,
      MatTableModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
