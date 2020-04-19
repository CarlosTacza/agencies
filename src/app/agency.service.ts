import { Injectable } from '@angular/core';
import { Agency } from './model/agency';
import { AGENCIES } from './data/agencies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor() { }

  getAgencies(): Observable<Agency[]> {
    return of(AGENCIES);
  }

  getAgency(id: number): Observable<Agency> {
    return of(AGENCIES.find(agency => agency.id === id));
  }
  
}
