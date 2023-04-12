import { Component } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent {
  s!:string;
selectColor(event:any){
this.s = "color:red"
}
}
