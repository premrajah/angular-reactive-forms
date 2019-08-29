import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  arrayForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.arrayForm = this.formBuilder.group({
      email: '',
      phones: this.formBuilder.array([])

    });
  }

  get phoneForms(){
    return this.arrayForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }

  deletePhone(index) {
    this.phoneForms.removeAt(index);
  }

}
