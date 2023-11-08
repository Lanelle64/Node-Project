import { Component } from '@angular/core';
import { LessonPackage } from './lesson-package.model';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  lessonForm: FormGroup; // Define a FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.lessonForm = this.formBuilder.group({
      title: ['', Validators.required], // Define form controls with validators
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: [''],
    });
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }
}