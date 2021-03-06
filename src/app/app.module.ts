import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule, ClrFormsNextModule } from "@clr/angular";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune'
import * as Widget from 'fusioncharts/fusioncharts.widgets'
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy'

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { CollectionComponent } from './components/dashboard/collection/collection.component';
import { ReportCabangComponent } from './components/dashboard/report-cabang/report-cabang.component';
import { ProyeksiComponent } from './components/dashboard/proyeksi/proyeksi.component';
import { RecoveryComponent } from './components/dashboard/recovery/recovery.component';
import { InventoryComponent } from './components/dashboard/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime'; 
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

FusionChartsModule.fcRoot(FusionCharts, Charts, Zune, Widget, FusionTheme, Candy)

export const MY_MOMENT_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YYYY',
  },
  display: {
    dateInput: 'DD-MMM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    CollectionComponent,
    ReportCabangComponent,
    ProyeksiComponent,
    RecoveryComponent,
    InventoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClrFormsNextModule,
    NgxChartsModule,
    FusionChartsModule,
    ServiceWorkerModule.register('/dashboard/ngsw-worker.js', { enabled: environment.production }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    
    
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
