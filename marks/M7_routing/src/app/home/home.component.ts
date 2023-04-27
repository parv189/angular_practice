import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router,private activatedrout:ActivatedRoute){}
gotocategory(){
this.route.navigate(['category'],{relativeTo:this.activatedrout})
//this.route.navigateByUrl('category')
}
}
