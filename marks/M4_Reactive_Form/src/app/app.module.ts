import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormgroupComponent } from './formgroup/formgroup.component';
@NgModule({
  declarations: [
    AppComponent,
    FormcontrolComponent,
    FormgroupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
