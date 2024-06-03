import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  let authToken: string | null = 'super secret fake token';
  let authReq: HttpRequest<unknown> = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });

  if (localStorage) {
    authToken = localStorage.getItem('token');
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    
    // header auth appears under lazy update or headers
    console.log(authReq.headers)
  }

  return next(authReq);
};