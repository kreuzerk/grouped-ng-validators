import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ColorValidators} from './validators/color.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flagQuiz: FormGroup;
  flagQuizAnswers = {
    firstColor: '',
    secondColor: '',
    thirdColor: '',
  };

  constructor(private fb: FormBuilder) {
    this.flagQuiz = fb.group({
      firstColor: new FormControl('', ColorValidators.blue),
      secondColor: new FormControl(''),
      thirdColor: new FormControl(''),
    }, {updateOn: 'blur'});
  }
}
