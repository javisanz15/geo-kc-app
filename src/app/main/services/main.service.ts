import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

constructor(
  private httpClient: HttpClient,
) { }

public getKCNeighbourhoods(): Observable<any> {
  return this.httpClient.get('./assets/geo-data/kc-neighbourhoods.json');
}

public getKCTracts(): Observable<any> {
  return this.httpClient.get('./assets/geo-data/kc-tracts.json');
}


}
