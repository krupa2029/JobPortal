import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployerDetail } from '../_models/employer-detail.model';
import { VacancyDetail } from '../_models/vacancy-detail.model';

const EMP_API = 'https://localhost:5021/EmployerDetail';
const VAC_API = 'https://localhost:5021/VacancyDetail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployerService {

  constructor(private http: HttpClient) { }

  
  // formData: EmployerDetail = new EmployerDetail();
  list : EmployerDetail[] = [];


  getAllEmployers(): Observable<any> {
    return this.http.get(EMP_API,httpOptions);
  }

  createNewEmployer(employerDetail :EmployerDetail): Observable<any> {
    return this.http.post(EMP_API,employerDetail,httpOptions);
  }

  getEmployerById(id: any): Observable<any> {
    return this.http.get(EMP_API + `/${id}`,httpOptions);
  }

  getEmployerByEmail(email: any): Observable<any> {
    return this.http.get(EMP_API + `/getByEmail/${email}`,httpOptions);
  }
  
  deleteEmployerById(id: any): Observable<any> {
    return this.http.delete(EMP_API + `/${id}`,httpOptions);
  }

  updateEmployerById(id: any, employerDetail : EmployerDetail): Observable<any> {
    return this.http.put(EMP_API + `/${id}`, employerDetail,httpOptions);
  }

//Vacancy
  
  getAllVacancies(): Observable<any> {
    return this.http.get(VAC_API,httpOptions);
  }

  createNewVacancy(vacancyDetail :VacancyDetail): Observable<any> {
    return this.http.post(VAC_API,vacancyDetail,httpOptions);
  }

  getVacancyById(id: any): Observable<any> {
    return this.http.get(VAC_API + `/${id}`,httpOptions);
  }

  getVacancyByEmail(email: any): Observable<any> {
    return this.http.get(VAC_API + `/getByEmail/${email}`,httpOptions);
  }
  
  deleteVacancyById(id: any): Observable<any> {
    return this.http.delete(VAC_API + `/${id}`,httpOptions);
  }

  updateVacancyById(id: any, vacancyDetail : VacancyDetail): Observable<any> {
    return this.http.put(VAC_API + `/${id}`, vacancyDetail,httpOptions);
  }


  
  // refreshList(){
  //   this.http.get(this.baseURL).toPromise().then(res => this.list = res as CustomerDetail[]);
  // }

  // updateEmployerById(empId: any) {
  //   return this.http.put(`${EMP_API}/${empId}`, this.formData);
  // }

 
}
