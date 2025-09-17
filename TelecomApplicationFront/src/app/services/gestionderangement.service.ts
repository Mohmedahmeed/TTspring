import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Derangement } from '../models/Derangement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionderangementService {
  private baseUrl = "http://localhost:8081/telecomapplication/derangement";

  constructor(private httpClient: HttpClient) { }


  createDerangement(derangement: Derangement, idSiteRadio: number): Observable<Derangement> {
    const url = `${this.baseUrl}/createderangement/${idSiteRadio}`;
    return this.httpClient.post<Derangement>(url, derangement);
  }
 

  getAllDerangements(): Observable<Derangement[]> {
    const url = `${this.baseUrl}/getderangement`;
    return this.httpClient.get<Derangement[]>(url);
  }

  updateDerangement(id: number, derangement: Derangement): Observable<Derangement> {
    return this.httpClient.put<Derangement>(`${this.baseUrl}/updatederangement/${id}`, derangement);
  }
  getDerangementById(idDerangement: number): Observable<Derangement> {
    return this.httpClient.get<Derangement>(`${this.baseUrl}/getderangement/${idDerangement}`);
  }
}
