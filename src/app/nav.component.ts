import {Component} from '@angular/core'

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar>
            <button mat-button routerLink="/quiz">Quiz</button>
            <button mat-button routerLink="/questionForm">QuestionForm</button>
            <button mat-button routerLink="/questionList">QuestionList</button>
        </mat-toolbar>
    `,
})
export class NavComponent {

}