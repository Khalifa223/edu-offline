import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Chapter } from 'src/app/models/chapter.model';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-viewer-course',
  templateUrl: './viewer-course.component.html',
  styleUrls: ['./viewer-course.component.css']
})
export class ViewerCourseComponent implements OnInit {
  course: Course = new Course;
  chapter!: Chapter
  currentLessonIndex!: number
  currentLesson!: Lesson
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourseById();
    // this.getChapterById();
    console.table(this.getCourseById());
  }

  getCourseById() {
    const courseId = +this.route.snapshot.paramMap.get('courseId')!;
    const lessonId = +this.route.snapshot.paramMap.get('lessonId')!;
    this.courseService.getCourseById(courseId).subscribe(course => {
      this.course = course;
      // this.currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId);
      // this.currentLesson = course.lessons[this.currentLessonIndex];
    });
  }

  // getChapterById() {
  //   console.info("cliquez 🔔")
  //   const courseId = +this.route.snapshot.paramMap.get('courseId')!;
  //   const chapterId = +this.route.snapshot.paramMap.get('chapterId')!;
  //   const lessonId = +this.route.snapshot.paramMap.get('lessonId')!;
  //   console.info(courseId)
  //   console.info(chapterId)
  //   console.info(lessonId)
  //   this.courseService.getChapterById(courseId, chapterId).subscribe(chapter => {
  //     this.chapter = chapter
  //     this.currentLessonIndex = chapter.lessons.findIndex(l => l.id === lessonId);
  //     this.currentLesson = chapter.lessons[this.currentLessonIndex];
  //   })
}



// nextLesson() {
// if (this.currentLessonIndex + 1 < this.course.lessons.length) {
// //   const nextLesson = this.course.lessons[this.currentLessonIndex + 1];
//   this.router.navigate(['/courses', this.course.id, 'lessons', nextLesson.id]);
// }
// }

