import { Component } from '@angular/core';
import { SericeParam } from './app-service-pram';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayText = "Code code code";

  constructor(private sericeParam: SericeParam) {
  }

  changeText() {
    this.sericeParam.tempText = "gede";
    this.displayText = "Edwin Auliano";
  }

  reset() {
    location.reload();
  }


}
