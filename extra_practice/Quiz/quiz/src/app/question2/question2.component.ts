import { Component,OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { questions } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit{

  Mydata:Array<questions>=[];
  answer:string=' '
  constructor(private data:DataService,private router:Router){}

  ngOnInit(): void {
    this.Mydata=this.data.data
    console.log(this.Mydata);

}
onPrevious(){
  this.router.navigate(['question1'])
}
onNext(){
  this.data.ongetanswer(this.Mydata[1].selectedAnswer)
  this.router.navigate(['question3'])
}
onSelect(value:string){
  this.Mydata[1].selectedAnswer=value;
}
}
