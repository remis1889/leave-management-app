import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveAddComponent } from './leave-add/leave-add.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent } from "./login/login.component";
import { LeaveListComponent } from "./leave-list/leave-list.component";
import { RequestListComponent } from "./request-list/request-list.component";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard/:id', component: DashboardComponent,
    children: [
      {
        path:'details', 
        component: EmployeeDetailsComponent        
      },
      {
        path:'new_application', 
        component: LeaveAddComponent        
      },
      {
        path:'leave_status', 
        component: LeaveListComponent        
      },
      {
        path:'leave_requests', 
        component: RequestListComponent        
      }

    ]
  },
  {path: '**', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
