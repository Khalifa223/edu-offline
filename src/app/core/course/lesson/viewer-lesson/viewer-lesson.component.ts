import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { Quiz } from 'src/app/models/quiz.model';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer-lesson',
  templateUrl: './viewer-lesson.component.html',
  styleUrls: ['./viewer-lesson.component.css']
})
export class ViewerLessonComponent implements OnInit{
  courseId!: number;
  chapterId!: number;
  lessonId!: number;
  lesson: Lesson = {id: 0, title: '', content: '', pdfUrl: '', videoUrl: ''};
  showQuizButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService 
  ) {}

  ngOnInit(): void {
    this.getLessonByCourseId();
  }

  getLessonByCourseId() {
    const courseId = +this.route.snapshot.paramMap.get('courseId')!;
    const chapterId = +this.route.snapshot.paramMap.get('chapterId')!;
    const lessonId = +this.route.snapshot.paramMap.get('lessonId')!;
    console.warn(courseId)
    console.warn(chapterId)
    console.warn(lessonId)

    //  Call the service to get the course and the lessons
    this.courseService.getCourseById(courseId).subscribe(course => {
      const chapter = course.chapters.find(ch => ch.id === chapterId);
      const lessons = chapter?.lessons;

      if (lessons) {
        this.lesson = lessons.find(lesson => lesson.id === lessonId)!;
        const isLastLesson = lessons[lessons.length - 1].id === lessonId;
        console.log(isLastLesson)
        this.showQuizButton = isLastLesson && chapter.quiz.length > 0;
      }
    });
  }
  
  downloadFile(url: string) {
    const filename = url.split('/').pop() || 'fichier';
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  }
}
