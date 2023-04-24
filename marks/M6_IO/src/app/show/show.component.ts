import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
@Input() name!:string;
@Input() gender!:string;
@Input() city!:string;

count:number=0

@Output()
onclickofbutton:EventEmitter<number>=new EventEmitter<number>();

onClick(){
this.onclickofbutton.emit(this.count += 1);
//console.log(this.count);

}
onClick2(){
  this.onclickofbutton.emit(this.count -= 1);
  //console.log(this.count);
  
  }
}
