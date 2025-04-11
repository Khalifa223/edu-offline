
export interface Quiz {
    id: number,
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
}