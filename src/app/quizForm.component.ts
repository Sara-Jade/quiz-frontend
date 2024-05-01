import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { Quiz } from './quiz'

@Component({
    selector: 'quizForm',
    templateUrl: './quizForm.component.html',
})
export class QuizFormComponent {
    quiz: Quiz = {
        id: 0,
        title: '',
    }

    constructor(private api: ApiService) { 
        this.api.quiz$.subscribe(newQuiz => this.quiz = newQuiz)
    }

    post(quiz: Quiz) {
        this.api.postQuiz(quiz)
    }

    put(quiz: Quiz) {
        this.api.putQuiz(quiz)
    }

    sendToQuestionList(quiz: Quiz) {
        this.api.updateQuestionListByQuizId(quiz.id)
    }
}