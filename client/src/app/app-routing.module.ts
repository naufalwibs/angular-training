import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.page';
import { InputInformationComponent } from './pages/input-information/input-information.page';
import { AddressListComponent } from './pages/address-list/address-list.pages';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'add-new-address',
    component: InputInformationComponent,
  },
  {
    path: 'address-list',
    component: AddressListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
