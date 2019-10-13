import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class TypeOfTodo {
    constructor(
      public id: number,
      public description: string,
      public isDone: boolean,
      public targetData: Date,
      ) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomDataService {

  constructor( private http: HttpClient) { }


  BasicAuth(username: string='user', password: string='123a' ){
    let hearderAut = 'Basic '+window.btoa(username +':'+password);
    return hearderAut;
  }


  getDataFromSprin(username: string) {
 
    return this.http.get<TypeOfTodo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteData(username: string, id: number) {
    
    let  hearderAut = this.BasicAuth();
    console.log('the herder '+hearderAut);
    let header = new HttpHeaders({
        Authorization: hearderAut
    });
    
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`,{headers: header});
  }


  getOneData(username: string, id: number) {
    return this.http.get<TypeOfTodo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTode(username: string, id: number,todo: TypeOfTodo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  addTode(username: string, todo: TypeOfTodo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
  }
 
}
