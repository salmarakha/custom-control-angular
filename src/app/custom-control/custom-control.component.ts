import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent implements OnInit {

  @Input() controls: InputControl[] = [];
  form: FormGroup = new FormGroup({});

  getFormControlName = (index: number) => {
    // new inputs are pushed to the end of the array so the order is correct
    //console.log(Object.keys(this.form.controls)[index]);
    console.log("getFormControlName is called!!!");
    // Function is called with every click or keypress and for each input ????
    return Object.keys(this.form.controls)[index];
  }

  constructor() { }

  ngOnInit(): void {
    this.controls.forEach((row, index) => this.form.addControl(`name${index}`, new FormControl()));
  }

  ngAfterViewInit(): void {

  }

  remove(index: number) {
    this.controls.splice(index, 1);
    this.form.removeControl(`name${index}`);
  }

  add(index: number) {
    this.form.addControl(`name${this.controls.length}`, new FormControl());
    this.controls.push(this.controls[index]);
    console.log(Object.keys(this.form.controls));
  }

}
