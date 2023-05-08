import { Component,OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { questions } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit{
  Mydata:Array<questions>=[];
  answer:string=' '
  constructor(private data:DataService,private router:Router){}

  ngOnInit(): void {
    this.Mydata=this.data.data
    console.log(this.Mydata);

}
onPrevious(){
  this.router.navigate(['question2'])
}
onNext(){
  this.data.ongetanswer(this.Mydata[2].selectedAnswer)
  this.router.navigate(['result'])
}
onSelect(value:string){
  this.Mydata[2].selectedAnswer=value;
    }
}
