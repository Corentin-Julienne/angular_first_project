import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LpHeaderComponent } from './lp-header/lp-header.component';
import { CardComponent } from './card/card.component';
import { Card } from './models/card.model';
import { CardArrayComponent } from './card-array/card-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LpHeaderComponent,
    CardComponent,
    CardArrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
