import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClientService } from './dashboard/http-client.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpa-front';

  showHeader: boolean = true;

  showSidebar: boolean = true;

  constructor(private router: Router,private http : HttpClientService , private route:ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Vérifiez l'URL pour cacher le header
        const hiddenHeaderRoutes = ['/signup', '/login'];
        const hiddenSidebarRoutes = ['/dashboard'];

        this.showHeader = !hiddenHeaderRoutes.includes(event.urlAfterRedirects);

        this.showSidebar = !event.urlAfterRedirects.startsWith('/dashboard');
      }
    });
  }

  
    
    
   
  ngOnInit(){
    
    
    this.route.queryParams.subscribe(params=>{
       if(params["code"] !== undefined){
        console.log("code"+params["code"]);
        localStorage.setItem("token",params["code"]);

        this.http.getToken(params["code"]).subscribe(result=>{
          if (result ==true) {
            this.router.navigateByUrl("/dashboard");
             
          } else {
            console.log("public content");
            
          }
        })
       }
    })
  }
  
}
