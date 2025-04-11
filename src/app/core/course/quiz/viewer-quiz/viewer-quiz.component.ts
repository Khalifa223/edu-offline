import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Quiz } from 'src/app/models/quiz.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-viewer-quiz',
  templateUrl: './viewer-quiz.component.html',
  styleUrls: ['./viewer-quiz.component.css']
})
export class ViewerQuizComponent {
  course!: Course
  courseId!: number;
  chapterId!: number;
  quizzes: Quiz[] = [];
  currentQuestionIndex: number = 0;
  selectedOptionIndex: number | null = null;
  showExplanation: boolean = false;
  score: number = 0;
  quizFinished: boolean = false;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.getQuizOnChapterByCourse();
  }

  getQuizOnChapterByCourse() {
    const courseId = +(this.route.snapshot.paramMap.get('courseId'))!;
    const chapterId = +(this.route.snapshot.paramMap.get('chapterId'))!;

    this.courseService.getCourseById(courseId).subscribe(course => {
      this.course = course
      const chapter = course.chapters.find(ch => ch.id === chapterId);
      console.log(chapter)
      if (chapter && chapter.quiz?.length > 0) {
        if (chapter.quiz) {
          this.quizzes = chapter.quiz;
          console.table(this.quizzes)
        }
      }
    });
  }

  goToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.selectedOptionIndex = null;
    this.showExplanation = false;
  }
  

  selectOption(index: number): void {
    this.selectedOptionIndex = index;
    this.showExplanation = true;
    if (index === this.quizzes[this.currentQuestionIndex].answerIndex) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quizzes.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOptionIndex = null;
      this.showExplanation = false;
    } else {
      this.quizFinished = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOptionIndex = null;
    this.showExplanation = false;
    this.score = 0;
    this.quizFinished = false;
  }
}
