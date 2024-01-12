import { Component, OnInit } from '@angular/core';

interface CountryInfo {
  name: string;
  coatOfArms: string;
  continent: string;
  flag: string;
  currency: string;
  symbolCurrency: string;
  language: string;
  capital: string;
  population: number;
  area: string;
}

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  countryInfo: CountryInfo = {
    name: '',
    coatOfArms: '',
    continent: '',
    flag: '',
    currency: '',
    symbolCurrency: '',
    language: '',
    capital: '',
    population: 0,
    area: '',
  };

  constructor() {}

  ngOnInit(): void {
    // Asigna los valores de prueba a countryInfo
    this.countryInfo = {
      name: 'Spain',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/es.svg',
      continent: 'Europe',
      flag: 'https://flagcdn.com/es.svg',
      currency: 'Euro',
      symbolCurrency: '€',
      language: 'Spanish',
      capital: 'Madrid',
      population: 47000000,
      area: '505990',
    };
  }
}
