import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private url: string = environment.apiUrl + "/configurations";

  constructor(private _http: HttpClient) { }

  getConfiguration(): Observable<Configuration[]> {
    return this._http.get<Configuration[]>(this.url);
  }

  saveConfiguration(configuration: Configuration): Observable<Configuration> {
    return this._http.put<Configuration>(this.url, configuration);
  }

  deleteConfiguration(): Observable<Configuration> {
    return this._http.delete<Configuration>(this.url);
  }
}
