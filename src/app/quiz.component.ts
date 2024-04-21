import { Component } from '@angular/core'
import { Question } from './question'
import { Quiz } from './quiz'
import { ApiService } from './api.service'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
})
export class QuizComponent {
    quiz: Quiz = {
        id: 0,
        title: '',
       // questions: new Array<Question>()
    }

    constructor(private api: ApiService) { }

    post(quiz: Quiz) {
        this.api.postQuiz(quiz)
    }
}