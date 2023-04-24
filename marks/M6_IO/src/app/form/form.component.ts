import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
count:number=0
username!:string;
usergender!:string;
usercity!:string;

counts(x:number){
this.count=x;
}
}
