import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoChartService {

constructor() { }

public getLabel(type: string, shid: string): string {
  if(type === 'hood') {
    const result = shid.split('neighborhood:')[1];
    return this.changeUnderscore(result);
  } else {
    return shid.split('tract:')[1];
  }
}

private changeUnderscore(pre: string): string {
  const result = pre.replace('_', ' ');
  if(result.includes('_')) {
    return this.changeUnderscore(result);
  }

  return result;
}

public getCommuteValue(commute: string, d: any): number {
  let result : number;
  if(commute === 'all') {
    result = d.properties["pop-commute-drive_alone"] +
    d.properties["pop-commute-drive_carpool"] +
    d.properties["pop-commute-public_transit"] +
    d.properties["pop-commute-walk"];
  } else {
    result = d.properties[`pop-commute-${commute}`];
  }
  return parseInt(result.toFixed(0));
}

}
