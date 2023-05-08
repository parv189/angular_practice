import { AppComponent } from './app.component';
import { ErrerComponent } from './errer/errer.component';
import { ResultComponent } from './result/result.component';
import { Question3Component } from './question3/question3.component';
import { Question2Component } from './question2/question2.component';
import { Question1Component } from './question1/question1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: 'question3', component: Question3Component },
  {path:'result',component:ResultComponent},
  {path:'**',component:ErrerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
