import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { Quiz } from "./quiz";

@Component({
    selector: 'quizList',
    templateUrl: './quizList.component.html',
})
export class QuizListComponent {
    quiz: Quiz = {
        id: 0,
        title: '',
    }

    quizzes: Quiz[] = new Array<Quiz>()

    constructor(private api: ApiService) {}

    ngOnInit() {
        return this.api.getQuizzes()
            .subscribe(res => {
                this.quizzes = res as Quiz[]
            });
    }

    sendToQuizForm(quiz: Quiz) {     
        // console.log('Inside sendtoQuizForm() in quizList.ts')
        this.api.updateQuizForm(quiz)
    }
}