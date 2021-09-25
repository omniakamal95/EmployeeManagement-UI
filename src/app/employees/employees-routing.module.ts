import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {
      path: 'list',
      component: EmployeesListComponent,
  },
  {
    path:'add-employee',
    component: AddEmployeeComponent
  },
  {
    path:'edit-employee',
    component: AddEmployeeComponent
  },
  {
    path: '',
    component: EmployeesListComponent,
},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
