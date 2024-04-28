import { Component } from "@angular/core";
import { Question } from "./question";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'questionForm',
  templateUrl: './questionForm.component.html',
})
export class QuestionFormComponent {
  quizId: string | null = ''
  
  question: Question = {
    id: 0,
    text: "",
    correctAnswer: "",
    wrongAnswers: new Array<string>(),
    quizId: 0
  }

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.api.data$.subscribe((data) => { this.question = data });

    this.quizId = this.route.snapshot.paramMap.get('quizId')
    if (this.quizId) this.question.quizId = +this.quizId

    console.log('End of questionForm constructor')
    console.log(`this.question.quizId: ${this.question.quizId}`)
  }

  post(question: Question) {
    this.api.postQuestion(question)
  }

  put(question: Question) {
    this.api.putQuestion(question)
  }
}