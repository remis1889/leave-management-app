import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrls: ['./leave-add.component.css']
})
export class LeaveAddComponent implements OnInit {

  isSubmitted  =  false;
  employee_id;
  leave_balance;

  addLeaveForm = new FormGroup ({
    fromDate: new FormControl(),
    toDate: new FormControl(),
    totalDays: new FormControl(),
    reason: new FormControl()
  }); 

  
  calcDifference(){
    this.addLeaveForm.patchValue({
      totalDays: this.apiService.totalDays(this.addLeaveForm.value.fromDate,this.addLeaveForm.value.toDate)
    });
  }

  createForm() {
    this.addLeaveForm = this.formBuilder.group({
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
      reason: '',
      totalDays: [{value: 0, disabled: true}, 
                  Validators.required, 
                  Validators.max(this.leave_balance),
                  Validators.min(1)]
    });
  }
  get formControls() { return this.addLeaveForm.controls; }

  

  addLeave(){    
    this.isSubmitted = true;
    if(this.addLeaveForm.invalid){
      return;
    }
    var leave = { "from": this.addLeaveForm.value.fromDate, 
              "to": this.addLeaveForm.value.toDate,
              "reason": this.addLeaveForm.value.reason,
              "employee_id": this.employee_id
            };
            
    this.apiService.add_leave(leave,this.employee_id).subscribe(data => {
      this.router.navigate(['/dashboard/' + this.employee_id + '/leave_status']);
      });
  }

  constructor(private router: Router, private formBuilder: FormBuilder, route: ActivatedRoute, private apiService: ApiService) {
    this.createForm();
    route.parent.params.subscribe(params => {
      this.employee_id = params['id'];
    })
   } 


   ngOnInit() {
    this.apiService.get_employee(this.employee_id).subscribe((data)=>{      
      this.leave_balance = data['leave_balance'];      
    })
  }

  

}
