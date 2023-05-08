import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { ErrerComponent } from './errer/errer.component';
import { StartexamComponent } from './startexam/startexam.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    ErrerComponent,
    StartexamComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
