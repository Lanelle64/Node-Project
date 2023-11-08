import { Component } from '@angular/core';
import { LessonPackage } from './lesson-package.model';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {

  constructor(private router: Router, private userSettingsService: UserSettingsService) {}
  onClickSubmit() {
  // could execute code (send save request to server)... then navigate
  this.userSettingsService.lastLessonId = 1234;
  this.router.navigate(['/lesson-list-page']).then(res => {});
  }
  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
}
