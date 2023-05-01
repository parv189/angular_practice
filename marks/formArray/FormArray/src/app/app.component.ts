import { Component } from '@angular/core';
import { FormArray,FormGroup ,Validator,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormArray';

  Myform=new FormGroup({
    ID : new FormControl(0),
    NAME : new FormControl(''),
      Address:new FormArray([
        //   new FormGroup({
        //   Flat:new FormControl(0),
        //   Building:new FormControl(''),
        //   City:new FormControl(''),
        // }),
        // new FormGroup({
        //   Flat1:new FormControl(0),
        //   Building1:new FormControl(''),
        //   City1:new FormControl(''),
        // })
      ])
    })
    get Address():FormArray{
      return this.Address.get('Address') as FormArray
    }
  onClick(){
this.Address.push(new FormGroup({
  Flat:new FormControl(0),
  Building:new FormControl(''),
  City:new FormControl(''),
}))
  }
}
