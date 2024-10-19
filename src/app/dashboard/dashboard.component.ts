import { Component } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ActivatedRoute } from '@angular/router';
import { User } from "./user";
import { ApiServiceService } from './api-service.service';
import { EmailMessage } from './email-message';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  name:string="";

   parts =this.name.split(" ")
  constructor( private http : HttpClientService , private route:ActivatedRoute, private apiService:ApiServiceService) {
    
    
  }
  ngOnInit(){


    this.http.getPrivate("/messages").subscribe((data:User)=>{

      this.name=data.message ;
      console.log(this.name.split(" ") );
      
      console.log(data);

      

      
      
    })

    this.apiService.getEmails().subscribe((data:EmailMessage)=>{
      console.log(data);
      
    });
  }
  
}
 