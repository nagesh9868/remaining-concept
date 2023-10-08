import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { TopMidBottomService } from '../services/top-mid-bottom.service';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {
  empList: any
  constructor() { 
    this.empList = [
      { code: 'emp101', name: 'Nagesh', gender: 'male', annualSalary: '144000', dateOfBirth: '01/04/1992' },
      { code: 'emp102', name: 'Ram', gender: 'male', annualSalary: '12000', dateOfBirth: '01/04/1986' },
      { code: 'emp103', name: 'Saroj', gender: 'Female', annualSalary: '32000', dateOfBirth: '01/04/1934' },
      { code: 'emp104', name: 'Sudhanshu', gender: 'male', annualSalary: '54000', dateOfBirth: '01/04/1923' }
    ]
  }
  getEmployeeList(): void {
    this.empList = [
      { code: 'emp101', name: 'Nagesh', gender: 'male', annualSalary: '144000', dateOfBirth: '01/04/1992' },
      { code: 'emp102', name: 'Ram', gender: 'male', annualSalary: '12000', dateOfBirth: '01/04/1986' },
      { code: 'emp103', name: 'Saroj', gender: 'Female', annualSalary: '32000', dateOfBirth: '01/04/1934' },
      { code: 'emp104', name: 'Sudhanshu', gender: 'male', annualSalary: '5400', dateOfBirth: '01/04/1923' },
      { code: 'emp105', name: 'Suresh', gender: 'male', annualSalary: '55000', dateOfBirth: '01/04/19978' },
    ]
  }
  trackByEmpCode(index: number, employee: any){
    return employee.code
  }


  ngOnInit(): void {

    console.log(4+'2');
    
  }

}
