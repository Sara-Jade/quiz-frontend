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
        wrongAnswers: []
    }

    questions: Question[] = [];

    constructor(private api: ApiService) {}

    sendData(question: Question) {     
        this.api.updateData(question)
    }

    ngOnInit() {
        return this.api.getQuestions()
            .subscribe(res => {
                this.questions = res as Question[]
            });
    }
}