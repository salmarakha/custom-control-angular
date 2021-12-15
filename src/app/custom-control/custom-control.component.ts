import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputControl } from '../models/inputControl';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomControlComponent
    }
  ],
})
export class CustomControlComponent implements OnInit, ControlValueAccessor {

  @Input() controls: Array<Array<any>> = [];

  form: FormGroup = new FormGroup({});

  onChangeSub: Subscription = new Subscription();

  constructor() { }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }

  registerOnChange(onChange: any) {
    console.log(onChange)
    const sub = this.form.valueChanges.subscribe(onChange);
    this.onChangeSub = sub;
    // this.onChangeSubs.push(sub);
    console.log(this.onChangeSub);
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.controls.flatMap(arr => arr.filter(obj => obj.type !== 'label' && obj.type !== 'button' ))
    .forEach(input => {
      // this.form.addControl(input.name, new FormControl('', this.validateInputs(input)))
      this.form.addControl(input.name, new FormControl('', input.validation))
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
    if(input.min) {
      validations.push(Validators.min(input.min));
    }
    if(input.min) {
      validations.push(Validators.max(input.max));
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

  onSubmit() {
    console.log("form values", this.form.value);
  }

}
