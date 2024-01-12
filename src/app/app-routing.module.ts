import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitylistComponent } from './components/citylist/citylist.component';
import { CitytableComponent } from './components/citytable/citytable.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: CitylistComponent },
  { path: 'citytable', component: CitytableComponent },
  { path: 'citylist', component: CitylistComponent },
  { path: 'card-details', component: CardDetailsComponent },
  { path: 'country/:country', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
