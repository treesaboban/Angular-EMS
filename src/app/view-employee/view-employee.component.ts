import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
    empId:string=''
   employee: any;
   roleName:any
   roleId:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) {}

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe((data:any)=>{
     console.log(data);//empId:1
     //this.empId=data; //"empId": "1" in html
     this.empId=data.empId; //"1" in html

     //view particular data - api call
     this.api.viewEmployee(this.empId).subscribe((data:any)=>{
      console.log(data);// data of particular employee id
      this.employee=data
      this.roleId=data.roleId//1
      //view rolename
      this.api.getRoleName(this.roleId).subscribe((data:any)=>{
        this.roleName=data.name
        console.log(this.roleName);
     })
    })
  })
}
}
