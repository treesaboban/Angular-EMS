import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {
  //display system date and time
  loginDate:any;
  searchKey:string=''
  p: number = 1; 
  // heading='Employee Details'
  //for string interpolaton
  // allEmployee:any - 1 method
  allEmployee:Employee[]=[] //2nd method(model class is used and empty array is assigned)
constructor(private api:ApiService)
{
   this.loginDate=new Date()
}
  ngOnInit(): void {
    // this.api.getAllEmployee().subscribe((data:any)=>{
    //   console.log(data);//array(5)
    //   this.allEmployee=data
    // })
    this.getAllEmployee()
  }
  getAllEmployee()
  {
     this.api.getAllEmployee().subscribe((data:any)=>{
      console.log(data);//array(5)
      this.allEmployee=data
    })
  }
  search(event:any)
  {
     this.searchKey=event.target.value
     console.log(this.searchKey);
     
  }
  deleteEmployee(empId:any)
  {
    
      if(confirm("Are you sure ?"))
      {
        this.api.deleteEmployee(empId).subscribe((data:any)=>{
        alert('successfully deleted!!')
        this.getAllEmployee()
      })
      } 
  }
}
