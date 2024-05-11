import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './questionForm.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from './api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { QuestionListComponent } from './questionList.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav.component';
import { QuizFormComponent } from './quizForm.component';
import { QuizListComponent } from './quizList.component';
import { LoginComponent } from './login.component';
import { AuthService  } from './auth.service';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'questionForm', component: QuestionFormComponent},
  {path: 'questionForm/:quizId', component: QuestionFormComponent},
  {path: 'questionList', component: QuestionListComponent},
  {path: 'quizForm', component: QuizFormComponent},
  {path: 'quizList', component: QuizListComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NavComponent, 
    QuestionFormComponent, 
    QuestionListComponent, 
    QuizFormComponent, 
    QuizListComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ApiService,
    AuthService,
    provideAnimationsAsync(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
