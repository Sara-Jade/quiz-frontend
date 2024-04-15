import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { MatListModule } from '@angular/material/list';
import { Question } from "./question";

@Component({
    selector: 'questionList',
    templateUrl: './questionList.component.html',
})
export class QuestionListComponent {
    questions: Question[] = [];

    constructor( private api: ApiService) {}

    ngOnInit() {
        return this.api.getQuestions()
            .subscribe(res => {
                this.questions = res as Question[]
                console.log(`this.questions: ${this.questions}`)
            });
    }
}