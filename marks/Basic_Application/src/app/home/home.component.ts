import { Component } from '@angular/core';
import { type1 } from '../module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:type1[] = [
    {img:'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Photo of Audi Parked near Trees",id:1},
    {img:'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"White Jeep Wrangler on Asphalt Road",id:2},
    {img:'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Classic Blue Coupe",id:3},
    {img:'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Black Hyundai Vehicle On Road",id:4},
    {img:'https://images.pexels.com/photos/3879065/pexels-photo-3879065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Suv On Brown Sand ",id:5},
    {img:'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Photo of Audi Parked near Trees",id:6},
    {img:'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Photo of Audi Parked near Trees",id:7},
    {img:'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:"Audi",details:"Photo of Audi Parked near Trees",id:8},
]
}
