import { Lesson } from './lesson.model';
import { Quiz } from './quiz.model';
export interface Chapter {
    id: number,
    title: string
    lessons: Lesson[]
    quiz: Quiz[]
}
