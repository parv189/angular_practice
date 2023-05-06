import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from '../module';
import { filter } from '../module2';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http:HttpClient) { }

  getdata(){
    return this.Http.get<Array<movie>>('/assets/MovieDetail.json')
  }
  getdata2(){
    return this.Http.get<filter>('/assets/Filter.json')
  }
}
