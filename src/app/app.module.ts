import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './questionForm.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from './api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { QuestionListComponent } from './questionList.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'questionForm', component: QuestionFormComponent},
  {path: 'questionList', component: QuestionListComponent},
]

@NgModule({
  declarations: [AppComponent, HomeComponent, QuestionFormComponent, QuestionListComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ApiService,
    provideAnimationsAsync(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
