// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { ChartComponent } from './components/chart/chart.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  { path: 'lesson-edit-form', component: LessonEditFormComponent },
  { path: 'lesson-search-page', component: LessonSearchPageComponent },
  { path: 'lesson-list-page', component: LessonListPageComponent },
  { path: 'lesson/:id', component: LessonDetailPageComponent },
  { path: 'test-page1', component: TestPage1Component },
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'chart', component: ChartComponent }, // New route for ChartComponent
  { path: 'grid', component: GridComponent },   // New route for GridComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
