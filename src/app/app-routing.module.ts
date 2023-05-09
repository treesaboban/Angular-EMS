import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  //array of objects
  //path:''-default path localhost:4200
  //localhost://4200
  {
   path:'',redirectTo:'ems/admin',pathMatch:'full'
  },
  //localhost://4200/ems/admin
  {
    path:'ems/admin',component:EmployeeManagerComponent
  },
  //localhost://4200/ems/add
  {
    path:'ems/add',component:AddEmployeeComponent
  },
  //localhost://4200/ems/update
  {
    path:'ems/update/:Id',component:UpdateEmployeeComponent
  },
  //localhost://4200/ems/view
  {
    path:'ems/view/:empId',component:ViewEmployeeComponent
  },
  {//localhost://4200/ems/pageNotFound
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
