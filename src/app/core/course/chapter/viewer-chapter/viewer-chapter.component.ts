import { Chapter } from './../../../../models/chapter.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-viewer-chapter',
  templateUrl: './viewer-chapter.component.html',
  styleUrls: ['./viewer-chapter.component.css']
})
export class ViewerChapterComponent {

  course: Course = new Course();
  currentChapterIndex!: number
  currentChapter!: Chapter

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourseById();
    console.table(this.getCourseById());
  }

  getCourseById() {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    const chapterId = +this.route.snapshot.paramMap.get('chapterId')!;
    this.courseService.getCourseById(courseId).subscribe(course => {
      this.course = course;
      this.currentChapterIndex = course.chapters.findIndex(chapter => chapter.id === chapterId);
      this.currentChapter = course.chapters[this.currentChapterIndex];
    });
  }

}
