import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipement.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private url: string = environment.apiUrl + "/equipment";

  constructor(private _http: HttpClient) { }

  getEquipments(): Observable<Equipment[]> {
    return this._http.get<Equipment[]>(this.url)
  }

  getEquipmentById(id: string): Observable<Equipment> {
    return this._http.get<Equipment>(this.url + "/" + id)
  }

  saveEquipment(equipment: Equipment): Observable<Equipment> {
    return this._http.post<Equipment>(this.url, equipment);
  }

  addPlayerToEquipment(player: Equipment, equipment_id: string): Observable<Equipment> {
    return this._http.put<Equipment>(this.url + "/" + equipment_id + "/add/player", player);
  }

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    return this._http.put<Equipment>(this.url, equipment);
  }

  deleteEquipment(id: string): Observable<Equipment> {
    return this._http.delete<Equipment>(this.url + "/" + Number(id));
  }

  deletePlayerFromEquipment(player_id: string, equipment_id: string): Observable<Equipment> {
    return this._http.delete<Equipment>(this.url + "/" + equipment_id + "/delete/player/" + player_id);
  }

  searchBy(search: string): Observable<Equipment[]> {
    return this._http.get<Equipment[]>(this.url + "/search/" + search);
  }
}
