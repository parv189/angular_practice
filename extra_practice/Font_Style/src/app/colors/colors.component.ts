import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  Style:string[][] = [["background-color:darkred" , "height:30px", "width:30px","color:darkred"],
  ["background-color:red" , "height:30px", "width:30px","color:red"],
  ["background-color:crimson" , "height:30px", "width:30px","color:crimson"],
  ["background-color:lightsalmon" , "height:30px", "width:30px","color:lightsalmon"],
  ["background-color:darkorange" , "height:30px", "width:30px","color:darkorange"],
  ["background-color:orange" , "height:30px", "width:30px","color:orange"],
  ["background-color:gold" , "height:30px", "width:30px","color:gold"],
  ["background-color:yellow" , "height:30px", "width:30px","color:yellow"],
  ["background-color:green" , "height:30px", "width:30px","color:green"],
  ["background-color:lime" , "height:30px", "width:30px","color:lime"],
  ["background-color:olive" , "height:30px", "width:30px","color:olive"],
  ["background-color:lightgreen" , "height:30px", "width:30px","color:lightgreen"],
  ["background-color:navy" , "height:30px", "width:30px","color:navy"],
  ["background-color:blue" , "height:30px", "width:30px","color:blue"],
  ["background-color:skyblue" , "height:30px", "width:30px","color:skyblue"],
  ["background-color:plum" , "height:30px", "width:30px","color:plum"],
  ["background-color:white" , "height:30px", "width:30px","color:white"],
  ["background-color:black" , "height:30px", "width:30px","color:black"]]
  btnStyle0:string = this.Style[0].join(";")
  btnStyle1:string = this.Style[1].join(";")
  btnStyle2:string = this.Style[2].join(";")
  btnStyle3:string = this.Style[3].join(";")
  btnStyle4:string = this.Style[4].join(";")
  btnStyle5:string = this.Style[5].join(";")
  btnStyle6:string = this.Style[6].join(";")
  btnStyle7:string = this.Style[7].join(";")
  btnStyle8:string = this.Style[8].join(";")
  btnStyle9:string = this.Style[9].join(";")
  btnStyle10:string = this.Style[10].join(";")
  btnStyle11:string = this.Style[11].join(";")
  btnStyle12:string = this.Style[12].join(";")
  btnStyle13:string = this.Style[13].join(";")
  btnStyle14:string = this.Style[14].join(";")
  btnStyle15:string = this.Style[15].join(";")
  btnStyle16:string = this.Style[16].join(";")
  btnStyle17:string = this.Style[17].join(";")
  text!:string|number;
  textColor!:string;
  onKeyUp(x:any){
    this.text = x.target.value;
  }
  onClick(x:any){
    this.textColor = this.Style[x][3]
  }

}
