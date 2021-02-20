import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocations(location: string): Observable<any> {
    let url = `/api/location/search/?query=${location}`;
    return this.http.get(url)
  }

  getWeather(woeid: number|string): Observable<any> {
    let url = `/api/location/${woeid}/`;
    return this.http.get(url)
  }
}
