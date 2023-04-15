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
array:data[]=[{name:"parv",id:1,status:true,address:{block:[1,3,4],city:"ahm",state:"gujarat"}},
{name:"meet",id:2,status:true,address:{block:[1,3,5],city:"mnd",state:"gujarat"}},
{name:"venu",id:3,status:false,address:{block:[1,3,8],city:"jnd",state:"gujarat"}}]
object:string[] = Object.keys(this.array[0]);

a:number[] = [2,4,6,8,9,3]
b:{[key:number]:number} = {1:1,3:3,5:5,6:6}

}

