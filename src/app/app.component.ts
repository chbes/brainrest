import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private choice = 'speed';

  private distance = 10;
  private time = 1;
  private speed = 10;
  private pace = 6;

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
