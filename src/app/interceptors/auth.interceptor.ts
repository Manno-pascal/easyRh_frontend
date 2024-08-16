import {HttpEvent, HttpHandlerFn,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';



export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token: any = localStorage.getItem('bearer')
  if (!token) {
    return next(req)
  }

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', 'bearer '+token),
  });

  return next(reqWithHeader)
}
