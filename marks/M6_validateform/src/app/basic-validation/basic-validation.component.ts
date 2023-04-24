import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-basic-validation',
  templateUrl: './basic-validation.component.html',
  styleUrls: ['./basic-validation.component.css']
})
export class BasicValidationComponent {

  cities:string[]=["Ahmedabad","Surat","Jamnagar","Rajkot"];
  userinfo:{flat:number,building:string,city:string,gender:string}={
    flat:101,
    building:"binori",
    city:this.cities[0],
    gender:"Radio1"
  }
  
  data:any=[];

  loginform=this.fb.group({
    name:["",[Validators.required,Validators.minLength(3)]],
    email:["",[Validators.required,Validators.minLength(5)]],
    address:this.fb.group({
      flat:[0],
      building:[""],
      city:[""]
    }),
    gender:[""]
  })

  constructor(private fb : FormBuilder){}
  // loginform=new FormGroup({
  //   name:new FormControl(''),
  //   email:new FormControl(''),
  //   address:new FormGroup({
  //     flat:new FormControl(0),
  //     building:new FormControl(''),
  //     city:new FormControl('')
  //   }),
  //   gender:new FormControl('')
  // })
  
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
