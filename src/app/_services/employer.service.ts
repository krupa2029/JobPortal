import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployerDetail } from '../_models/employer-detail.model';
import { VacancyDetail } from '../_models/vacancy-detail.model';
import { VacancyRequest } from '../_models/vacancy-request.model';

const EMP_API = 'https://localhost:5021/EmployerDetail';
const VAC_API = 'https://localhost:5021/VacancyDetail';
const VACREQ_API = 'https://localhost:5021/VacancyRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  constructor(private http: HttpClient) {}

  // list: EmployerDetail[] = [];

  getAllEmployers(): Observable<any> {
    return this.http.get(EMP_API, httpOptions);
  }

  createNewEmployer(employerDetail: EmployerDetail): Observable<any> {
    return this.http.post(EMP_API, employerDetail, httpOptions);
  }

  getEmployerById(id: any): Observable<any> {
    return this.http.get(EMP_API + `/${id}`, httpOptions);
  }

  getEmployerByEmail(email: any): Observable<any> {
    return this.http.get(EMP_API + `/getByEmail/${email}`, httpOptions);
  }

  deleteEmployerById(id: any): Observable<any> {
    return this.http.delete(EMP_API + `/${id}`, httpOptions);
  }

  updateEmployerById(id: any, employerDetail: EmployerDetail): Observable<any> {
    return this.http.put(EMP_API + `/${id}`, employerDetail, httpOptions);
  }

  //Vacancy

  getAllVacancies(
    sortBy: any,
    pageSize: number,
    pageIndex: number
  ): Observable<any> {
    return this.http.get(
      VAC_API + `?sortBy=${sortBy}&pageSize=${pageSize}&pageIndex=${pageIndex}`,
      httpOptions
    );
  }

  createNewVacancy(vacancyDetail: VacancyDetail): Observable<any> {
    return this.http.post(VAC_API, vacancyDetail, httpOptions);
  }

  getVacancyById(id: any): Observable<any> {
    return this.http.get(VAC_API + `/${id}`, httpOptions);
  }

  getVacancyByEmail(email: any): Observable<any> {
    return this.http.get(VAC_API + `/getByEmail/${email}`, httpOptions);
  }

  deleteVacancyById(id: any): Observable<any> {
    return this.http.delete(VAC_API + `/${id}`, httpOptions);
  }

  updateVacancyById(id: any, vacancyDetail: VacancyDetail): Observable<any> {
    return this.http.put(VAC_API + `/${id}`, vacancyDetail, httpOptions);
  }

  //Vacancy Request

  getAllVacancieRequests(): Observable<any> {
    return this.http.get(VACREQ_API, httpOptions);
  }

  createNewVacancyRequest(vacancyRequest: VacancyRequest): Observable<any> {
    return this.http.post(VACREQ_API, vacancyRequest, httpOptions);
  }

  getVacancyRequestById(id: any): Observable<any> {
    return this.http.get(VACREQ_API + `/${id}`, httpOptions);
  }

  getVacancyRequestByVacancyId(id: any): Observable<any> {
    return this.http.get(VACREQ_API + `/getByVacancyId/${id}`, httpOptions);
  }

  getVacancyRequestByJobSeekerEmail(email: any): Observable<any> {
    return this.http.get(
      VACREQ_API + `/getByJobSeekerEmail/${email}`,
      httpOptions
    );
  }

  getVacancyRequestByEmployerEmail(email: any): Observable<any> {
    return this.http.get(
      VACREQ_API + `/getByEmployerEmail/${email}`,
      httpOptions
    );
  }

  deleteVacancyRequestById(id: any): Observable<any> {
    return this.http.delete(VACREQ_API + `/${id}`, httpOptions);
  }

  updateVacancyRequestById(
    id: any,
    vacancyRequest: VacancyRequest
  ): Observable<any> {
    return this.http.put(VACREQ_API + `/${id}`, vacancyRequest, httpOptions);
  }

  // refreshList(){
  //   this.http.get(this.baseURL).toPromise().then(res => this.list = res as CustomerDetail[]);
  // }

  // updateEmployerById(empId: any) {
  //   return this.http.put(`${EMP_API}/${empId}`, this.formData);
  // }
}
