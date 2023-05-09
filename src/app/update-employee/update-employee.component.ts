import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { Role } from 'src/model/role';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empId:string=''
  employee:Employee={}
  role:Role[]=[]
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {}
  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);
      this.empId=data.Id
      //call an api for getting particular employee details
      this.api.viewEmployee(this.empId).subscribe((data:any)=>{
        console.log(data); //paricular employee details
        this.employee=data
      //call an api for getting all role details
        this.api.getAllRoles().subscribe((data:any)=>{
          console.log(data);
          this.role=data
        })
      })
      
    })
  }
  updateEmployee()
  {
    this.api.updateEmployee(this.empId,this.employee).subscribe((data:any)=>{
      alert('employee updated succesfully!')
    this.route.navigateByUrl('')
    })
  }
}
