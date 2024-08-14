import {HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";


export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log("bon")
  const token: any = localStorage.getItem('bearer')
  console.log(req.headers)
  if (!token) {
    return next(req)
  }

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'bearer '+token),
  });

  return next(reqWithHeader)
}
