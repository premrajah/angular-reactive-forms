import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
   declarations: [
      AppComponent,
      BasicFormComponent,
      ArrayFormComponent,
      NestedFormComponent,
      SubmitFormComponent,
      ValidFormComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      MatCheckboxModule,
      MatChipsModule,
      MatCardModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
