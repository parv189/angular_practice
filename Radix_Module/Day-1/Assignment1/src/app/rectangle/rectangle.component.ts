import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
height!:number;
width!:number;
area!:number;
calArea(event:any){
  this.area = this.height*this.width
}

}
