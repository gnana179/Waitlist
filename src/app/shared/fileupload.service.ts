// import { Injectable } from '@angular/core';
// import { image, User} from './user.model';
// import { Observable, throwError } from 'rxjs';
// import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

// export class FileUploadService {

//   baseURL = "http://localhost:3000/api";
//   headers = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor(private http: HttpClient) { }

//   // Get Users
//   getUserImage() {
  
//     return this.http.get<image>(`${this.baseURL}/userimage`,name);
   
//   }
 
  
//   update(profileImage: File): Observable<any> {
//     var formData: any = new FormData();
   
//    formData.append("avatar", profileImage);

//    return this.http.put<User>(`${this.baseURL}/update/id`, formData)
//      }
//      }
      
  
//   // Create User
//   // addUser(name: string, profileImage: File): Observable<any> {
//   //   var formData: any = new FormData();
//   //   formData.append("name", name);
//   //   formData.append("avatar", profileImage);

//   //   return this.http.post<image>(`${this.baseURL}/create-user`, formData, {
//   //     reportProgress: true,
//   //     observe: 'events'
//   //   })
//   // }

//   // Error handling 
// //   errorMgmt(error: HttpErrorResponse) {
// //     let errorMessage = '';
// //     if (error.error instanceof ErrorEvent) {
// //       // Get client-side error
// //       errorMessage = error.error.message;
// //     } else {
// //       // Get server-side error
// //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
// //     }
// //     console.log(errorMessage);
// //     return throwError(errorMessage);
// //   }

// // }