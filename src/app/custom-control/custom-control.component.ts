import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent implements OnInit {

  @Input() controls: InputControl[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.controls);
  }

  ngAfterViewInit(): void {

  }

  remove(index: number) {
    this.controls.splice(index, 1);
  }

  add(index: number) {
    this.controls.push(this.controls[index]);
  }

}
