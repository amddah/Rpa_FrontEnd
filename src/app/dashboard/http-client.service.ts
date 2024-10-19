import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Token } from './Token';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  token :string ="";

    API_URL:string ="http://localhost:8081"
  constructor(private http :HttpClient,private router:Router) { }

  get(url:string):any{

    console.log("url "+ url);
    
    return this.http.get(this.API_URL+url)
  }

  getPrivate(url:string):Observable<User>{

    this.token = localStorage.getItem("token") ||" ";
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
   
    return this.http.get<User>(this.API_URL+url,{headers}) ;
  }

  getToken(code:string):Observable<boolean>{

    return this.http.get<Token>(this.API_URL+"/auth/callback?code="+code,{observe:"response"}).pipe(map((response: HttpResponse<Token>)=>{
      if (response.status == 200 && response.body!= null) {
        
        // this.token = response.body.token;
        localStorage.setItem("token", response.body.token);

        this.token = localStorage.getItem("token") ||" ";
        console.log(this.token);
        
        
        
        return true;
      } else {
        
        return false;
      }
    }))

  }
}
