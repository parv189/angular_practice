//import { ParsedVariable } from '@angular/compiler';
import { Component } from '@angular/core';
import { data } from '../model';
import { add } from '../model2';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
array:any=[{name:"parv",id:1,status:true,address:{block:56,city:"ahm",state:"gujarat"}},
{name:"meet",id:2,status:true,address:{block:26,city:"mnd",state:"gujarat"}},
{name:"venu",id:3,status:false,address:{block:79,city:"jnd",state:"gujarat"}}]
object:string[] = Object.keys(this.array[0]);


}
