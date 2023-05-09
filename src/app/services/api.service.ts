import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:3200/employee'
  //function to get all employee details
  getAllEmployee():Observable<Employee>
  {
    return this.http.get(this.baseUrl)
  }
  //api call to fetch a particular contact
  viewEmployee(empId:any)
  {
    //http://localhost:3200/employee/1
    return this.http.get(`${this.baseUrl}/${empId}`)
  }

  //api call for fetching role name
  getRoleName(roleId:any)
  {
    return this.http.get(' http://localhost:3200/role/'+roleId)
  }
   //function to fetch all groups from http://localhost:3200/role
   getAllRoles()
   {
      return this.http.get('http://localhost:3200/role/')
   }

  //function for adding new employee to server
  addEmployee(employeeBody:any)
  {
        return this.http.post(this.baseUrl,employeeBody)
  }
  //function for deleting an employee from server
  deleteEmployee(empId:any)
  {
    return this.http.delete(`${this.baseUrl}/${empId}`)
  }
 //function for updating an existing employee
 updateEmployee(empId:any,employeeBody:any)
 {
  return this.http.put(`${this.baseUrl}/${empId}`,employeeBody)
 }
}

