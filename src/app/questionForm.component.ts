import { Component } from "@angular/core";
import { Question } from "./question";

@Component({
  selector: 'questionForm',
  templateUrl: './questionForm.component.html',
})

export class QuestionFormComponent {

  post(question: Question) {
    console.log(`Question: ${question.text}`);
  }
}