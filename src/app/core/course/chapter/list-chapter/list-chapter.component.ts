import { Component, Input } from '@angular/core';
import { Chapter } from 'src/app/models/chapter.model';

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.component.html',
  styleUrls: ['./list-chapter.component.css']
})
export class ListChapterComponent {
  @Input() chapters: Chapter[] = [];
  expandedChapterId: number | null = null;

  toggleChapter(id: number) {
    this.expandedChapterId = this.expandedChapterId === id ? null : id;
  }

  getLessonCount(ch: Chapter): number {
    return ch.lessons.length;
  }

  getQuizCount(ch: Chapter): number {
    return ch.quiz.length;
  }
}
