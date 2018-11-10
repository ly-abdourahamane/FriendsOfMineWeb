import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  baseUrl: string = environment.API_URL;

  constructor(private _http: HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this._http.get<Utilisateur[]>(`${this.baseUrl}utilisateurs`);
  }

  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this._http.post<Utilisateur>(`${this.baseUrl}utilisateurs/new`, utilisateur);
  }
}
