import {Component, OnInit} from '@angular/core';
import {Employee, HttpClientService} from '../service/httpclient.service';

@Component({
  selector: 'app-app-employee',
  templateUrl: './app-employee.component.html',
  styleUrls: ['./app-employee.component.css']
})
export class AppEmployeeComponent implements OnInit {
  user: Employee = new Employee('', '', '', '');

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
      .subscribe(data => {
        alert('Employee created successfully.');
      });

  }
}
