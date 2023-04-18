import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent {
name= new FormControl('')
email= new FormControl('')
password= new FormControl('')
address= new FormControl('')

onClick(){
  console.warn(this.name.value);
}
clear(){
  // this.name.setValue('');
  this.name.reset()
}
}
