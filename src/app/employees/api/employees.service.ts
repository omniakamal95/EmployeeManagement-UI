import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = "https://localhost:44385/api";
  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(`${this.baseUrl}/Employees/GetAllEmployees`).toPromise();
  }
  addEmployee(employee:any){
    return this.http.post(`${this.baseUrl}/Employees/AddEmployee`,employee).toPromise();
  }
  editEmployee(employee:any){
    return this.http.post(`${this.baseUrl}/Employees/UpdateEmployee`,employee).toPromise();
  }
  deleteEmployee(employeeId:number){
    return this.http.delete(`${this.baseUrl}/Employees/DeleteEmployee?Id=${employeeId}`).toPromise();

  }
}
