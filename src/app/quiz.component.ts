import { Component } from '@angular/core'
import { Question } from './question'
import { Quiz } from './quiz'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
})
export class QuizComponent {
    quiz: Quiz = {
        id: 0,
        title: '',
        questions: new Array<Question>()
    }
}