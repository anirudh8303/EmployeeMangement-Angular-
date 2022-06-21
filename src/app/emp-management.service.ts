import { HttpClient, HttpResponse } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from "./employee"

@Injectable({
  providedIn: 'root'
})
export class EmpManagementService {
  private apiServiceUrl='http://localhost:8080/employeemanagement';
  constructor(private http: HttpClient) {

  }

  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/getList`)
  }

  
  public addEmployees(employee: Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/addEmployee`, employee);
  }

  public updateEmployees(employee: Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/updateEmployee`, employee);
  }

  public deleteEmployees(id: number) : Observable<Object> {
    let obj= { 
       "sent_id": id
      
    };
    
    return this.http.post<Object>(`${this.apiServiceUrl}/employee/deleteEmployee`, obj);
  }

}
