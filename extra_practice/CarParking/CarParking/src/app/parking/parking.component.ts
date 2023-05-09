import { Time } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent {
  row: number[] = [1, 2, 3, 4];
  table: { CarNumber: string; InTime: string; CellNo: number }[] = [
    { CarNumber: '', InTime: '', CellNo: 1 },
    { CarNumber: '', InTime: '', CellNo: 2 },
    { CarNumber: '', InTime: '', CellNo: 3 },
    { CarNumber: '', InTime: '', CellNo: 4 },
    { CarNumber: '', InTime: '', CellNo: 5 },
    { CarNumber: '', InTime: '', CellNo: 6 },
    { CarNumber: '', InTime: '', CellNo: 7 },
    { CarNumber: '', InTime: '', CellNo: 8 },
    { CarNumber: '', InTime: '', CellNo: 9 },
    { CarNumber: '', InTime: '', CellNo: 10 },
    { CarNumber: '', InTime: '', CellNo: 11 },
    { CarNumber: '', InTime: '', CellNo: 12 },
    { CarNumber: '', InTime: '', CellNo: 13 },
    { CarNumber: '', InTime: '', CellNo: 14 },
    { CarNumber: '', InTime: '', CellNo: 15 },
    { CarNumber: '', InTime: '', CellNo: 16 },
    { CarNumber: '', InTime: '', CellNo: 17 },
    { CarNumber: '', InTime: '', CellNo: 18 },
    { CarNumber: '', InTime: '', CellNo: 19 },
    { CarNumber: '', InTime: '', CellNo: 20 },
  ];
  status: boolean = false;
  CarNumber: string = 'GJ01AA0000';
  tempNo!: number;
  isout: boolean = false;

  colored: any[] = [];
  duration:string = '';
  price: number = 0;

  //  d = new Date();
  //  time1 = this.d.toTimeString();
  //  timetext1: string[] = this.time1.split(' ');
  //  Inhour = Number(this.timetext1[0].substring(0, 2));
  //  InMin = Number(this.timetext1[0].substring(3, 5));
  //  InSec = Number(this.timetext1[0].substring(6, 8));
  InTime: string = '00:00';

  //  time2 = this.d.toTimeString();
  //  timetext2: string[] = this.time2.split(' ');
  //  Outhour = Number(this.timetext1[0].substring(0, 2));
  //  OutMin = Number(this.timetext1[0].substring(3, 5));
  //  OutSec = Number(this.timetext1[0].substring(6, 8));
  OutTime: string = '00:00';
  onSelect(cellNo: number) {
    // if(this.status==false){
    //   this.status=true;
    // }
    // else{
    //   this.status=false;
    // }
    // var d = new Date();
    // var time2 = d.toTimeString();
    // var timetext2: string[] = time2.split(' ');
    // var Outhour = Number(timetext2[0].substring(0, 2));
    // var OutMin = Number(timetext2[0].substring(3, 5));
    // var OutSec = Number(timetext2[0].substring(6, 8));
    this.status = !this.status;
    if (this.colored.includes(cellNo)) {
      this.isout = true;
    }
    // if(this.CarNumber !== ''){
    //   this.OutTime=Outhour + ':' + OutMin + ':' + OutSec;
    //   this.duration = (Outhour-this.Inhour)+'Hour, '+(OutMin-this.InMin)+'Minute'+(OutSec-this.InSec)+'Second'
    // }

    if (this.CarNumber !== '' && this.InTime !== '') {
      this.CarNumber = '';
      this.InTime=''
    }
    this.CarNumber = this.table[cellNo - 1].CarNumber;
    this.InTime = this.table[cellNo - 1 ].InTime;

    this.tempNo = cellNo;

    console.log(cellNo);
    // this.CarNumber=''
    // this.InTime='';
  }
  onClickOfIn() {
    // if (this.InTime === '00:00:00') {
    //   this.InTime = Inhour + ':' + InMin + ':' + InSec;
    // }
    //var index = this.table.indexOf()
    //var index = this.table.map(function(e) { return e.CellNo; }).indexOf(this.tempNo);
    // console.log({CarNumber:' ',InTime:'',CellNo:this.tempNo});
    //var element = this.table.find((x)=>x.CellNo=this.tempNo);

    console.log(this.tempNo);
    this.table.map((item) => {
      if (item.CellNo === this.tempNo) {
        item.CarNumber = this.CarNumber;
        item.InTime = this.InTime;
      }
    });

    // this.table[index].CarNumber=this.CarNumber
    // console.log("ok",this.tempNo);
    console.log(this.table);
    this.status = false;
    this.colored.push(this.tempNo);
  }

  onClickOfOut() {
    this.table.map((item) => {
      if (item.CellNo === this.tempNo) {
        item.CarNumber = '';
        item.InTime = '';
      }
    });
    var index = this.colored.indexOf(this.tempNo);
    this.colored.splice(index, 1);
    this.status = false;
    this.duration =
      (parseInt(this.OutTime.substring(0, 2)) -
      parseInt(this.InTime.substring(0, 2))
      +
      (
        (parseInt(this.OutTime.substring(3, 5)) -
        parseInt(this.InTime.substring(3, 5))) /
        60
      )).toFixed(2);
    if (Number(this.duration) < 1) {
      this.price = 20;
    } else if (Number(this.duration) < 4) {
      this.price = 40;
    } else if (Number(this.duration) < 6) {
      this.price = 100;
    } else {
      this.price = 200;
    }
console.log(Number(this.OutTime.substring(0, 2)));
console.log( Number(this.InTime.substring(3, 5)));

    console.log(this.InTime);
    console.log(this.OutTime);
  }
}
