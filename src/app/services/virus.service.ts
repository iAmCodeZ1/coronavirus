import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirusService {

  constructor(private http: HttpClient) { }

  getCases(): Observable<any> {
    return this.http.get('virus');
  }

}
