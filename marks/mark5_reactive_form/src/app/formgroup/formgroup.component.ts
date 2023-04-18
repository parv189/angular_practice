import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent {
loginform=new FormGroup({
  User:new FormControl(''),
  Email:new FormControl('')
})
onClick(){
  console.log(this.loginform.value);
  
}
}
