import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CourseComponent } from './core/course/course.component';
import { ListCourseComponent } from './core/course/list-course/list-course.component';
import { ViewerCourseComponent } from './core/course/viewer-course/viewer-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewerLessonComponent } from './core/course/lesson/viewer-lesson/viewer-lesson.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ViewerChapterComponent } from './core/course/chapter/viewer-chapter/viewer-chapter.component';
import { ListChapterComponent } from './core/course/chapter/list-chapter/list-chapter.component';
import { ViewerQuizComponent } from './core/course/quiz/viewer-quiz/viewer-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListCourseComponent,
    ViewerCourseComponent,
    ViewerLessonComponent,
    SafeUrlPipe,
    ViewerChapterComponent,
    ListChapterComponent,
    ViewerQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
