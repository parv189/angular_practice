import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { categories } from '../services/categories.service';
import { car } from '../model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[categories]
})
export class CategoryComponent implements OnInit{
  //id:(string|null|number)=1;
  constructor(private cate: categories,private activatedroute:ActivatedRoute,private router:Router) { }
  cars:car[]=[];


  title = 'M7_routing';

  ngOnInit(){

    this.cars = this.cate.data
  //   this.id=this.activatedroute.snapshot.paramMap.get('id');  
  //   console.log(this.id);
  //   for(let i=0 ;i<=this.cate.data.length ; i++){
  //     if(this.cate.data[i].id == this.id){
  //       this.cars.push(this.cate.data[i]);
  //     }
  //   }
  //     console.log(this.cars);
      
   }
   more(x:number){
    this.router.navigate(['/category/cards',x+1])
   }
}
