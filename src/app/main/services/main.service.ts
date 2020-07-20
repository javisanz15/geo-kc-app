import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

constructor(
  private httpClient: HttpClient,
) { }

public getKCNeighbourhoods(): Observable<any> {
  return this.httpClient.get('./assets/geo-data/kc-neighborhoods.json');
}

public getKCTracts(): Observable<any> {
  return this.httpClient.get('./assets/geo-data/kc-tracts.json');
}

public getMaps(map: string): Observable<any> {
  return map === 'hood' ? this.getKCNeighbourhoods() : this.getKCTracts();
}


}
