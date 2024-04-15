import { Component } from "@angular/core";
import { Question } from "./question";
import { ApiService } from "./api.service";

@Component({
  selector: 'questionForm',
  templateUrl: './questionForm.component.html',
})

export class QuestionFormComponent {
  question: Question = {
    id: 0,
    text: "",
    correctAnswer: "",
    wrongAnswers: []
  }

  constructor(private api: ApiService) {}

  post(question: Question) {
    this.api.postQuestion(question);
    console.log(`Inside questionForm.component.ts.post(). Question should have posted.`)
  }
}