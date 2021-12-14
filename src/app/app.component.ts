import { Component, Output } from '@angular/core';
import { InputControl } from './models/inputControl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
        required: true,
        minLength: 3,
        maxLength: 10,
        placeholder: "Enter course name"
      }
    ],
    [
      {
        type: "label",
        value: "Experience Level"
      },
      {
        type: "radio",
        name: "experience",
        value: "Junior",
        // required: true
      },
      {
        type: "radio",
        name: "experience",
        value: "Mid-level",
        // required: true
      },
      {
        type: "radio",
        name: "experience",
        value: "Senior",
        // required: true
      }
    ],
    [
      {
        type: "label",
        value: "Number"
      },
      {
        type: "number",
        name: "grade",
        required: true,
        min: 10,
        max: 100,
        placeholder: "Enter grade"
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
        placeholder: "Enter your email"
      },
    ],
    [
      {
        type: "label",
        value: "Password"
      },
      {
        type: "password",
        name: "password",
        required: true,
        placeholder: "Password"
      },
    ],
    [
      {
        type: "label",
        value: "Confirm password"
      },
      {
        type: "password",
        name: "confirm-password",
        required: true,
        placeholder: "Confirm Password"
      },
    ],
    [
      {
        type: "label",
        value: "Topic"
      },
      {
        type: "select",
        name: "topics",
        required: true,
        options: [
          {
            value: "programming",
            text: "Programming"
          },
          {
            value: "database",
            text: "Database"
          }
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
