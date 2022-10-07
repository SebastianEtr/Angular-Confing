import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent {
  
  img = "https://thecatapi.com/api/images/get?format=src&type=gif";
}
