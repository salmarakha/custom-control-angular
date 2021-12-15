import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputControl } from './models/inputControl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    data: new FormControl('')
  });

  validatePassword = (control: AbstractControl) : { invalidPassword: boolean } | null=> {
    if(control.value !== control.parent?.get('password')?.value)
      return { invalidPassword: true };
    return null;
  }

  onSubmit () {
    console.log("Valid form", this.form.valid);
    console.log(this.form.value);
  }

  inputControls = [
    [
      {
        type: "label",
        value: "Course"
      },
      {
        type: "text",
        name: "course",
        value: "blabla",
        // required: true,
        minLength: 3,
        maxLength: 10,
        placeholder: "Enter course name",
        validation : [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      }
    ],
    // [
    //   {
    //     type: "label",
    //     value: "Experience Level"
    //   },
    //   {
    //     type: "radio",
    //     name: "experience",
    //     values: ["Junior", "Mid-level", "Senior"]
    //     // required: true
    //   },
    //   // {
    //   //   type: "radio",
    //   //   name: "experience",
    //   //   value: "Mid-level",
    //   //   // required: true
    //   // },
    //   // {
    //   //   type: "radio",
    //   //   name: "experience",
    //   //   value: "Senior",
    //   //   // required: true
    //   // }
    // ],
    [
      {
        type: "label",
        value: "Number"
      },
      {
        type: "number",
        name: "grade",
        // required: true,
        min: 10,
        max: 100,
        placeholder: "Enter grade",
        validation : [
          Validators.required,
          Validators.min(10),
          Validators.max(100)
        ]
      }
    ],
    [
      {
        type: "label",
        value: "Email"
      },
      {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        validation: [
          Validators.email,
          Validators.required
        ]
      },
    ],
    // [
    //   {
    //     type: "label",
    //     value: "Password"
    //   },
    //   {
    //     type: "password",
    //     name: "password",
    //     // required: true,
    //     placeholder: "Password",
    //     validation: [
    //       Validators.required
    //     ]
    //   },
    // ],
    // [
    //   {
    //     type: "label",
    //     value: "Confirm password"
    //   },
    //   {
    //     type: "password",
    //     name: "confirm-password",
    //     // required: true,
    //     placeholder: "Confirm Password",
    //     validation: [
    //       Validators.required,
    //       this.validatePassword
    //     ]
    //   },
    // ],
    [
      {
        type: "label",
        value: "Topic"
      },
      {
        type: "select",
        name: "topics",
        // required: true,
        options: [
          {
            value: "programming",
            text: "Programming"
          },
          {
            value: "database",
            text: "Database"
          }
        ],
        validation: [
          Validators.required
        ]
      }
    ]
  ];
  // inputControls: InputControl[] = [
  //   {
  //     label: { value: "Course" },
  //     input: {
  //       type: "text",
  //       required: true,
  //       placeholder: "Enter course name"
  //     }
  //   }
  // ];

  title = 'custom-control-task';
}
