import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  show(employee_id:number){   
    this.apiService.get_employee(employee_id).subscribe((data)=>{      
      if(data)
        this.router.navigate(['/dashboard/' + employee_id]);
    })
    
  }

}
