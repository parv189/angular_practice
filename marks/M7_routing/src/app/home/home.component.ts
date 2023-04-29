import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit{
  name!:string;
  Pass!:number;
  ngOnInit(): void {
    
  }
  
  constructor(private authservice:AuthService){}

onlogin(){

this.authservice.isAuthenticated(this.name,this.Pass)

}
}
