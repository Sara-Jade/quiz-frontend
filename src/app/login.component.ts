import { Component } from "@angular/core";
import { Credentials } from "./credentials";
import { ApiService } from "./api.service";

@Component ({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    credentials: Credentials = {
        email: '',
        password: '',
    }

    constructor(private api: ApiService) {}

    post(credentials: Credentials) {
        this.api.postCredentials(credentials)
    }
}