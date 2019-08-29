import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {
  validationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'
          ) /* Regex: Atleast one number and letter */
        ]
      ],
      age: [
        '',
        [
          Validators.required,
          /*String*/ Validators.minLength(2),
          /*Numerials*/ Validators.min(18),
          Validators.max(65)
        ]
      ],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  get email() {
    return this.validationForm.get('email');
  }

  get password(){
    return this.validationForm.get('password');
  }

  get age(){
    return this.validationForm.get('age');
  }

  get agree(){
    return this.validationForm.get('agree');
  }

}
