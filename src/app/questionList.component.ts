import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector: 'questionList',
    templateUrl: './questionList.component.html',
})

export class QuestionListComponent {
    constructor( private api: ApiService) {}

    
}