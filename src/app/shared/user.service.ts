import { Injectable } from '@angular/core';
import { User, image } from './user.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    avatar:'',
    ref:'',
    frndref:'',
  };
  constructor(private http: HttpClient) { }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  postUser(user: User){
   
    return this.http.post(environment.apiBaseUrl +'/register',user);
    
  }

  update(profileImage: File): Observable<any> {
    var formData: any = new FormData();
   console.log(profileImage)
   formData.append("avatar", profileImage);
   
   return this.http.post<image>(environment.apiBaseUrl+'/userupdate', formData,)
  } 
  position(user: User){
    return this.http.post(environment.apiBaseUrl +'/position',user);
  }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl +'/authenticate', authCredentials,this.noAuthHeader);
  }

 setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl+'/userProfile');
  }
  getall() {
    return this.http.get(environment.apiBaseUrl+'/getall');
  }
 
 
}
