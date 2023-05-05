import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
  export class ScreenComponent implements OnInit {
    constructor(private Http: HttpClient) {}
    data: any = [];
    url: string = '/assets/Movie.json';
    ref: any = [];
    selected:any[]=[]
    booked:any[]=[]
    rows: any = [];



    getdata() {
      this.Http.get(this.url).subscribe({
        next: (res) => {
          this.data = res;
          this.rows = this.data.Rows;
          console.log(this.rows);
          this.getNumber()
          this.getAlreadyBooked()
        },
      });
    }

    ngOnInit(): void {
      this.getdata();

    }

    getNumber() {
      for(let i=0 ; i<this.rows.length ; i++){
        for(let j=this.rows[i].Start ; j<=(this.rows[i].End);j++){
          this.ref.push(j)
        }
      }
    }
    getAlreadyBooked(){
      for(let i=0 ; i<this.rows.length ; i++){
        console.log(this.rows[i].AlreadyBooked);
      }
    }
    onclick(x:number){
      if(this.selected.includes(x)){
        this.selected.splice(this.selected.indexOf(x),1)
      }
      else{
        this.selected.push(x)
      }
      console.log(this.selected);
    }
    onBook(){
      for(let i=0 ; i<this.selected.length;i++ ){
        this.booked.push(this.selected[i])
      }
      this.selected = [];
    }
  }
