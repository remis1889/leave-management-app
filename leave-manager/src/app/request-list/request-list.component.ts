import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  employee_id;  
  request_list;

  displayedColumns: string[] = ['employee_id', 'from', 'to', 'total_days', 'approve', 'decline'];

  constructor(private router: Router, route: ActivatedRoute, private apiService: ApiService) {
    route.parent.params.subscribe(params => {
      this.employee_id = params['id'];
   })
  }

  update_status(id,emp_id, update_status){
    var update_message = {status: update_status}
    this.apiService.edit_leave(update_message,id,emp_id).subscribe(data => {
      this.router.navigate(['/dashboard/' + this.employee_id + '/leave_requests']).then(() => {
        window.location.reload();
      });
    });
   } 

  ngOnInit() {
    this.apiService.get_request_list(this.employee_id).subscribe((data)=>{      
      this.request_list = data;
      console.log(data);
    })
    this.apiService.get_employee(this.employee_id).subscribe((data)=>{                  
      console.log(data);
    })
  }

}
