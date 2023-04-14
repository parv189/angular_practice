import { Component, Input } from '@angular/core'
import { student } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() moredetail!:student

}
