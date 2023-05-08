import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { questions } from '../app/model';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Array<questions>=[];
  Myclock:string='10:00'
  answers:Array<string>=[]
  constructor(private Http:HttpClient) { }

  getdata(){
    return this.Http.get<Array<questions>>('/assets/questions.json')
    }

    ongetdata = new EventEmitter<Array<questions>>();
    onclickofstart(data:Array<questions>){
      this.ongetdata.emit(data)
      this.data=data;
    }
    onanswer = new EventEmitter<Array<string>>();
    ongetanswer(value:string){
      this.answers.push(value)
    }
    ongettime = new EventEmitter<string>();
    onclickoftime(clock:string){
      this.ongettime.emit(clock)
      this.Myclock=clock;
    }
}
