import { Quiz } from "./quiz.model";

export interface Lesson {
  id: number;
  title: string;
  content: string;
  pdfUrl: string,
  videoUrl: string
}
