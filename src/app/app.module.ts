import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './core/course/course.component';
import { ListCourseComponent } from './core/course/list-course/list-course.component';
import { ViewerCourseComponent } from './core/course/viewer-course/viewer-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListCourseComponent,
    ViewerCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
