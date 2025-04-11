import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Lesson } from '../models/lesson.model';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private dataUrl = "assets/data/courses.json";
  constructor(private http: HttpClient) { }

  //List of Courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.dataUrl}`);
  }

  // Méthode pour récupérer un cours par ID
  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map(courses => courses.find(course => course.id === courseId))
    );
  }

  // Get Course By Id
  getCourseByIds(id: number): Observable<Course> {
    return this.getCourses().pipe(
      map(courses => {
        const course =courses.find(course => course.id == id);
        if (!course) throw new Error("Course not found !");
        return course;
      })
    )
  }

  // Get Chapters By Id From Course
  // getChapterById(courseId: number, chapterId: number): Observable<Chapter> {
  //   return this.getCourseById(courseId).pipe(
  //     map(course => {
  //       const chapter = course.chapters.find(c => c.id === chapterId)
  //       if (!chapter) throw new Error("Chapter not found !")
  //       return chapter;
  //     })
  //   )
  // }

  // Get Lesson By Id From Your Course
  // getLessonById(courseId: number, lessonId: number): Observable<Lesson> {
  //   return this.getCourseById(courseId).pipe(
  //     map(course => {
  //       // const lesson = course.lessons.find(l => l.id === lessonId);
  //       // if (!lesson) throw new Error('Lesson not found !');
  //       // return lesson;
  //     })
  //   );
  // }
}
