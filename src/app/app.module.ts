import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiDashboardModule } from 'bmi-sections-lib';
import { BmiStoreModule } from 'bmi-store-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BmiDashboardModule,
    BrowserModule,
    AppRoutingModule,
    BmiStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
