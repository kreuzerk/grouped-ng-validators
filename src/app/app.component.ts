import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flagQuiz: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flagQuiz = fb.group({
      firstColor: new FormControl(''),
      secondColor: new FormControl(''),
      thirdColor: new FormControl(''),
    });
  }
}
