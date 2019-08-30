import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  submitableForm: FormGroup;

  /* Form State */
  loading = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    this.submitableForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  /* Form submission */
  async submitHandler() {
    this.loading = true;

    const formValue = this.submitableForm.value;

    try {

      await this.angularFirestore.collection('contacts').add(formValue);
      this.success = true;

    } catch(err) {
      console.error(err);
    }

    this.loading = false;

  }

}
