import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrerComponent } from './errer/errer.component';
import { CardsComponent } from './cards/cards.component';
import { AuthGuard } from "./auth.guard";


const appRoute : Routes=[
    {path:'',component:HomeComponent},
    //{path:'',redirectTo: 'home',pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'category',component:  CategoryComponent,canActivate:[AuthGuard]},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path: 'category',children:[
      {path:'cards/:id',component:CardsComponent}
    ]},
    {path:'cards/:id',component: CardsComponent},
    {path:'cards',component: CardsComponent},
    {path:'**',component:ErrerComponent}
  ]
  
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]

})
export class approuting {

}