import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// my modules
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './country/country.module';
// routes
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CountryModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
