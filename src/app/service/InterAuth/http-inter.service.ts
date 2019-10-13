import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpInterService implements  HttpInterceptor{
  constructor(public usernameCon :string = 'user', public passwordCon: string='123a') { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = 'user';
    let password = '123a';
    let hearderAut = 'Basic '+window.btoa(username +':'+password);
      req = req.clone({
          setHeaders: {
            Authorization: hearderAut
          }
      });

    return next.handle(req);
  }

  
}
