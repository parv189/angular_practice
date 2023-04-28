import { ParsedVariable } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loogedin: boolean = false;
  name: string = "Parv";
  pass: number = 1234;

  isAuthenticated(x:string,y:number) {
    if(this.name===x && this.pass===y){
      this.loogedin=true;
    }   
  }
}
