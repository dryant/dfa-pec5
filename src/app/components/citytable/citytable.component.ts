import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CountryInfo } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { Router } from '@angular/router';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-citytable',
  templateUrl: './citytable.component.html',
  styleUrls: ['./citytable.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class CitytableComponent implements OnInit {
  [x: string]: any;
  countries: CountryInfo[] = [];

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries as CountryInfo[];
    });
  }

  goCountry(countryName: string): void {
    this.router.navigate(['/country', countryName]);
  }

  displayedColumns: string[] = ['flag', 'name'];
}
