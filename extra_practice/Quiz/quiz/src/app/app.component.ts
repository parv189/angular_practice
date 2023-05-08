import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { questions } from './model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  status: boolean = true;
  Mydata: Array<questions> = [];
  clock: string = '0:20'; // in  minutes
  //message: Array<string> = ['0:20'];
  message:string="0:20"
  myhour: number = 0;
  myminute: number = 0;
  mysecond: number = 0;
  title: string = 'title';
  set:any;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getdata();
    //localStorage.setItem('time',(this.clock).toString())
    localStorage.setItem('time', this.clock);
    //this.myminute= this.clock%60;
    //this.mysecond= 0;
    console.log('Minute :' + this.myminute + 'Seconds:' + this.mysecond);


  }
  getdata() {
    this.data.getdata().subscribe({
      next: (m) => {
        this.Mydata = m;
        console.log(this.Mydata);
        this.data.onclickofstart(this.Mydata);
      },
    });
  }

  Question1() {
    this.status = !this.status;
    this.router.navigate(['question1']);
    this.timer();
  }
  timer() {
    //setInterval(this.startwatch, 1000);
    this.set=setInterval(() => {
      this.startwatch2();
    }, 1000);
  }

  // startwatch()
  // {
  //   console.log("Minute :"+this.myminute+'Seconds:'+this.mysecond);
  //   this.mysecond -=1 ;
  // if(this.mysecond < 0){
  //   this.mysecond = 59;
  //   this.myminute -=1;
  // }
  // if(this.myminute < 0){
  //   this.myminute = 59;
  //   this.myhour -=1;
  // }
  startwatch2() {
    if (isNaN(Number(localStorage.getItem('time')?.substring(0, 2)))) {
      var minute = Number(localStorage.getItem('time')?.substring(0, 1));
      if (isNaN(Number(localStorage.getItem('time')?.substring(2, 4)))) {
        var second = Number(localStorage.getItem('time')?.substring(2, 3));
      } else {
        var second = Number(localStorage.getItem('time')?.substring(2, 4));
      }
    } else {
      var minute = Number(localStorage.getItem('time')?.substring(0, 2));
      if (isNaN(Number(localStorage.getItem('time')?.substring(3, 5)))) {
        var second = Number(localStorage.getItem('time')?.substring(3, 4));
      } else {
        var second = Number(localStorage.getItem('time')?.substring(3, 5));
      }
    }
    second -= 1;
    if (second < 0) {
      second = 59;
      minute -= 1;
    }
    if (minute < 0) {
      clearInterval(this.set)
      this.router.navigate(['result'])
    }
    //this.message.splice(0, 1, minute + ':' + second);
    this.message=minute+':'+second
    var clock = minute + ':' + second;
    localStorage.setItem('time', clock);
    console.log(this.message);
  }
}
