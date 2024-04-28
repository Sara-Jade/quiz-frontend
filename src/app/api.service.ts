import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "./question";
import { BehaviorSubject } from "rxjs";
import { Quiz } from "./quiz";

@Injectable()
export class ApiService {
  private dataSubject = new BehaviorSubject<Question>({id: 0, text: '', correctAnswer: '', wrongAnswers: new Array<string>()});
  public data$ = this.dataSubject.asObservable();
  private quizSubject = new BehaviorSubject<Quiz>({id: 0, title: ''})
  public quiz$ = this.quizSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get("http://localhost:5167/api/Questions")
  }

  getQuizzes() {
    return this.http.get("http://localhost:5167/api/Quizzes")
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

  putQuiz(quiz: Quiz) {
    this.http.put(`http://localhost:5167/api/Quizzes/${quiz.id}` , quiz).subscribe(res => console.log(res))
  }

  updateForm(newData: Question) {
    this.dataSubject.next(newData)
  }

  updateQuizForm(newQuiz: Quiz) {
    console.log('Inside api.service.updateQuizForm()')
    this.quizSubject.next(newQuiz)
  }
}