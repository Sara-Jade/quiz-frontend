import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { Question } from "./question";

@Component({
    selector: 'questionList',
    templateUrl: './questionList.component.html',
})
export class QuestionListComponent {
    question: Question = {
        id: 0,
        text: '',
        correctAnswer: '',
        wrongAnswers: new Array<string>(),
        quizId: 0,
    }

    questions: Question[] = new Array<Question>();

    constructor(private api: ApiService) {}

    sendToForm(question: Question) {     
        this.api.updateForm(question)
    }

    ngOnInit() {
        return this.api.getQuestions()
            .subscribe(res => {
                this.questions = res as Question[]
            });
    }
}