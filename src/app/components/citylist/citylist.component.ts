import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CountryInfo } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, MatProgressSpinnerModule],
})
export class CitylistComponent implements OnInit {
  countries: CountryInfo[] = [];
  countryName: string | undefined;
  loading = false;

  constructor(
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries as CountryInfo[];
      this.loading = false;
    });
  }

  goCountry(countryName: string): void {
    this.router.navigate(['/country', countryName]);
  }
}
