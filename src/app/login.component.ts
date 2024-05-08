import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component ({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    form: FormGroup<{
        email: FormControl<string | null>;
        password: FormControl<string | null>;
    }>

    constructor(private api: ApiService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(16)]]
        })
    }

    onSubmit(form: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null>; }>) {
        this.api.postCredentials(form.value)
        console.log(this.form)
    }
}