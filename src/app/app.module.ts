import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { OtherComponent } from './utilities/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    TablesComponent,
    ChartsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
