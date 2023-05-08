import { Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/Services/data.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  result!: number;
  total!: number;
  rightansware: Array<string> = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    if (this.data.answers[0] == this.data.data[0].Answer) {
      this.rightansware.push(this.data.answers[0]);
    }
    if (this.data.answers[1] == this.data.data[1].Answer) {
      this.rightansware.push(this.data.answers[1]);
    }
    if (this.data.answers[2] == this.data.data[2].Answer) {
      this.rightansware.push(this.data.answers[2]);
    }
    console.log(this.rightansware);
    this.result = this.rightansware.length;
    this.total = this.data.data.length;
  }
}
