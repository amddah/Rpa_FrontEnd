import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabComponentComponent } from './dashboard/tab-component/tab-component.component';

const routes: Routes = [

  {
    path: 'dashboard',  // Parent route
    component: DashboardComponent,
    children: [
      {
        path: 'tab', // Child route
        component: TabComponentComponent
      }
    ]
  },
  {path:"", component:HeroSectionComponent},
   {path:"signup", component:SingUpComponent},
   {path:"login", component:LoginComponent},
  // {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
