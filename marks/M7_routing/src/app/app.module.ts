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

const appRoute : Routes=[
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'category',component:  CategoryComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'**',component:ErrerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    AboutComponent,
    ContactComponent,
    ErrerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
