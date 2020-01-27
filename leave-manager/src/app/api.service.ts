import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  totalDays (from, to){
    var from_date = new Date(from).valueOf();
    var to_date = new Date(to).valueOf();
    return (to_date - from_date) / (1000 * 3600 * 24);
  }
  
  API_URL : string = "http://localhost:3000/employees/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  get_employee(employee_id) {
    return this.httpClient.get(this.API_URL + employee_id + ".json");
  }

  get_leave_list(employee_id){
    return this.httpClient.get(this.API_URL + employee_id + "/leave_applications.json")
  }
  
  get_request_list(employee_id){
    return this.httpClient.get(this.API_URL + employee_id + "/new_requests.json")
  }

  add_leave (leave_application, employee_id) {
    return this.httpClient.post(this.API_URL + employee_id + "/leave_applications", leave_application, this.httpOptions)
  }

  edit_leave(message, id, employee_id) {
    return this.httpClient.put(this.API_URL + employee_id + "/leave_applications/" + id, message, this.httpOptions)
  }
}



