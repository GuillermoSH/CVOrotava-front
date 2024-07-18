import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private url: string = environment.apiUrl + '/players';

  constructor(private _http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>(this.url);
  }

  getPlayersOrderBy(order: string): Observable<Player[]> {
    return this._http.get<Player[]>(this.url + "/orderedBy/" + order);
  }

  getPlayersByCategory(category: string): Observable<Player[]> {
    return this._http.get<Player[]>(this.url + `/${category}`);
  }

  getPlayerById(id: string): Observable<Player> {
    return this._http.get<Player>(this.url + `/${id}`);
  }

  getTotalNumPlayers(): Observable<string[]> {
    return this._http.get<string[]>(this.url + "/total");
  }

  savePlayer(player: Player): Observable<Player> {
    return this._http.post<Player>(this.url + "/save", player);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this._http.put<Player>(this.url, player);
  }

  deletePlayer(id: string): Observable<Player> {
    return this._http.delete<Player>(this.url + `/${id}`);
  }

  deleteAll() {
    return this._http.delete(this.url);
  }

  searchBy(search: string): Observable<Player[]> {
    return this._http.get<Player[]>(this.url + "/search/" + search);
  }
}
