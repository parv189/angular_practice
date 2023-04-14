import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SqrtPipe } from './sqrt';
import { UperPipe } from './Uper';
@NgModule({
  declarations: [
    AppComponent,SqrtPipe,UperPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
