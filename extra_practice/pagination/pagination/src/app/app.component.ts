import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from './Services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pagination';
  dummy:Array<number>=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  Mydata:any[]=[]
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any=[5,10,15,20]

  constructor(private data:DataService){}
ngOnInit(): void {
  this.getdata()
}

  getdata(){
    this.data.getdata().subscribe({
      next:(p)=>{
        this.Mydata=p
        console.log(this.Mydata);

      },
      error:(e)=>{
        console.log(e);

      }
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getdata();
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getdata()
  }
}
