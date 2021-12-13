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

  // @Input() controls: InputControl[] = [];
  @Input() controls: Array<Array<any>> = [];

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.controls.flatMap(arr => arr.filter(obj => obj.type !== 'label' && obj.type !== 'button' ))
    .forEach(input => {
      console.log(input.minLength)
      this.form.registerControl(input.name, new FormControl('', this.validateInputs(input)))
      //console.log(this.form.get("course")?.valid)
      // TODO: validation
    });
    console.log("errors", this.form.controls["course"]?.errors);
  }

  remove(index: number) {
    this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    .forEach(input => this.form.removeControl(input.name));
    this.controls.splice(index, 1);
    console.log(this.form.controls)
  }

  add(index: number) {
    this.controls[index].filter(controls => controls.type !== 'label' && controls.type !== 'button')
    .forEach(input => this.form.registerControl(input.name, new FormControl()));
    // TODO: validation
    this.controls.push(this.controls[index]); // add the control group to the array
  }

  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? {forbiddenName: {value: control.value}} : null;
  //   };
  // }

  validateInputs (input: any) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(input.required && !control.value) {
        return Validators.required;
      }
      if(input.minLength && control.value?.length < input.minLength) {
        return { minlength: { value: control.value } };
      }
      return null;
    }
  }

}
