import { Component, Output } from '@angular/core';
import { InputControl } from './models/inputControl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputControls: InputControl[] = [
    {
      label: { value: "Course" },
      input: {
        type: "text",
        required: true,
        placeholder: "Enter course name"
      }
    }
    // ,
    // {
    //   label: { value: "Coursse" },
    //   input: {
    //     type: "text",
    //     required: true,
    //     placeholder: "Enter course name"
    //   }
    // }
  ];

  title = 'custom-control-task';
}
