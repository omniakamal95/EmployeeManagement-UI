import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../api/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup = new FormGroup({});
  employeeData: any;
  editEmployee = false;
  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute,private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.employee!=null || params.employee!=undefined){
        console.log(params.employee)
        this.employeeData = JSON.parse(params.employee);
        this.editEmployee = true;
        this.setFormData();
      }
   
    })
  }
  initForm() {
    this.addEmployeeForm = this.fb.group({
      name: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
     
    })
  }
  setFormData(){
    this.addEmployeeForm.controls.name.patchValue(
      this.employeeData.name
    );
    this.addEmployeeForm.controls.departmentId.patchValue(
      this.employeeData.departmentId
    );
  
  }
  async addUser(){
    console.log(this.addEmployeeForm.value)
    let obj = {
      name: this.addEmployeeForm.value.name,
      departmentId : +this.addEmployeeForm.value.departmentId
    }
    if (this.editEmployee){

      await this.employeesService.editEmployee({id:this.employeeData.id, ...obj}).then((res:any)=>{
        {
          alert(res.message);
          this.router.navigateByUrl('employees/list');
      }
      })
    }
    else {
      await this.employeesService.addEmployee(obj).then((res:any)=>{
        {
          alert(res.message);
          this.router.navigateByUrl('employees/list');
      }
      })
    }
    }
  reload(){
    window.location.reload();
  }
}
