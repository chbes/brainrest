import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private choice = 'speed';

  private distance = 10;
  private time = "01:00";
  private speed = 10;
  private pace = "06:00";

  compute() {
    switch (this.choice) {
      case 'distance':
        this.distance = this.round(this.speed / this.hmsToDecimal(this.time));
        break;

      case 'time':
        this.time = this.decimalToHms(this.distance / this.speed);
        break;

      case 'speed':
        this.speed = this.round(this.distance / this.hmsToDecimal(this.time));
        this.pace = this.decimalToMs(1 / this.speed * 60);
        break;

      default:
        break;
    }
  }

  hmsToDecimal(t: string): number {
    let split = t.split(':');
    let h = split[0];
    let m = split[1];
    let s = split[2] == undefined ? '0' : split[2];
    return parseInt(h) + (parseInt(m) / 60) + (parseInt(s) / 3600);
  }

  msToDecimal(t: string): number {
    let split = t.split(':');
    let m = split[0];
    let s = split[1];
    return parseInt(m) + (parseInt(s) / 60);
  }

  decimalToHms(n: number): string {
    let h = Math.trunc(n);
    n = (n - h) * 60;
    let m = Math.trunc(n);
    n = (n - m) * 60;
    let s = Math.trunc(n);
    return this.addZero(h) + ':' + this.addZero(m) + ':' + this.addZero(s);
  }

  decimalToMs(n: number): string {
    let m = Math.trunc(n);
    n = (n - m) * 60;
    let s = Math.trunc(n);
    return this.addZero(m) + ':' + this.addZero(s);
  }

  addZero(n: number): string {
    return ('0' + n).slice(-2);
  }

  round(n: number): number {
    return Math.round(n * 100) / 100;
  }

}
