import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getCountry(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }
}
