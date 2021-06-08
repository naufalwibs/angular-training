import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService) {}
  products = [];
  isFetching = false;
  private productsSubs: Subscription;

  ngOnInit() {
    this.productsSubs = this.productsService.productsChanged.subscribe(
      (product) => {
        this.products = product;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
    this.productsService.fetchProducts();
  }

  ngOnDestroy() {
    this.productsSubs.unsubscribe();
  }
}
