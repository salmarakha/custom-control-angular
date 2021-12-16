import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
})
export class CustomControlComponent implements OnInit {

  @Input() controls: Array<Array<any>> = [];

  form: FormGroup = new FormGroup({});

  constructor() { }

  addControlErrors(allErrors: any, controlName:string) {

    const errors = {...allErrors};

    const controlErrors = this.form.controls[controlName].errors;

    if (controlErrors) {
      errors[controlName] = controlErrors;
    }

    return errors;
  }

  ngOnInit(): void {
    this.controls.flatMap(arr => arr.filter(obj => obj.type !== 'label' && obj.type !== 'button' ))
    .forEach(input => {
      // this.form.addControl(input.name, new FormControl('', this.validateInputs(input)))
      this.form.addControl(input.name, new FormControl(input.value || '', input.validation))
    });
  }

  // ngAfterViewInit(): void {
  //   console.log(this.form.controls)
  // }

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

  getData() {
    return this.form.value;
  }

  onCheckChange(event: any) {
    if (event.target.checked) {
      // add the selected value
      this.form.controls[event.target.name].setValue(event.target.value);
    }
  }

  // validateInputs (input: any) : ValidatorFn[] {

  //   let validations: ValidatorFn[] = [];

  //   if(input.type === "email") {
  //     validations.push(Validators.email);
  //   }
  //   if(input.required) {
  //     validations.push(Validators.required);
  //   }
  //   if(input.minLength) {
  //     validations.push(Validators.minLength(input.minLength));
  //   }
  //   if(input.maxLength) {
  //     validations.push(Validators.maxLength(input.maxLength));
  //   }
  //   if(input.min) {
  //     validations.push(Validators.min(input.min));
  //   }
  //   if(input.min) {
  //     validations.push(Validators.max(input.max));
  //   }
  //   if(input.name === "confirm-password") {
  //     validations.push((control: AbstractControl) : { invalidPassword: boolean } | null => {
  //       // control variable refers to confirm-password control
  //       let password = this.form.get("password")?.value
  //       if(control.value !== password)
  //         return { invalidPassword: true }
  //       return null;
  //     })
  //   }
  //   return validations;
  // }

}
