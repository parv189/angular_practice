import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent {
  title = 'mark5_reactive_form';
    user=new FormControl('')
    Password=new FormControl('')

  onClick(){
    console.warn(this.user.value);
    
  }
}
