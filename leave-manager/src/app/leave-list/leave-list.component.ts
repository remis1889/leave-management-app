import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  employee_id;
  leave_list;  
  status_text = ['Pending', 'Approved', 'Declined'];
  displayedColumns: string[] = ['from', 'to', 'total_days', 'status'];

  constructor(route: ActivatedRoute, private apiService: ApiService) {
    route.parent.params.subscribe(params => {
      this.employee_id = params['id'];
   })
  }

  ngOnInit() {
    this.apiService.get_leave_list(this.employee_id).subscribe((data)=>{      
      this.leave_list = data;
      console.log(data);
    })
  }
}
