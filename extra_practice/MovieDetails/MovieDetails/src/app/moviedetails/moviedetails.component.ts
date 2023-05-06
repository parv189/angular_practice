import { Component, OnInit } from '@angular/core';
import { filter } from '../module2';
import { DataService } from '../Services/data.service';
import { movie } from '../module';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  Mydata: movie[] = [];
  play: movie[] = [];
  filter: filter[] = [];
  select1: string = 'select';
  select2: string = 'select';
  select3: string = 'select';
  colored: any[] = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getdata();
    this.getdata2();
  }
  getdata() {
    this.data.getdata().subscribe({
      next: (m) => {
        this.Mydata = m;
        console.log(this.Mydata);

        this.play.push(this.Mydata[0]);

        for (let i = 0; i < this.Mydata.length; i++) {
          if (
            this.Mydata[i].Details.DirectorName ===
            this.Mydata[i].Details.ActorsNames[0]
          ) {
            this.colored.push(this.Mydata[i].MovieName);
          }
        }
        console.log(this.colored);
      },
    });
  }
  getdata2() {
    this.data.getdata2().subscribe({
      next: (m) => {
        this.filter.push(m);
        console.log(this.filter);
      },
    });
  }
  onSelect(i: number) {
    this.play.splice(0, 1, this.Mydata[i]);
  }
  onFilter1() {
    for (let i = 0; i < this.Mydata.length; i++) {
      if (this.Mydata[i].MovieName == this.select1) {
        this.play.splice(0, 1, this.Mydata[i]);
        this.select2="select"
        this.select3="select"
      }
    }
  }
  onFilter2() {
    for (let i = 0; i < this.Mydata.length; i++) {
      if (this.Mydata[i].Details.ActorsNames.includes(this.select2)) {
        this.play.splice(0, 1, this.Mydata[i]);
        this.select1="select"
        this.select3="select"
      }
    }
  }
  onFilter3() {
    for (let i = 0; i < this.Mydata.length; i++) {
      if (this.Mydata[i].Details.DirectorName.includes(this.select3)) {
        this.play.splice(0, 1, this.Mydata[i]);
        this.select1="select"
        this.select2="select"
      }
    }
  }
}
