import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { user } from './model';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent {

cities:string[]=["Ahmedabad","Surat","Jamnagar","Rajkot"];
userinfo:{flat:number,building:string,city:string,gender:string}={
  flat:101,
  building:"binori",
  city:this.cities[0],
  gender:"Radio1"
}

data:any=[];
loginform=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.minLength(3)]),
  address:new FormGroup({
    flat:new FormControl(0),
    building:new FormControl(''),
    city:new FormControl('')
  }),
  gender:new FormControl('')
})

onSubmit(){
  console.log(this.loginform.value);
  this.data.push(this.loginform.value)
}
clear(){
  this.loginform.reset();
}
AutoFill(){
this.loginform.patchValue({
  address:{
    flat:this.userinfo.flat,
    building:this.userinfo.building,
    city:this.userinfo.city
  },
  gender:this.userinfo.gender
})
}
}
