import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class CitylistComponent {}
