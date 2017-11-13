import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Interface/IEmployee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-count/employee-service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  statusMessage:string;


  constructor(private _employeeService : EmployeeService,private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {

    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeeByCode(empCode).subscribe(

      (employeeData) => {
        if(employeeData == null){
          this.statusMessage = "Employee with specific data not exists.";
        }else{
          this.employee = employeeData;
        }
        
      },
      (error) => { 
        this.statusMessage = "Some problem occured while getting information.";
        console.log(error);
      }
    )
  }

  onBackButtonClick():void{
this._router.navigate(['/employees']);
  }

}
