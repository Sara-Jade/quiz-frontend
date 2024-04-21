import { Component } from '@angular/core'
import { Question } from './question'
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
       // questions: new Array<Question>()
    }

    constructor(private api: ApiService) { }

    post(quiz: Quiz) {
        this.api.postQuiz(quiz)
    }
}