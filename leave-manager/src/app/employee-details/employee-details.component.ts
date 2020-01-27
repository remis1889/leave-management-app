import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee;
  employee_id;

  constructor(route: ActivatedRoute, private apiService: ApiService) {
    route.parent.params.subscribe(params => {
      this.employee_id = params['id'];
   })
  }

  ngOnInit() {
    this.apiService.get_employee(this.employee_id).subscribe((data)=>{      
      this.employee = data;
    })
  }

}
