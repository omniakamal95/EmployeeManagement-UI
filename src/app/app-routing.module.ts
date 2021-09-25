import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from './employees/employees.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then(
        (m) => m.EmployeesModule
      ),
  },
  {
    path: '',
   redirectTo: 'employees',
   pathMatch: 'full',
  },
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
    ],
})
export class AppRoutingModule { }
