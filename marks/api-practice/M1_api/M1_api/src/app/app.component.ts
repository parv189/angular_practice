import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M1_api';
  onProductCreate(products:{pname:string,desc:string,price:string}){
    console.log(products);

  }
}
