import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  //viacep

  urlGetAddressByCep = 'http://127.0.0.1:8000/viacep/getaddressbycep';
  urlSearchcep= 'http://127.0.0.1:8000/viacep/searchcep';

  //users
  urlCreateUsers = 'http://127.0.0.1:8000/user/create';
  urlListallUsers = 'http://127.0.0.1:8000/user/listall';
  urlGetSingleUsers = 'http://127.0.0.1:8000/user';
  urlDeleteUsers = 'http://127.0.0.1:8000/user/delete'
  urlUpdateUsers = 'http://127.0.0.1:8000/user/update'

  getAddressByCep(data:any):Observable<any>{
    return this.http.post(`${this.urlGetAddressByCep}`,data);
  }

  searchcep(data:any):Observable<any>{
    return this.http.post(`${this.urlSearchcep}`,data);
  }

  createUsers(data:any):Observable<any>{
    return this.http.post(`${this.urlCreateUsers}`,data);
  }

  listAllUsers():Observable<any>{
    return this.http.get(`${this.urlListallUsers}`);
  }

  getSingleUsers(id:any):Observable<any>{
    return this.http.get(`${this.urlGetSingleUsers}/${id}`);
  }

  deleteUsers(id:any):Observable<any>{
    return this.http.delete(`${this.urlDeleteUsers}/${id}`);
  }
  
  updateUsers(data:any,id:any):Observable<any>{
    return this.http.put(`${this.urlUpdateUsers}/${id}`,data);
  }
  
}
