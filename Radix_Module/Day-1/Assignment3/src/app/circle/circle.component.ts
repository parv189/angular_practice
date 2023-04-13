import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
radius!:number;
area!:number;
cal(radius:number){
console.log(radius);
this.area = 3.14*radius*radius
}
}
