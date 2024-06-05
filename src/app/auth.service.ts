import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"

@Injectable()
export class AuthService {
    res = {
        key: '', 
        value: ''
    }

    constructor(private http: HttpClient, private router: Router) {}

    postCredentials(credentials: Partial<{ email: string | null; password: string | null; }>) {
        this.http.post<string>('http://localhost:5167/api/Account', credentials)
        .subscribe(res => {
            this.res = res as any;
            localStorage.setItem(this.res.key, this.res.value)
        })
    }

    postLogin(credentials: Partial<{ email: string | null; password: string | null; }>) {
        this.http.post<string>('http://localhost:5167/api/Account/login', credentials)
        .subscribe(res => {
            this.res = res as any;
            localStorage.setItem(this.res.key, this.res.value)
        })

        this.router.navigate(['/'])
    }
}