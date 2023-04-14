import { Component } from '@angular/core';
import { student } from '../model';
import { studentarr } from '../model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
student_array:studentarr=[];
name!:string;
id!:number;
standard!:string;
address!:string;
city!:string;

onClick(){
 var data:student={"name":this.name,"id":this.id,"standard":this.standard,
"address":this.address,"city":this.city}
this.student_array.push(data)
console.log(this.student_array);

}
}

