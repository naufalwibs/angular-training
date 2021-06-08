import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputInformationComponent } from './pages/input-information/input-information.page';
import { HomePageComponent } from './pages/home-page/home-page.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddressListComponent } from './pages/address-list/address-list.pages';

import { AddressService } from './services/address.service';
import { ProductsService } from './services/products.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddressCardComponent } from './components/address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputInformationComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    AddressListComponent,
    ProductCardComponent,
    AddressCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AddressService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
