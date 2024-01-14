import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CountryInfo } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-citytable',
  templateUrl: './citytable.component.html',
  styleUrls: ['./citytable.component.scss'],
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule],
})
export class CitytableComponent implements OnInit {
  [x: string]: any;
  countries: CountryInfo[] = [];
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

  displayedColumns: string[] = ['flag', 'name'];
}
