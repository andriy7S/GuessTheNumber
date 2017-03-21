import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GuessTheNumberComponent }  from './guess-the-number.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GuessTheNumberComponent ],
  bootstrap:    [ AppComponent, GuessTheNumberComponent ]
})
export class AppModule { }
