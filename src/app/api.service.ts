import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "./question";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ApiService {
  private dataSubject = new BehaviorSubject<Question>({id: 0, text: '', correctAnswer: '', wrongAnswers: []});
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get("http://localhost:5167/api/Questions")
  }

  postQuestion(question: Question) {
    console.log(`Inside api.service.ts.postQuestion()`)
    this.http.post("http://localhost:5167/api/Questions", question).subscribe(res => console.log(res))
  }

  updateData(newData: Question) {
    this.dataSubject.next(newData)
  }
}