import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CountryInfo } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

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
  countries: CountryInfo[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries as CountryInfo[];
    });
  }
  displayedColumns: string[] = ['name', 'flag'];
}
