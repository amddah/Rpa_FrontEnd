import {  Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { EmailMessage } from './email-message';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 


  
  token :string ="";

    API_URL:string ="http://localhost:8081"
  constructor(private http :HttpClient,private router:Router) { }

  getEmails():Observable<EmailMessage>{

    this.token = localStorage.getItem("token") ||" ";
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
    console.log("hello");
    
    return this.http.get<EmailMessage>(this.API_URL+"/emails",{headers})
  }
}
