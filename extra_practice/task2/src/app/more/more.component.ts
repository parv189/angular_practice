import { Component,Input } from '@angular/core';
import { student } from '../model';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  @Input() dataMore!:student
}
