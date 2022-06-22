import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpManagementService } from './emp-management.service';
import {Employee} from "./employee"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employeeManagement';
  public employees!: Employee[];

  constructor(private empService: EmpManagementService) {}
 
    public getEmployees(): void
    {
      this.empService.getEmployees().subscribe(
        (response: Employee[]) =>  {
           this.employees= response;
        },
        (error: HttpErrorResponse) => {
         alert(error.message);
        }

        )
    }  
   
  public onAddEmployee(addForm: NgForm) : void {
    console.log(addForm.value);
     this.empService.addEmployees(addForm.value).subscribe(
       (response: Employee) => {
            console.log(response); 
            this.getEmployees();
       },
       (error: HttpErrorResponse) => {
        alert(error.message);
       }

     )
  }

  public onUpdateEmployee(updateForm: NgForm): void {
    this.empService.updateEmployees(updateForm.value).subscribe(
    (response: Employee) => { console.log(response); this.getEmployees();},
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    )
  }


  public onEmpDelete(id: number): void {
    this.empService.deleteEmployees(id).subscribe (
      (response) => { console.log(response); this.getEmployees();}, 
     (error: HttpErrorResponse) => { 
      alert(error.message);
    }
    )
  }

  
    ngOnInit(): void {
      this.getEmployees();
    }

}
