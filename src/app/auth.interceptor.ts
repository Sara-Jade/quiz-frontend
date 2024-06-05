import { DOCUMENT } from '@angular/common';
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

//@Injectable
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const document = inject(DOCUMENT);
  const storage = document.defaultView?.localStorage;
  let authToken: string | null = 'super secret fake token';
  let authReq: HttpRequest<unknown> = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });

  if (storage) {
    authToken = storage.getItem('token');
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    
    // header auth appears under lazy update or headers
    console.log(authReq.headers)
  }

  return next(authReq);
};