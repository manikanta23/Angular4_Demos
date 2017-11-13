import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Interface/IEmployee';
import { EmployeeService } from '../employee-count/employee-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [EmployeeService]
})
export class HomeComponent implements OnInit {
    employees: IEmployee[];
    //employee:IEmployee;
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,private _activatedRoute:ActivatedRoute) { }

    ngOnInit() {
             
            this._employeeService.getEmployees()
                .subscribe(
                employeesData => this.employees = employeesData,
                error => {
                    console.error(error);
                    this.statusMessage = 'Problem with the service. Please try again after sometime';
                });


            // let empCode: string = this._activatedRoute.snapshot.params['code'];
            // this._employeeService.getEmployeeByCode(empCode)
            //     .subscribe((employeeData) => {
            //         if (employeeData == null) {
            //             this.statusMessage =
            //                 'Employee with the specified Employee Code does not exist';
            //         }
            //         else {
            //             this.employee = employeeData;
            //         }
            //     },
            //     (error) => {
            //         this.statusMessage =
            //             'Problem with the service. Please try again after sometime';
            //         console.error(error);
            //     });
    
    }
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}