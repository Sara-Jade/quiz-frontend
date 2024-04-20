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
    wrongAnswers: new Array<string>()
  }

  constructor(private api: ApiService) {
    this.api.data$.subscribe((data) => {
      this.question = data;
    });
  }

  post(question: Question) {
    this.api.postQuestion(question)
  }

  put(question: Question) {
    this.api.putQuestion(question)
  }
}