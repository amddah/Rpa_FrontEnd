import { Component } from '@angular/core';
import { HttpClientService } from '../dashboard/http-client.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {


  url:string ="";
  constructor(private http:HttpClientService) {
     
    
  }
  
  ngOnInit(){
    console.log("hello from su");
    this.http.get("/auth/url").subscribe((data:any)=>{
      this.url = data.url;
      console.log("hello from su");
      
    })
  }
}
