import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  private targetUrl = 'http://universities.hipolabs.com/search?country=United+States';
  private url = `${this.corsAnywhereUrl}${this.targetUrl}`;

  constructor(private httpClient: HttpClient) { }

  getUniversities(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
