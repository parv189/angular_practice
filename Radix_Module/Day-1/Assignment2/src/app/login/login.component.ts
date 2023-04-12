import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message!:string;
  Username!:string;
  Password!:string;
  borderStyle:string = "border:1px solid gray ; border-radius:3px";
getname(event:any){
  this.Username = event.target.value;
}
getpass(event:any){
  this.Password = event.target.value;
}
validate(){
  if(this.Username !== "admin" || this.Password !=="admin"){
    alert("please enter valid Username or Password")
    this.borderStyle = "border:1px solid red ; border-radius:3px"
  }
  else{
    this.borderStyle = "border:1px solid gray ; border-radius:3px";
    alert("You are loged-in")
  }
}
}
