import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent implements OnInit {

  @Input() choose: boolean;
  @Input() name: string;
  @Input() unit: string;
  @Input() value: number;

  @Output() valueChange = new EventEmitter();

  private h: string;
  private m: string;
  private s: string;

  constructor() {
    this.h = '0';
    this.m = '0';
    this.s = '0';
  }

  ngOnInit() {
    this.decimalToHms(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value != undefined) {
      this.decimalToHms(changes.value.currentValue);
    }
  }

  update() {
    const value = parseInt(this.h) + (parseInt(this.m) / 60) + (parseInt(this.s) / 3600);
    this.decimalToHms(value);
    this.valueChange.emit(value);
  }

  addLeadingZero(s: string) {
    if (s.length <= 1) {
      s = '0' + s;
    }
    return s;
  }

  decimalToHms(n: number) {

    let h = Math.trunc(n);

    n = (n - h) * 60;
    let m = Math.trunc(n);

    n = (n - m) * 60;
    let s = Math.round(n);
    if (s >= 60) {
      s = 0;
      m++;
    }

    this.h = this.addLeadingZero(h.toString());
    this.m = this.addLeadingZero(m.toString());
    this.s = this.addLeadingZero(s.toString());
  }

}
