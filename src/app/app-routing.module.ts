import { ViewerQuizComponent } from './core/course/quiz/viewer-quiz/viewer-quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerCourseComponent } from './core/course/viewer-course/viewer-course.component';
import { ListCourseComponent } from './core/course/list-course/list-course.component';
import { ViewerLessonComponent } from './core/course/lesson/viewer-lesson/viewer-lesson.component';
import { ViewerChapterComponent } from './core/course/chapter/viewer-chapter/viewer-chapter.component';
import { CourseComponent } from './core/course/course.component';

const routes: Routes = [
  {
    path: "courses",
    component: ListCourseComponent
  },
  {
    path: "courses/:courseId",
    component: ViewerCourseComponent
  },
  {
    path: "courses/:courseId/chapters/:chapterId",
    component: ViewerChapterComponent
  },
  {
    path: 'courses/:courseId/chapters/:chapterId/quiz',
    component: ViewerQuizComponent,
  },
  {
    path: "courses/:courseId/chapters/:chapterId/lessons/:lessonId",
    component: ViewerLessonComponent
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
