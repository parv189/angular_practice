import { Component,Input } from '@angular/core';
import { student } from '../model';
import { studentarr } from '../model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() detil!:studentarr;
p:number=0
x:student={"name":"","id":0,"standard":"","address":"","city":""}
moreDeatils(i: any){
  this.x=i
this.p=1
}
}
