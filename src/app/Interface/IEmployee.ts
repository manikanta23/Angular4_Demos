//Interface declaration
export interface IEmployee
{
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;  
   // computeMonthlySalary(annualSalary:number):number;
}

// //Class implements interface
// export class Employee implements IEmployee
// {
//     // public code: string;
//     // public name: string;
//     // public gender: string;
//     // public annualSalary: number;
//     // public dateOfBirth: string;

//     // constructor(code: string, name: string, gender: string,
//     //     annualSalary: number, dateOfBirth: string) {
//     //     this.code = code;
//     //     this.name = name;
//     //     this.gender = gender;
//     //     this.annualSalary = annualSalary;
//     //     this.dateOfBirth = dateOfBirth;
//     // }

//     constructor(public code: string, public name: string, public gender: string,
//         public annualSalary: number, public dateOfBirth: string) {
//     }
//     computeMonthlySalary(annualSalary: number): number {
//         return annualSalary / 12;
//     }

// }
