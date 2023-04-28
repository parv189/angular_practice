import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { ErrerComponent } from './errer/errer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'about',component: AbortController},
  {path:'contact',component: ContactComponent},
  {path:'cards/:id',component: CardsComponent},
  {path:'cards',component: CardsComponent},
  {path:'**',component:ErrerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
