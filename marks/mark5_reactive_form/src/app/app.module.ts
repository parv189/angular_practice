import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
@NgModule({
  declarations: [
    AppComponent,
    FormcontrolComponent,
    FormgroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
