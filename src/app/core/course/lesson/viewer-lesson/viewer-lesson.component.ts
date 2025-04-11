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

  // currentLessonIndex!: number
  // quiz!: Quiz
  // currentLesson: Lesson |any = { id: 0, title: "", content: "", pdfUrl: "", videoUrl: "", quiz: {question: "", options: [], answerIndex: 0 } }
  // course!: Course
  courses!: Course[];
  lesson: any;
  chapterTitle: string = '';
  courseTitle: string = '';
  courses$!: Observable<any[]>; // Observable pour la liste des cours

  // constructor(
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   private courseService: CourseService
  // ) { }
  // ngOnInit(): void {
  //   this.getCourseById();
  //   console.info(this.currentLesson?.quiz?.length)
  // }

  // getCourseById() {
  //   const courseId = +this.route.snapshot.paramMap.get('id')!;
  //   const lessonId = +this.route.snapshot.paramMap.get('lessonId')!;
  //   this.courseService.getCourseById(courseId).subscribe(course => {
  //     this.course = course;
  //     // this.currentLessonIndex = course.lessons.findIndex(lesson => lesson.id === lessonId);
  //     // this.currentLesson = course.lessons[this.currentLessonIndex];
  //   });
  // }

  // nextLesson() {
  //   // if (this.currentLessonIndex + 1 < this.course.lessons.length) {
  //   //   this.currentLessonIndex++
  //   //   // this.currentLesson = this.course.lessons[this.currentLessonIndex]
  //   //   this.router.navigate(['/courses', this.course.id, 'lessons', this.currentLessonIndex]);
  //   // }
  // }

  // downloadFile(url: string) {
  //   const filename = url.split('/').pop() || 'fichier';
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = filename;
  //   a.click();
  // }

  // selectedAnswers: number[] = [];
  // quizSubmitted = false;

  // selectAnswer(questionIndex: number, optionIndex: number) {
  //   this.selectedAnswers[questionIndex] = optionIndex;
  // }

  // submitQuiz() {
  //   this.quizSubmitted = true;
  // }
  

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

    // Appel du service pour récupérer le cours et les leçons
    this.courseService.getCourseById(courseId).subscribe(course => {
      if (course) {
        this.courseTitle = course.title;

        const chapter = course.chapters.find(ch => ch.id === chapterId);
        if (chapter) {
          this.chapterTitle = chapter.title;

          this.lesson = chapter.lessons.find(l => l.id === lessonId);
        }
      }
    });
  }
}
