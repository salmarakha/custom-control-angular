import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent implements OnInit {

  // @Input() controls: InputControl[] = [];
  @Input() controls: Array<Array<any>> = [];

  form: FormGroup = new FormGroup({});

  getFormControlName = (index: number) => {
    console.log("getFormControlName is called!!");
    console.log(this.form.value);
    return Object.keys(this.form.controls)[index];
  }

  constructor() { }

  ngOnInit(): void {
    this.controls.flatMap(arr => arr.filter(obj => obj.type !== 'label' && obj.type !== 'button' ))
    .forEach(input => {
      this.form.registerControl(input.name, new FormControl())
      // TODO: validation .addValidators()
    });
  }

  ngAfterViewInit(): void {

  }

  remove(index: number) {
    const inputsInFormGroup = this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    console.log(inputsInFormGroup)
    for (const input of inputsInFormGroup) {
      this.form.removeControl(input.name);
    }
    this.controls.splice(index, 1);
    console.log(this.form.controls)
  }

  add(index: number) {
    const inputsInFormGroup = this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    console.log(inputsInFormGroup)
    for (const input of inputsInFormGroup) {
      let control = new FormControl();
      this.form.registerControl(input.name, control);
      // TODO: validation
    }
    this.controls.push(this.controls[index]); // add the control group to the array
    console.log("form controls", this.form.controls)
    console.log(this.controls)
    // console.log("controls: ", this.controls);
    // console.log(Object.keys(this.form.controls));
  }

}
