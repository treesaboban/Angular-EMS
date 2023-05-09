import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  // emp_code:any;
  allRoles:any[]=[];
  employee:Employee={}
constructor(private api:ApiService,private route:Router) {}
  ngOnInit(): void {
    this.api.getAllRoles().subscribe((data:any)=>{
      console.log(data);//array(5)
      this.allRoles=data
    })
  }
   //add new employee
   addEmployee()
   {
    this.api.addEmployee(this.employee).subscribe((data:any)=>{
      alert('new employee added successfully!')
      this.route.navigateByUrl('') //render to admin page(employee-manager)
    })
   }
}
