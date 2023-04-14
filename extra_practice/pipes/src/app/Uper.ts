import { Pipe, PipeTransform}from '@angular/core';
@Pipe({name:'Uper'})
export class UperPipe implements PipeTransform{
    transform(val:string):string{
       var arr:string[]=val.split(" ");
       console.log(arr);
       var x:string="";
       for(let i=0;i<arr.length;i++){
        console.log(arr[i][0].toUpperCase);
        x += arr[i][0].toUpperCase()+arr[i].substring(1)+" "
       }
       return x
    }
}