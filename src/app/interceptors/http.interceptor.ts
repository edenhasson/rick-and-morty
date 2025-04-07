import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // You can modify the request here if needed, for example adding headers
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer your-token-here',
      },
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }
}
