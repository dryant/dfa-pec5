import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryInfo } from 'src/app/models/country2.interface';
import { CurrencyInfo } from 'src/app/models/currency.interface';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  countryInfo: CountryInfo[] = [];
  countryName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const countryName = params.get('country');

      console.log(countryName);

      if (countryName) {
        this.countriesService.getCountry(countryName).subscribe((country) => {
          this.countryInfo = country as CountryInfo[];
          console.log(this.countryInfo);
        });
      }
    });
  }
  getCurrencies(country: CountryInfo): CurrencyInfo[] {
    const currencies: CurrencyInfo[] = [];
    for (const currencyCode in country.currencies) {
      if (country.currencies.hasOwnProperty(currencyCode)) {
        const currency = country.currencies[currencyCode];
        currencies.push({
          code: currencyCode,
          name: currency.name,
          symbol: currency.symbol,
        });
      }
    }
    return currencies;
  }
}
