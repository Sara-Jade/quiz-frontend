import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "./question";
import { BehaviorSubject } from "rxjs";
import { Quiz } from "./quiz";

@Injectable()
export class ApiService {
  private dataSubject = new BehaviorSubject<Question>({id: 0, text: '', correctAnswer: '', wrongAnswers: new Array<string>()});
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get("http://localhost:5167/api/Questions")
  }

  postQuestion(question: Question) {
    this.http.post("http://localhost:5167/api/Questions", question).subscribe(res => console.log(res))
  }

  postQuiz(quiz: Quiz) {
    this.http.post("http://localhost:5167/api/Quizzes", quiz).subscribe(res => console.log(res))
  }

  putQuestion(question: Question) {
    this.http.put(`http://localhost:5167/api/Questions/${question.id}`, question).subscribe(res => console.log(res))
  }

  updateData(newData: Question) {
    this.dataSubject.next(newData)
  }
}