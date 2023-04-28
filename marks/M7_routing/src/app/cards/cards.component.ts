import { Component,OnDestroy,OnInit } from '@angular/core';
import { categories } from '../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { car } from '../model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers:[categories]
})
export class CardsComponent implements OnInit,OnDestroy{
id:(string|null|number)=1;
constructor(private cate: categories,private activatedroute:ActivatedRoute) { }
cars1:car[]=[];
param:any;

title = 'M7_routing';

ngOnInit(){
  // this.id=this.activatedroute.snapshot.paramMap.get('id');  
  // console.log(this.id);
  // for(let i=0 ;i<=this.cate.data.length ; i++){
  //   if(this.cate.data[i].id == this.id){
  //     this.cars1.push(this.cate.data[i]);
  //   }
  // }
  this.param=this.activatedroute.paramMap.subscribe((param) => {
    this.id = param.get('id');
    for(let i=0 ; i<=this.cate.data.length ; i++){
      if(this.id == this.cate.data[i].id){
        this.cars1.splice(0,1,this.cate.data[i]);
        console.log(this.cars1);
      }
      
    }
 
    
  })
    //console.log(this.cars1);
    console.log(this.id);
    console.log(this.cars1);
 }
 ngOnDestroy(): void {
   this.param.unsubscribe()
 }
}
