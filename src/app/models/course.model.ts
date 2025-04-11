import { Chapter } from './chapter.model';
import { Exercice } from "./exercice.model";
import { Lesson } from "./lesson.model";
import { Quiz } from './quiz.model';

export class Course {
  id!: number;
  title!: string;
  duration!: number
  description!: string;
  high!: string;
  contributors!: string[];
  chapters!: Chapter[];
  // lessons: Lesson[];
  // exercice: Exercice
}
