import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';

import { IfelseComponent } from './ifelse/ifelse.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    IfelseComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
