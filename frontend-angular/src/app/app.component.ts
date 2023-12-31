import { Component, OnInit } from '@angular/core';
import { LessonPackage } from './lesson-edit-form/lesson-package.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'td3';
  
  constructor(private router: Router) {
    console.log('AppComponent.constructor()');
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('AppComponent.ngOnDestroy()');
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
