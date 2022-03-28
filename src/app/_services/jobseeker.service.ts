import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../_models/experience.model';
import { JobSeekerDetail } from '../_models/job-seeker-detail.model';
import { Qualification } from '../_models/qualification.model';

const JSK_API = 'https://localhost:5021/JobSeekerDetail';
const QUA_API = 'https://localhost:5021/Qualifications';
const EXP_API = 'https://localhost:5021/Experience';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  constructor(private http: HttpClient) { }

 
  createNewJobSeekerProfile(jobSeekerDetail :JobSeekerDetail): Observable<any> {
    return this.http.post(JSK_API,jobSeekerDetail,httpOptions);
  }

  getJobSeekerById(id: any): Observable<any> {
    return this.http.get(JSK_API + `/getById/${id}`,httpOptions);
  }

  getJobSeekerByEmail(email: any): Observable<any> {
    return this.http.get(JSK_API + `/getByEmail/${email}`,httpOptions);
  }
  
  deleteJobSeekerById(id: any): Observable<any> {
    return this.http.delete(JSK_API + `/${id}`,httpOptions);
  }

  updateJobSeeker(email: any, jobSeekerDetail : JobSeekerDetail): Observable<any> {
    return this.http.put(JSK_API + `/${email}`, jobSeekerDetail,httpOptions);
  }

  // Qualifications

  getAllQualifications(): Observable<any> {
    return this.http.get(QUA_API,httpOptions);
  }

  createNewQualification(qualification : Qualification): Observable<any> {
    return this.http.post(QUA_API,qualification,httpOptions);
  }

  getQualificationById(id: any): Observable<any> {
    return this.http.get(QUA_API + `/getById/${id}`,httpOptions);
  }

  getQualificationByEmail(email: any): Observable<any> {
    return this.http.get(QUA_API + `/getByEmail/${email}`,httpOptions);
  }
  
  deleteQualificationById(id: any): Observable<any> {
    return this.http.delete(QUA_API + `/${id}`,httpOptions);
  }

  updateQualificationById(id: any, qualification : Qualification): Observable<any> {
    return this.http.put(QUA_API + `/${id}`, qualification,httpOptions);
  }

  

  //Experience
  
  getAllExperiences(): Observable<any> {
    return this.http.get(EXP_API,httpOptions);
  }

  createNewExperience(experience : Experience): Observable<any> {
    return this.http.post(EXP_API,experience,httpOptions);
  }

  getExperienceById(id: any): Observable<any> {
    return this.http.get(EXP_API + `/getById/${id}`,httpOptions);
  }

  getExperienceByEmail(email: any): Observable<any> {
    return this.http.get(EXP_API + `/getByEmail/${email}`,httpOptions);
  }
  
  deleteExperienceById(id: any): Observable<any> {
    return this.http.delete(EXP_API + `/${id}`,httpOptions);
  }

  updateExperienceById(id: any, experience : Experience): Observable<any> {
    return this.http.put(EXP_API + `/${id}`, experience,httpOptions);
  }

}
