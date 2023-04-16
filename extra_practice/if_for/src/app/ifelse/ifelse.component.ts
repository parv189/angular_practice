import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
x:boolean=true;
bt1:string="";
bt2:string="";
state:boolean=true;
onClick(){
  this.x=false;
this.bt1="random_string";
this.bt2="";
}
onClick2(){
  this.x=true;
  this.bt1="";
  this.bt2="random_string";
}
tog(){
  if(this.state===true){
    this.state=false;
  }
  else{
    this.state=true;
  }

}
a:boolean=true;
b={btn:true,'btn-primary':true}
xy:string=" "
someClick(){

}
}
