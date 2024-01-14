import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { CountryInfo } from 'src/app/models/country2.interface';
import { CurrencyInfo } from 'src/app/models/currency.interface';
import { CountriesService } from 'src/app/services/countries.service';
// Remove the following import statement
// import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class CardDetailsComponent implements OnInit {
  countryInfo: CountryInfo[] = [];
  countryName: string | undefined;
  languages: string[] = [];
  loading = false;
  panelOpenState = false;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loading = true;
      const countryName = params.get('country');

      console.log(countryName);

      if (countryName) {
        this.countriesService.getCountry(countryName).subscribe((country) => {
          this.countryInfo = country as CountryInfo[];
          this.loading = false;
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

  getLanguages(country: CountryInfo): string[] {
    const languages: string[] = [];
    for (const languageCode in country.languages) {
      if (country.languages.hasOwnProperty(languageCode)) {
        const language = country.languages[languageCode];
        languages.push(language);
      }
    }
    return languages;
  }
}
