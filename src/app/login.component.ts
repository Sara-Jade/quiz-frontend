import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component ({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    credentials: FormGroup<{
        email: FormControl<string | null>;
        password: FormControl<string | null>;
    }>

    constructor(private api: ApiService, private auth: AuthService, private fb: FormBuilder) {
        this.credentials = fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(16)]]
        })
    }

    onSubmit(credentials: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null>; }>) {
        this.auth.postCredentials(credentials.value)
    }
}