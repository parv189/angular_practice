import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
