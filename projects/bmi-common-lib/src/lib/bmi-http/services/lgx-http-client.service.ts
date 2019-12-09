import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LgxHttpClientService {
  constructor(private http: HttpClient) { }

  get = <T>(endpoint: string, options?: { params?: any; responseType?: any }) => this.http.get<T>(endpoint, options);
}
