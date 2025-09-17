import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteRadio } from '../models/SiteRadio.model';
import { TypeSiteRadio } from '../models/TypeSiteRadio.model';

@Injectable({
  providedIn: 'root'
})
export class GestionsiteradioService {
  private apiUrl = "http://localhost:8081/telecomapplication/siteradio";

  constructor(private httpClient: HttpClient) { }
  

  getSiteRadio(): Observable<SiteRadio[]>{
return this.httpClient.get<SiteRadio[]>(`${this.apiUrl}/getSiteRadio`);
  }

  CreateSiteRadio(siteradio:SiteRadio): Observable<SiteRadio> {
    return this.httpClient.post<SiteRadio>(`${this.apiUrl}/createSiteRadio`, siteradio);
  }

  // Méthode pour mettre à jour un SiteRadio
  updateSiteRadio(idSiteRadio: number, siteRadio: SiteRadio): Observable<SiteRadio> {
    return this.httpClient.put<SiteRadio>(
      `${this.apiUrl}/updateSiteRadio/${idSiteRadio}`, siteRadio
    );
  }

  // Méthode pour récupérer un SiteRadio par ID (pour l'édition)
  getSiteRadioById(idSiteRadio: number): Observable<SiteRadio> {
    return this.httpClient.get<SiteRadio>(`${this.apiUrl}/getSiteRadio/${idSiteRadio}`);
  }
  deleteProjet(idSiteRadio: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/DeleteSiteRadio/${idSiteRadio}`);
  }
  getSiteRadioForAntenne(idAntenne: number): Observable<SiteRadio> {
    return this.httpClient.get<SiteRadio>(`${this.apiUrl}/siteradio/${idAntenne}`);
  }
  getSiteRadioForTransmission(idTransmission: number): Observable<SiteRadio> {
    return this.httpClient.get<SiteRadio>(`${this.apiUrl}/siteradioo/${idTransmission}`);
  }
  searchSiteRadio(typeSite: TypeSiteRadio): Observable<SiteRadio[]> {
    return this.httpClient.get<SiteRadio[]>(`${this.apiUrl}/search`, { params: { typeSite: typeSite } });
  }

  exportSiteRadioData(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(`${this.apiUrl}/export-pdf`, { headers, responseType: 'blob' });
  }
}

