import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http'
import { Observable} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getdata(){
  return  this.http.get<any>('http://api.tvmaze.com/search/shows?q=golden%20girls')
  }
}
