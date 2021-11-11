import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  name = "abcd"
  pass = "abcd"
   constructor(
      private httpClient: HttpClient,
      private router: Router
   ) {
   }
   //this is for basic authentication and authorization of recruiter. 
   authenticate(user: any) {
    let username = 'abcd'
    let password = 'abcd'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( password) });
    return this.httpClient.post<any>("http://localhost:8081/api/adminid", user, { headers });
   }
}
