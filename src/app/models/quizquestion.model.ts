export interface Quizquestion {
    question: string;
    options: string[];
    answerIndex: number; // index de la bonne réponse
    explanation?: string; // optionnel, pour afficher après
}
