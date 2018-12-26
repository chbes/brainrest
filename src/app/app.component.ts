import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  choice = 'speed';
  distance = 10;
  time = 1;
  speed = 10;
  pace = 6;

  compute() {
    switch (this.choice) {
      case 'distance':
        this.distance = this.round(this.speed * this.time);
        break;

      case 'time':
        this.time = this.distance / this.speed;
        break;

      case 'speed':
        this.speed = this.round(this.distance / this.time);
        this.pace = 1 / this.speed * 60;
        break;

      default:
        break;
    }
  }

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

}
