import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrerComponent } from './errer/errer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';

const appRoute : Routes=[
  {path:'',component:HomeComponent},
  //{path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'category',component:  CategoryComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'cards/:id',component: CardsComponent},
  {path:'cards',component: CardsComponent},
  {path:'**',component:ErrerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    AboutComponent,
    ContactComponent,
    ErrerComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
