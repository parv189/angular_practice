import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  name!:string;
  Pass!:number;
  ngOnInit(): void {
    
  }
  
  constructor(private authservice:AuthService){}

onlogin(){
this.authservice.isAuthenticated(this.name,this.Pass);
console.log(this.Pass);
console.log(this.name);

}
}
