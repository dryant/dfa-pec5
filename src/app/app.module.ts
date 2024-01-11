import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitylistComponent } from './components/citylist/citylist.component';
import { CitytableComponent } from './components/citytable/citytable.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    CitylistComponent,
    CitytableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
