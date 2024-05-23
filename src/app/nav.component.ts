import {Component} from '@angular/core'

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar>
            <button mat-button routerLink="/">Home</button>
            <button mat-button routerLink="/quizForm">QuizForm</button>
            <button mat-button routerLink="/questionForm">QuestionForm</button>
            <span style="flex: 1 1 auto;"></span>
            <button mat-button routerLink="/register">New account</button>
        </mat-toolbar>
    `,
})
export class NavComponent {

}