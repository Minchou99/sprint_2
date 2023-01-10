import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getEmployees() {
    const username = 'javainuse';
    const password = 'password';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.httpClient.get<Employee[]>('http://localhost:8080/employee', {headers});
  }

  public deleteEmployee(employee) {
    const username = 'javainuse';
    const password = 'password';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.delete<Employee>('http://localhost:8080/employee' + '/' + employee.empId, {headers});
  }

  public createEmployee(employee) {
    const username = 'javainuse';
    const password = 'password';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.post<Employee>('http://localhost:8080/employee', employee, {headers});
  }
}
