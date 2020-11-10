import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubsModule } from './pubs/pubs.module';
import { BeersModule } from './beers/beers.module';
import { BeerNotExistGuard } from './beers/guards/beer-not-exist.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PubsModule,
    BeersModule
  ],
  providers: [BeerNotExistGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
