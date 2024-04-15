import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "./question";

@Injectable()
export class ApiService { 
  constructor(private http: HttpClient) {}

  postQuestion(question: Question) {
    console.log(`Inside api.service.ts.postQuestion()`);
    this.http.post("http://localhost:5167/api/Questions", question).subscribe(res => console.log(res));
  }
}