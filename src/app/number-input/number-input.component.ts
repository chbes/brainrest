import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  
  @Input() choose: boolean;
  @Input() name: string;
  @Input() unit: string;
  @Input() value: number;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  update() {
    this.valueChange.emit(this.value);
  }

}
