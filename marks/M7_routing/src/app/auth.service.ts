import { ParsedVariable } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService{
data = [
  {name:"Parv",pass:1234},
  {name:"Meet",pass:1234},
  {name:"Raj",pass:1234},
  {name:"Karnav",pass:1234},
  {name:"Heet",pass:1234},
]
  constructor() { }

  isAuthenticated(x:string,y:number) {
    if (this.data.some(item=>(item.name==x && item.pass==y))) {
      alert('welcome '+x)
      localStorage.setItem('username',"admin")
    }
    else {
      alert('Please Enter Currect Name and Password');
      console.log(y);
      console.log(x);
    }
  }
}
