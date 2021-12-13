import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css']
})
export class CustomControlComponent implements OnInit {

  @Input() controls: Array<Array<any>> = [];

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.controls.flatMap(arr => arr.filter(obj => obj.type !== 'label' && obj.type !== 'button' ))
    .forEach(input => {
      console.log(input.name)
      this.form.registerControl(input.name, new FormControl('', this.validateInputs(input)))
    });
  }

  remove(index: number) {
    this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    .forEach(input => this.form.removeControl(input.name));
    this.controls.splice(index, 1);
  }

  add(index: number) {
    this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    .forEach(input => this.form.registerControl(input.name, new FormControl()));
    this.controls.push(this.controls[index]);
  }

  validateInputs (input: any) : ValidatorFn[] {

    let validations: ValidatorFn[] = [];

    if(input.type === "email") {
      validations.push(Validators.email);
    }
    if(input.required) {
      validations.push(Validators.required);
    }
    if(input.minLength) {
      validations.push(Validators.minLength(input.minLength));
    }
    if(input.maxLength) {
      validations.push(Validators.maxLength(input.maxLength));
    }
    if(input.name === "confirm-password") {
      validations.push((control: AbstractControl) : { invalidPassword: boolean } | null => {
        // control variable refers to confirm-password control
        let password = this.form.get("password")?.value
        if(control.value !== password)
          return { invalidPassword: true }
        return null;
      })
    }
    return validations;
  }

}
