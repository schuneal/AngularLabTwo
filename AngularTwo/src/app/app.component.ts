import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public colorValue;
  changedColor(color){
    this.colorValue="The color has changed to: "+color;
  }
}
