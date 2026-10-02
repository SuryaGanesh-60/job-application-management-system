import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = 'http://localhost:8080/applications';

  constructor(private http: HttpClient) {
  }

  // GET all applications
  getApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET application by ID
  getApplicationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // CREATE application
  createApplication(application: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, application);
  }

  // UPDATE application
  updateApplication(id: number, application: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${id}`,
      application
    );
  }

  // DELETE application
  deleteApplication(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}