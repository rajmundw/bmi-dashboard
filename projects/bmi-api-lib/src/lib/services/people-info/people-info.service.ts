import { Injectable } from '@angular/core';
import { enpoints, LgxHttpClientService } from 'bmi-common-lib';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonalInfoService {
  constructor(private http: LgxHttpClientService) { }

  loadPersonalInfo$ = (): Observable<any> => this.http.get(enpoints.getPeopleDetal);
}
