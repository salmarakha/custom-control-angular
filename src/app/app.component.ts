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
        required: true,
        placeholder: "Enter course name"
      },
      // {
      //   type: "text",
      //   name: "coursse",
      //   required: true,
      //   placeholder: "Enter course name"
      // },
    ],
    [
      {
        type: "label",
        value: "Course"
      },
      {
        type: "text",
        name: "coursee",
        required: true,
        placeholder: "Enter course name"
      },
    ],
    // [
    //   {
    //     type: "label",
    //     value: "Topic"
    //   },
    //   {
    //     type: "select",
    //     name: "topics",
    //     options: [
    //       {
    //         value: "programming",
    //         text: "Programming"
    //       },
    //       {
    //         value: "database",
    //         text: "Database"
    //       }
    //     ]
    //   }
    // ]
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
