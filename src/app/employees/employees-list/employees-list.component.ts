import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from '../api/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
 
  employeesList : any;
  deletedEmpployeeId :any;
  constructor(private employeesService: EmployeesService,private router: Router,private modal: NgbModal,) { }

  ngOnInit(): void {
    this.getAllEmployees();
    
  }
  async getAllEmployees(){
    var result : any = await this.employeesService.getAllEmployees();
    this.employeesList = result?.returnObjectList;
    console.log(this.employeesList);
  }
  editEmployee(employee:any){
    this.router.navigate([`employees/edit-employee`], {
      queryParams: {
      employee:JSON.stringify(employee)
      }
  })
  }

  openDetails(content:any, size? :any, employeeId?: number) {
   this.deletedEmpployeeId = employeeId;
    this.modal.open(content, { size: size });
  }
  async deleteEmployee(id:number){
    console.log('here')
    await this.employeesService.deleteEmployee(id);
    window.location.reload();
  }
  clickMethod(name: string, id:number) {
    if(confirm("Are you sure you want to delete "+name+ "?")) {
      console.log("Implement delete functionality here");
      this.deleteEmployee(id)
    }
  }
}
