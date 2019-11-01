import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    const url = `https://api.github.com`;
    return this.http.get(url);
  }
}
