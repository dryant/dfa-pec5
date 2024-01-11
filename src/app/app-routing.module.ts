import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitylistComponent } from './components/citylist/citylist.component';
import { CitytableComponent } from './components/citytable/citytable.component';

const routes: Routes = [
  { path: '/', component: CitylistComponent },
  { path: '/citytable', component: CitytableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
